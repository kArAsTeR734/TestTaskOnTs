import '../header.module.css'
import {FC} from "react";

interface ItemCounterProps {
    dataLength: number;
}

const ItemCounter: FC<ItemCounterProps> = ({dataLength}) => {
    return (
        <div className="counter_wrapper">
            <div className="item_count" id="counter">{dataLength} единиц</div>
        </div>
    );
};

export default ItemCounter;