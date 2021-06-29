
export const setStorageValue = (storage: typeof localStorage | typeof sessionStorage, key: string, value: any) => {
    const prepareValue = JSON.stringify(value);
    storage.setItem(key, prepareValue);
};

export const getStorageValue = (storage: typeof localStorage | typeof sessionStorage, key: string) => {
    const value = storage.getItem(key) || 'null';
    const prepareValue = JSON.parse(value);
    return prepareValue;
};

export const makeDayMonthForDate = (value: number) => {
    return value.toString().length === 1 ? `0${value}` : value;
}
