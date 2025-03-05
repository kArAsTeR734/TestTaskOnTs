import React, {createContext, FC, PropsWithChildren, useEffect, useState} from "react";
import {useInput} from "../hooks/useInput.ts";
import {useSearch} from "../hooks/useSearch.ts";
import {useTable} from "../hooks/useTable.ts";
import {IDetail} from "../models/IDetail.ts";

interface SearchQueryContextType {
    value:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    handleSearch: () => void,
    searchedDetails:IDetail[] | undefined,
}

export const SearchQueryContext = createContext<SearchQueryContextType | null>(null);

export const SearchQueryProvider: FC<PropsWithChildren> = ({children}) => {
    const searchQuery = useInput('');
    const {data} = useTable();
    const [searchedDetails, setSearchedDetails] = useState<IDetail[] | undefined>([]);
    const searchResult = useSearch(data,searchQuery.value);

    useEffect(() => {
        if (data) {
            setSearchedDetails(data);
        }   
        if(searchQuery.value === ''){
            setSearchedDetails(data);
        }
    }, [data,searchResult]);
    const handleSearch = () => {
        if(searchResult){
            setSearchedDetails(searchResult)
        }
    }

    return (
        <SearchQueryContext.Provider value={{...searchQuery,handleSearch,searchedDetails}}>
            {children}
        </SearchQueryContext.Provider>
    )

};