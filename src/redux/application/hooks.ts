import { useSelector } from "react-redux";
import { useActiveWeb3React } from "../../hooks";
import { AppState } from "../store";

export function useBlockNumber(): number | undefined {
    const { chainId } = useActiveWeb3React();

    return useSelector(
        (state: AppState) => state.application.blockNumber[chainId ?? -1],
    );
}

export function useActiveModalList() {
    return useSelector((state: AppState) => state.application.activeModalList);
}

export function useNotificationList() {
    return useSelector((state: AppState) => state.application.notificationList);
}

export function useIsStickyHeader() {
    return useSelector((state: AppState) => state.application.isHeaderSticky);
}
