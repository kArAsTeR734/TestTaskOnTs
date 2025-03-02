import {IDetail} from "../models/IDetail.ts";
import {createContext, FC, PropsWithChildren, useState} from "react";

interface TableContextType {
    editingDetail: IDetail | null;
    setEditingDetail: (detail: IDetail | null) => void;
}

export const TableContext = createContext<TableContextType | null>(null);

export const TableProvider: FC<PropsWithChildren> = ({children}) => {

    const [editingDetail,setEditingDetail] = useState<IDetail | null>(null);

    return (
        <TableContext.Provider value={{ editingDetail, setEditingDetail }}>
            {children}
        </TableContext.Provider>
    )

};