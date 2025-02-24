import {useMemo} from "react";

export const usePageArray = (totalPages:number)=> {
    return useMemo(() => {
        const pagesArray = []
        for (let i = 0; i < totalPages; i++) {
            pagesArray.push(i + 1);
        }
        return pagesArray;
    }, [totalPages]);
}
