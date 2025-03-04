import {createContext, FC, PropsWithChildren, useState} from "react";

interface PaginationContextType {
    page: number;
    limit: number;
    changePage: (page: number) => void;
    changeLimit: (limit: number) => void;
}

export const PaginationContext = createContext<PaginationContextType | null>(null);

export const PaginationProvider: FC<PropsWithChildren> = ({children}) => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const changeLimit = (limit: number) => {
        setLimit(limit)
        window.scrollTo({top: 0});
    }
    const changePage = (page: number) => {
        setPage(page);
        window.scrollTo({top: 0});
    }

    return (
        <PaginationContext.Provider value={{page, changePage, changeLimit, limit}}>
            {children}
        </PaginationContext.Provider>
    )

};