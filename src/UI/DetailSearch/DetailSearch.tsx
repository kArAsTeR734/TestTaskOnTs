import Button from "../Button/Button.tsx";
import btnClasses from "../Button/button.module.css";
import classes from './detail_search.module.css'
import {FC} from "react";
import {useSearchProvider} from "../../hooks/useSearch.ts";



const DetailSearch:FC = () => {
    const {handleSearch,value,onChange} = useSearchProvider();

    return (
        <div className={classes.item_actions}>
            <div className={classes.item_search}>
                <img src="/src/icons/SearchOutDivider.png" className={classes.item_search_icon} alt=""/>
                <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    placeholder="Поиск по названию"
                    className={classes.search_input}
                />
                <Button
                    onClick={() => handleSearch()}
                    className={btnClasses.searchButton}>
                    Поиск
                </Button>
            </div>
        </div>
    );
};

export default DetailSearch;