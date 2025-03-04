import {IDetail} from "../models/IDetail.ts";
import {createContext, FC, PropsWithChildren, useState} from "react";
import {useFetching} from "../hooks/useFetching.ts";
import {fetchDetails} from "../API/DetailService.ts";
import {usePagination} from "../hooks/usePagination.ts";

interface TableContextType {
    editingDetail: IDetail | null;
    setEditingDetail: (detail: IDetail | null) => void;
    data: IDetail[] | undefined;
    isLoading: boolean;
    isPending: boolean;
}

export const TableContext = createContext<TableContextType | null>(null);

export const TableProvider: FC<PropsWithChildren> = ({children}) => {

    const [editingDetail,setEditingDetail] = useState<IDetail | null>(null);
    const {page, limit} = usePagination();

    const {data,isLoading,isPending} = useFetching({
        queryKey: ["PaginationPosts"],
        callback: fetchDetails,
        page,
        limit,
    });

    return (
        <TableContext.Provider value={{ editingDetail, setEditingDetail,data,isLoading,isPending}}>
            {children}
        </TableContext.Provider>
    )

};