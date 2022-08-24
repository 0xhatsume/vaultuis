import { useEffect } from "react";

export function useScroll(callback: (e: Event) => void) {
    useEffect(() => {
        if (typeof document !== "undefined") {
            document.addEventListener("scroll", callback);
        }

        return () => {
            document.removeEventListener("scroll", callback);
        };
    }, [callback]);
}
