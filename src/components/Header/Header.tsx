import Button from "../../UI/Button/Button.tsx";
import btnClasses from '../../UI/Button/button.module.css'
import headerClasses from './header.module.css'
import {useFetching} from "../../hooks/useFetching.ts";
import {DetailService} from "../../API/DetailService.ts";
import {usePagination} from "../../hooks/usePagination.ts";
import {useModal} from "../../hooks/useModal.ts";
import {useTable} from '../../hooks/useTable.ts'
import DetailSearch from "../../UI/DetailSearch/DetailSearch.tsx";
import {useEffect, useState} from "react";
import ItemCounter from "./ItemCount/ItemCounter.tsx";

export default function Header() {
    const {modal, setActive} = useModal();
    const {page, limit} = usePagination();
    const [itemsCount, setItemsCount] = useState(0); // Состояние для количества элементов
    const {setEditingDetail} = useTable();
    const {data} = useFetching({
        queryKey: ["posts"],
        callback: DetailService.getAllDetails,
        page,
        limit,
    });
    const handleCreateButton = ()=>{
        setActive(modal);
        setEditingDetail(null);
    }
    useEffect(()=> {
        if(data){
            setItemsCount(data.length);
        }
    },[data]);
    return (
        <>
            <header className="header">
                <div className="item_header_wrapper">
                    <h2 className="item_header">Номенкулатура</h2>
                    <ItemCounter dataLength={itemsCount}/>
                </div>
                <DetailSearch/>
                <Button
                    onClick={() => handleCreateButton()}
                    className={btnClasses.addPositionButton}>
                    <div className={headerClasses.addPositionPlus}></div>
                    <div
                        className={headerClasses.addPositionText}>
                        Новая позиция
                    </div>
                </Button>
            </header>
        </>
    )
}