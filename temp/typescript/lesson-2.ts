enum MachineType {
    Car = 'car',
    Plain = 'plain',
    Ship = 'ship'
}

type MachineCommon = {
    model: string;
    released: number;
};

type Car = MachineCommon & {
    type: MachineType.Car;
    countWheels: number;
};
type Plain = MachineCommon & {
    type: MachineType.Plain;
    countWheels?: number;
};
type Ship = MachineCommon & {
    type: MachineType.Ship;
    countPipes: number;
};

type Machine = Car | Plain | Ship;

const SDK90: Machine = {
    type: MachineType.Ship,
    countPipes: 6,
    model: 'gg',
    released: 78,
};
//-------------------------------------------------------
type StudentsResponse = {
    students: Array<{
        name: string;
        year_released: number;
        age: number;
        average_score: number;
        days_of_visits: number[];
    }>;
};

type Student = {
    name: string;
    yearRealeased: number;
    age: number;
    averageScore: number;
    daysOfVisits: string[];
};
//-------------------------------------------------------
type Students = Student[];

const stringifyDaysOfVisits = (days: number[]): string[] => {
    return days.map(day => day.toString());
};

const parseDaysOfVisits = (days: string[]): number[] => {
    return days.map(day => Number(day));
};
//-------------------------------------------------------
const convertStudentsResponseToStudentsModel = (response: StudentsResponse): Students => {
    return response.students.map(({name, year_released, age, average_score, days_of_visits}) => ({
        name: name,
        yearRealeased: year_released,
        age: age,
        averageScore: average_score,
        daysOfVisits: stringifyDaysOfVisits(days_of_visits),
    }));
};

const convertStudentsModelToStudentsResponse = (students: Students): StudentsResponse => {
    return {
        students: students.map(({name, yearRealeased, age, averageScore, daysOfVisits}) => ({
            name: name,
            year_released: yearRealeased,
            age: age,
            average_score: averageScore,
            days_of_visits: parseDaysOfVisits(daysOfVisits),
        })),
    };
};
//-------------------------------------------------------
type ApiProduct = {
    label: string;
    id: string;
    is_expired: boolean;
    has_discount?: boolean;
    meta_info?: {
        calories: number;
        protein: number;
    };
};

type ApiCategory = {
    label: string;
    id: string;
    color: string;
    childrens?: Array<ApiCategory | ApiProduct>;
};

type ApiCategories = {
    category_list: Array<ApiCategory>;
};

//-----------------------------------------------------

type Product = {
    label: string;
    id: string;
    isExpired: boolean;
    hasDiscount?: boolean;
    metaInfo?: {
        calories: string;
        protein: string;
    };
};

type Category = {
    label: string;
    id: string;
    color: string;
    childrens?: Array<Category | Product>;
};

type Categories = {
    categoryList: Array<Category>;
};

//-------------------------------------------------------

type category_list = ApiCategory[];
type childrens = ApiCategory[] | ApiProduct[];

const stringifyMetaInfoCalories = (metaInfo: number[]): string[] => {
    return metaInfo.map(calories => calories.toString());
};

const parseMetaInfoCalories = (metaInfo: string[]): number[] => {
    return metaInfo.map(calories => Number(calories));
};

const stringifyMetaInfoProtein = (metaInfo: number[]): string[] => {
    return metaInfo.map(protein => protein.toString());
};

const parseMetaInfoProtein = (metaInfo: string[]): number[] => {
    return metaInfo.map(protein => Number(protein));
};

const convertApiProductToProduct = (api: ApiProduct): Product => {
    return api.ApiProduct.map(({label, id, is_expired, has_discount, meta_info}) => ({
        label: label,
        id: id,
        isExpired: is_expired,
        hasDiscount: has_discount,
        metaInfo: stringifyMetaInfoCalories(meta_info),
    }));
};

const convertProductToApiProduct = (product: Product): ApiProduct => {
    return product.map(({label, id, isExpired, hasDiscount, metaInfo}) => ({
        label: label,
        id: id,
        is_expired: isExpired,
        has_discount: hasDiscount,
        metaInfo: parseMetaInfoCalories(metaInfo),
    }));
};
//-------------------------------------------------------

/** 
 * Описать фронтовые типы (+)
 * Конвертеры в одну и другую сторону
 * Используй рекурсию
 */

// Задача архиватор строк (A-Z)
// AAAAAABBBBBBXDDDDDEEEKKKK -> A6B6X1D5E3K4
// если формат строки не верный, то должен возвращать 'Не верный формат'
// постараться написать максимально быструю функциЮ желательно за один проход

const str = 'AAAAAAAAAAAFFFFBBBBBXDDDDDEEEKKKK';
const result = [];
for (let i = 0; i < str.length; ++i) {
    const elem = str[i];
    if (result[elem] !== undefined) {
        ++result[elem];
    }
    else
        result[elem] = 1;
}
for (let key in result)
    console.log(key + result[key]);

// Типы программирования
// Функциональное

function getStart() {
    return 2;
}

function sum(a, b) {
    return a + b;
}

sum(getStart(), getStart());

function recursiveSum(arr, index = 0) {
    if (index === arr.length - 1) {
        return arr[index];
    }

    return arr[index] + recursiveSum(arr, index + 1);
}

// Структурное
// for, while, if, switch

// ООП - объекто ориентированный

class Collection {
    list = [];

    setCollection(array) {
        this.list = array;
    }

    getCollection() {
        return this.list;
    }

    getElementSum() {
        return this.list.reduce((memo, item) => item + memo, 0);
    }
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);  // 5 * 4 * 3 * 2 * 1
}

// factorial(5) {
//     return 5 * factorial (4) {
//         return 4 * factorail (3) {
//             return 3 * factorial(2) {
//                 return 2 * factorail(1) {
//                     return 1;
//                 }
//             }
//         }
//     }
// }