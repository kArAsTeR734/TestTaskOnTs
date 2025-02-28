import {IDetail} from "../models/IDetail.ts";
import {createContext} from "react";

interface TableContextType {
    editingDetail: IDetail | null;
    setEditingDetail: (detail: IDetail | null) => void;
}

export const TableContext = createContext<TableContextType | null>(null);