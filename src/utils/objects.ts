export const selectObjectFields = <
    T extends Record<K, any>,
    K extends keyof any
>(
    obj: T,
    fields: K[]
): Pick<T, K> => {
    return fields.reduce((res: any, field: K) => {
        res[field] = obj[field];
        return res;
    }, {});
};
