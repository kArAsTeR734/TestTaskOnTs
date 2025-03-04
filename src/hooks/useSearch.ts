import {IDetail} from "../models/IDetail.ts";
import {useContext, useMemo} from "react";
import {SearchQueryContext} from "../context/SearchQueryContext.tsx";

export const useSearchProvider = () => {
    const searchContext = useContext(SearchQueryContext);
    if (!searchContext) throw new Error('Use SearchContext must be used within a SearchProvider');

    return searchContext;
}

export const useSearch = (details: IDetail[] | undefined, searchQuery: string) => {
    const searchedDetails = useMemo(() => {
        if (!searchQuery) {
            return details;
        }
        return details?.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [details, searchQuery]);

    return searchedDetails;
};
