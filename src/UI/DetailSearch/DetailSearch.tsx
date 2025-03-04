import Button from "../Button/Button.tsx";
import btnClasses from "../Button/button.module.css";
import classes from './detail_search.module.css'
import React, {FC} from "react";

interface DetailsSearchProps {
    value:string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const DetailSearch:FC<DetailsSearchProps> = ({...props}) => {
    return (
        <div className={classes.item_actions}>
            <div className={classes.item_search}>
                <img src="/src/icons/SearchOutDivider.png" className={classes.item_search_icon} alt=""/>
                <input
                    {...props}
                    type="text"
                    placeholder="Поиск по названию"
                    className={classes.search_input}
                />
                <Button
                    onClick={() => console.log(props.value)}
                    className={btnClasses.searchButton}>
                    Поиск
                </Button>
            </div>
        </div>
    );
};

export default DetailSearch;