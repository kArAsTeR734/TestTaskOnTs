import './product-table.module.css'
import {fetchDetails} from "../../API/DetailService.ts";
import TableItem from "./TableItem.tsx";
import {useFetching} from "../../hooks/useFetching.ts";
import {usePagination} from "../../hooks/usePagination.ts";
import {useModal} from "../../hooks/useModal.ts";
import {IDetail} from "../../models/IDetail.ts";
import {useState} from "react";
import Modal from "../../UI/Modal/Modal.tsx";

export default function Table() {

    const {page, limit} = usePagination();
    const {modal,setActive} = useModal();
    const [editingDetail, setEditingDetail] = useState<IDetail| null>(null);



    const {data, isPending, isLoading} = useFetching({
        queryKey: ["PaginationPosts"],
        callback: fetchDetails,
        page,
        limit,
    });

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
                        {data?.map(detail => <TableItem key={detail.id} onEdit = {handleEditItem} detail={detail}/>)}
                        </tbody>
                    </table>
                </section>
            }
            <Modal editingPosition={editingDetail} onClose={() => console.log('Hello World')} onSave={() => console.log('Hello World')}/>
        </>
    )
}