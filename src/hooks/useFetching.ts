import {useQuery, UseQueryResult} from "@tanstack/react-query";

interface UseFetchingProps<TData> {
    queryKey: string[];
    callback: (page: number, limit: number) => Promise<TData>;
    page?: number;
    limit?: number;
}

export const useFetching = <TData,>({
        queryKey,
        callback,
        page,
        limit,
    }: UseFetchingProps<TData>): UseQueryResult<TData, Error> => {
    return useQuery<TData, Error>({
        queryKey: [...queryKey,page,limit],
        queryFn: () => callback(page, limit),
    });
};