import {useInput} from "../../hooks/useInput.ts";
import Button from "../../UI/Button/Button.tsx";
import btnClasses from '../../UI/Button/button.module.css'
import headerClasses from './header.module.css'
import {useFetching} from "../../hooks/useFetching.ts";
import {getAllDetails} from "../../API/DetailService.ts";
import {usePagination} from "../../hooks/usePagination.ts";
import {useModal} from "../../hooks/useModal.ts";
import {useTable} from '../../hooks/useTable.ts'

export default function Header() {
    const search = useInput("");
    const {modal, setActive} = useModal();
    const {page, limit} = usePagination();
    const {setEditingDetail} = useTable();
    const {data} = useFetching({
        queryKey: ["posts"],
        callback: getAllDetails,
        page,
        limit,
    });

    const handleCreateButton = ()=>{
        setActive(modal);
        setEditingDetail(null);
    }

    return (
        <>
            <header className="header">
                <div className="item_header_wrapper">
                    <h2 className="item_header">Номенкулатура</h2>
                    <div className="counter_wrapper">
                        <div className="item_count" id="counter">{data?.length} единиц</div>
                    </div>
                </div>
                <div className="item_actions">
                    <div className="item_search">
                        <img src="/src/icons/SearchOutDivider.png" className="item_search-icon" alt=""/>
                        <input
                            type="text"
                            {...search}
                            placeholder="Поиск по названию"
                            className="search_input"
                        />
                        <Button
                            onClick={() => console.log("Hurray")}
                            className={btnClasses.searchButton}>Поиск</Button>
                    </div>
                </div>

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