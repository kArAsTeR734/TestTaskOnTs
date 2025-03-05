import './product-table.module.css'
import TableItem from "./TableItem.tsx";
import {useModal} from "../../hooks/useModal.ts";
import {IDetail} from "../../models/IDetail.ts";
import Modal from "../../UI/Modal/Modal.tsx";
import {useTable} from "../../hooks/useTable.ts";
import {useSearchProvider} from "../../hooks/useSearch.ts";

export default function Table() {
    const {modal,setActive} = useModal();
    const {searchedDetails} = useSearchProvider();
    const {editingDetail, setEditingDetail,isLoading,isPending} = useTable();
    const handleEditItem = (detail:IDetail) => {
        setActive(modal);
        setEditingDetail(detail);
    }
    if (isPending) return <div>Loading...</div>;
    return (
        <>
            {isLoading
                ? <h1>Loading...</h1>
                : <section className="products">
                    <table className="product_table" id="product">
                        <tbody id="tbody">
                        <tr className="header_row">
                            <td className="table__header_item"><strong>Название</strong></td>
                            <td className="table__header_item"><strong>Единица измерения</strong></td>
                            <td className="table__header_item"><strong>Артикул/код</strong></td>
                            <td className="table__header_item"><strong></strong></td>
                        </tr>
                        {searchedDetails?.map(detail =>
                            <TableItem key={detail.id}
                                       onEdit = {handleEditItem}
                                       detail={detail}/>)}
                        </tbody>
                    </table>
                </section>
            }
            <Modal editingDetail={editingDetail}/>
        </>
    )
}