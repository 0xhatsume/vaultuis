import React from "react";
import ApplicationUpdater from "../../redux/application/updater";
// import ListUpdater from "~redux/lists/updater";
import MulticallUpdater from "../../redux/multicall/updater";
import TransactionUpdater from "../../redux/transactions/updater";

export function Updaters() {
    return (
        <>
            <ApplicationUpdater />
            {/* <ListUpdater /> */}
            <MulticallUpdater />
            <TransactionUpdater />
        </>
    );
}
