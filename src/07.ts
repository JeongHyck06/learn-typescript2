interface INumber {
    data: number;
}

interface IString {
    data: string;
}

interface IBoolean {
    data: boolean;
}

interface IGeneric<T, K> {
    data: T;
    value: K;
}

function example<T, K>(param: IGeneric<string, number>) {
    console.log(typeof param);
}

example<number, string>({ data: 'stirng', value: 2024 });
