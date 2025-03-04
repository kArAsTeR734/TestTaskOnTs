import React, {createContext, FC, PropsWithChildren} from "react";
import {useInput} from "../hooks/useInput.ts";

interface SearchQueryContextType {
    value:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
}

export const SearchQueryContext = createContext<SearchQueryContextType | null>(null);

export const SearchQueryProvider: FC<PropsWithChildren> = ({children}) => {
    const searchQuery = useInput('');

    return (
        <SearchQueryContext.Provider value={{...searchQuery}}>
            {children}
        </SearchQueryContext.Provider>
    )

};