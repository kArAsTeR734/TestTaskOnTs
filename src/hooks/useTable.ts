import {useContext} from "react";
import {TableContext} from "../context/TableContext.tsx";

export const useTable = () => {
    const tableContext = useContext(TableContext);
    if (!tableContext) throw new Error('Use TableContext must be used within a PaginationProvider');

    return tableContext;
}