import Header from "./Header/Header.tsx";
import Table from "./Table/Table.tsx";
import Pagination from "./Pagination/Pagination.tsx";
import {PaginationProvider} from "../context/PaginationContext.tsx";
import {ModalProvider} from "../context/ModalContext.tsx";
import { TableProvider } from "../context/TableContext.tsx";
import {SearchQueryProvider} from "../context/SearchQueryContext.tsx";
export default function Home(){
    return (
        <>
            <PaginationProvider>
                <TableProvider>
                    <ModalProvider>
                        <SearchQueryProvider>
                            <Header/>
                            <Table/>
                        </SearchQueryProvider>
                    </ModalProvider>
                </TableProvider>
                <Pagination/>
            </PaginationProvider>
        </>
    )
}