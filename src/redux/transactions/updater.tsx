import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransactionNotification } from "../../components";
import { useActiveWeb3React } from "../../hooks";
import { showNotification, updateBlockNumber } from "../application";
import { useBlockNumber } from "../application/hooks";
import { AppDispatch, AppState } from "../store";
import { checkedTransaction, finalizeTransaction } from "./actions";

interface TxInterface {
    addedTime: number;
    receipt?: Record<string, any>;
    lastCheckedBlockNumber?: number;
}

export function shouldCheck(lastBlockNumber: number, tx: TxInterface): boolean {
    if (tx.receipt) return false;
    if (!tx.lastCheckedBlockNumber) return true;
    const blocksSinceCheck = lastBlockNumber - tx.lastCheckedBlockNumber;
    if (blocksSinceCheck < 1) return false;
    const minutesPending = (new Date().getTime() - tx.addedTime) / 1000 / 60;
    if (minutesPending > 60) {
        // every 10 blocks if pending for longer than an hour
        return blocksSinceCheck > 9;
    }
    if (minutesPending > 5) {
        // every 3 blocks if pending more than 5 minutes
        return blocksSinceCheck > 2;
    }
    // otherwise every block
    return true;
}

export default function Updater(): null {
    const { chainId, library } = useActiveWeb3React();
    const lastBlockNumber = useBlockNumber();
    const dispatch = useDispatch<AppDispatch>();
    const state = useSelector<AppState, AppState["transactions"]>(
        (state) => state.transactions,
    );

    const transactions = useMemo(
        () => (chainId ? state[chainId] ?? {} : {}),
        [chainId, state],
    );

    useEffect(() => {
        if (!chainId || !library || !lastBlockNumber) return;

        Object.keys(transactions)
            .filter((hash) => shouldCheck(lastBlockNumber, transactions[hash]))
            .forEach((hash) => {
                library
                    .getTransactionReceipt(hash)
                    .then((receipt) => {
                        if (receipt) {
                            dispatch(
                                finalizeTransaction({
                                    chainId,
                                    hash,
                                    receipt: {
                                        blockHash: receipt.blockHash,
                                        blockNumber: receipt.blockNumber,
                                        contractAddress:
                                            receipt.contractAddress,
                                        from: receipt.from,
                                        status: receipt.status,
                                        to: receipt.to,
                                        transactionHash:
                                            receipt.transactionHash,
                                        transactionIndex:
                                            receipt.transactionIndex,
                                    },
                                }),
                            );

                            // the receipt was fetched before the block, fast forward to that block to trigger balance updates
                            if (receipt.blockNumber > lastBlockNumber) {
                                dispatch(
                                    updateBlockNumber({
                                        chainId,
                                        blockNumber: receipt.blockNumber,
                                    }),
                                );
                            }
                        } else {
                            dispatch(
                                checkedTransaction({
                                    chainId,
                                    hash,
                                    blockNumber: lastBlockNumber,
                                }),
                            );
                        }
                    })
                    .catch((error) => {
                        console.error(
                            `failed to check transaction hash: ${hash}`,
                            error,
                        );
                    });
            });
    }, [chainId, library, transactions, lastBlockNumber, dispatch]);

    const successfulRecentTransactions = useMemo(() => {
        const txs = Object.values(transactions);
        return txs
            .filter((tx) => {
                if (
                    tx &&
                    tx.receipt &&
                    (tx.receipt?.status === 1 ||
                        typeof tx.receipt?.status === "undefined") &&
                    new Date().getTime() - tx.addedTime < 86400000
                ) {
                    return true;
                }
            })
            .sort((a, b) => b.addedTime - a.addedTime);
    }, [transactions]);
    const notifiedTransactions = useRef<string[]>([]);

    useEffect(() => {
        successfulRecentTransactions.forEach((tx) => {
            if (!notifiedTransactions.current.includes(tx.hash)) {
                notifiedTransactions.current.push(tx.hash);
                dispatch(
                    showNotification({
                        type: "positive",
                        content: (
                            <TransactionNotification hash={tx.hash}>
                                {tx.summary}
                            </TransactionNotification>
                        ),
                    }),
                );
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [successfulRecentTransactions.length]);

    return null;
}
