import {useContext} from "react";
import {PaginationContext} from "../context/PaginationContext.tsx";

export const usePagination = () => {
    const paginationContext = useContext(PaginationContext);
    if (!paginationContext) throw new Error('Use PaginationContext must be used within a PaginationProvider');

    return paginationContext;
}