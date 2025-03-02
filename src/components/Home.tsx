import Header from "./Header/Header.tsx";
import Table from "./Table/Table.tsx";
import Pagination from "./Pagination/Pagination.tsx";
import {PaginationProvider} from "../context/PaginationContext.tsx";
import {ModalProvider} from "../context/ModalContext.tsx";
import { TableProvider } from "../context/TableContext.tsx";
export default function Home(){
    return (
        <>
            <PaginationProvider>
                <TableProvider>
                    <ModalProvider>
                            <Header/>
                            <Table/>
                    </ModalProvider>
                </TableProvider>
                <Pagination/>
            </PaginationProvider>
        </>
    )
}