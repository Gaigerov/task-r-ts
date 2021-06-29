type Option<T> = {
    label: string;
    value: T;
};

const stringOptions: Option<number | string | boolean>[] = [
    {label: 'fg', value: 'dfdf'},
    {label: 'fg', value: 3},
    {label: 'fg', value: true},
    {label: 'fg', value: 3},
];


function sum<T>(a: T): T {
    return a;
}

const x = sum('sdfs');

type Student666 = {
    id: number;
    name: string;
};

type Teacher666 = {
    id: number;
    age: number;
}

const sortById = <T extends {id: number}>(list: T[]) => {
    return list.sort((a, b) => a.id - b.id);
};

