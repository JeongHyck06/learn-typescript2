interface IUser {
    name: string;
    birth: number;
    createdAt: Date;
    marketing: boolean;
    password: string;
}

type temp1 = Partial<IUser>;
type temp2 = Required<temp1>;

type keys = 'red' | 'blue' | 'black' | 'green';

type temp3 = Exclude<keys, 'red' | 'black'>;
type temp4 = Extract<keys, 'red' | 'black'>;

type temp5 = Omit<IUser, 'password'>;
type temp6 = Pick<IUser, 'name' | 'birth'>;

type tmep7 = Record<keys, IUser>;

function something(): temp1 {
    return {
        name: 'inflaern',
    };
}

type AddFunction = (a: number, b: number) => number;
const add2 = (a: number, b: number): number => a + b;

type temp8 = ReturnType<AddFunction>;
type temp9 = ReturnType<typeof something>;
type tmep10 = ReturnType<typeof add2>;
