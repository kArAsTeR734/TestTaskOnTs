import Header from "./Header/Header.tsx";
import Table from "./Table/Table.tsx";
import Pagination from "./Pagination/Pagination.tsx";
import {PaginationProvider} from "../context/PaginationContext.tsx";
import {ModalProvider} from "../context/ModalContext.tsx";

export default function Home(){
    return (
        <>
            <PaginationProvider>
                <ModalProvider>
                    <Header/>
                    <Table/>
                </ModalProvider>
                <Pagination/>
            </PaginationProvider>
        </>
    )
}