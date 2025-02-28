import {IDetail} from "../models/IDetail.ts";
import {createContext} from "react";

interface TableContextType {
    editingDetail: IDetail | null;
}

export const TableContext = createContext<TableContextType | null>(null);