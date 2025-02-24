import './pagination.css'
import Select from "../../UI/Select/Select.tsx";
import {usePagination} from "../../hooks/usePagination.ts";
import {usePageArray} from "../../hooks/usePageArray.ts";
import {useFetching} from "../../hooks/useFetching.ts";
import {getAllDetails} from "../../API/DetailService.ts";
import {getTotalCount} from "../../utils/GetTotalCount.ts";

export default function Pagination() {

    const {page, limit, changePage} = usePagination();

    const {data} = useFetching({
        queryKey: ["posts"],
        callback: getAllDetails,
        page,
        limit,
    });

    const totalCount = data?.length;
    const pagesCount = getTotalCount(totalCount, limit);
    const pagesArray = usePageArray(pagesCount);
    return (
        <>
            <section className="pagination">
                <div className="item_pages">
                    {pagesArray.map(p =>
                            <span
                                onClick={() => changePage(p)}
                                className={page === p ? 'page active' : 'page'}
                                key={p}
                            >
                    {p}
                    </span>
                    )}
                    <div className="arrow">
                        <img rel="icon" src="/src/icons/arrow-right.png" alt="arrow"/>
                    </div>
                </div>

                <div className="page_count">
                    <div className="count_text">Показывать по:</div>
                    <Select
                        options={[
                            { name: '10', value: 10 },
                            { name: '20', value: 20 },
                            { name: '30', value: 30 },
                            { name: '40', value: 40 },
                            { name: '50', value: 50 },
                        ]}
                    />

                </div>
            </section>
        </>
    )
}