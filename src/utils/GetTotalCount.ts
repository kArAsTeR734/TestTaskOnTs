export function getTotalCount(totalCount: number | undefined, limit: number,) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return Math.ceil(totalCount / limit);
}