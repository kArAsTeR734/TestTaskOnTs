import '../header.module.css'
import {IDetail} from "../../../models/IDetail.ts";
import {FC} from "react";

interface ItemCounterProps{
    data:IDetail[];
}

const ItemCounter:FC<ItemCounterProps> = ({data}) => {
    return (
        <div className="counter_wrapper">
            <div className="item_count" id="counter">{data?.length} единиц</div>
        </div>
    );
};

export default ItemCounter;