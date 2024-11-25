function something<T extends number | string>(param: T): T {
    return param;
}

something<number>(2024);
something<string>('hello world');

type IData1 = {
    id: number;
    name: string;
};

type IData2 = {
    city: string;
    phone: string;
};

function prtKey<
    T extends IData1 | IData2,
    K extends keyof T
>(param: T, key: K): T[K] {
    console.log(param[key]);
    return param[key];
}
