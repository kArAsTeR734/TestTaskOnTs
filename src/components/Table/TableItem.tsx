import {FC} from 'react';
import {IDetail} from "../../models/IDetail";
import './product-table.module.css'

export interface TableItemProps {
    detail: IDetail;
    onEdit: (position: IDetail) => void;
}

const TableItem:FC<TableItemProps> = ({detail, onEdit}) => {

    return (
        <>
            <tr className="row">
                <td className="col" >{detail.id}</td>
                <td className="col">{detail.title}</td>
                <td className="col">{detail.body}</td>
                <td className="col">
                    <div onClick={() => onEdit(detail)} className="icon">
                        <img src="/src/icons/pencil.png" alt=""/>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default TableItem;