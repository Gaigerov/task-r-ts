import {number, string} from 'prop-types';

const num: number = 5;
const str: string = 'f';
const bool: boolean = true;
const arr: string[] = ['f', 'fg'];
const arr2: Array<string> = ['f', 'fg'];
const arr3: (string | number)[] = ['dfd', 5];

interface Person {
    name: string;
    age: number;
}

type Person2 = {
    name: string;
    age: number;
};

interface SumFunc {
    (first: number, second: number): number;
}
type SumFunc = (first: number, second: number) => number;

const sum: SumFunc = (first, second) => first + second;

const sum2 = (first: number, second: number): number => first + second;

type Calendar = Array<[number, number, number, number, number, number, number]>;

const calendar: Calendar = [
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
];

const COLOR = {
    RED: 'red',
    BLUE: 'blue',
};

enum Color {
    Red = 'red',
    Blue = 'blue',
}

const sum5 = (first: any, second: any): string => {
    if (typeof first === 'number' && typeof second === 'number') {
        return `${first + second}`;
    }

    return first?.toString() + second?.toString();
}

const printLn = (value: string): void => {
    console.log({value});
}

const User = {
    name: 'Ivan',
    age: 6,
    colors: ['red', 'blue'],
    isStudent: false,
    ratings: {
        geometry: 5,
        english: 3,
    },
};

type Ratings = {
    geometry: number;
    english: number;
};

type User = {
    name: string;
    age: number;
    color: string[];
    isStudent: boolean;
    ratings: Ratings;
};

type Car = {
    type: string;
    cardBg: string;
    cardBgHover: string;
    textPrimary: string;
    textSecondary: string;
    price: string;
    name: string;
    imageUrl: string;
    cardUrl: string;
    log_id: string;
};

type Gallery = {
    type: string;
    items: Car[];
}

type TabDiv = {
    type: string;
    items: Gallery[];
};

type Tab = {
    title: string;
    div: TabDiv;
};

type Div = {
    type: string;
    tabs: Tab[];
};

type StateDiv = {
    type: string;
    title: string;
    title_link: string;
    div: Div;
};

type State = {
    state_id: number;
    div: StateDiv;
};

type Card = {
    log_id: string;
    states: State[];
};

const MainCard: Card = {
    log_id: 'gh',
    states: [],
};
