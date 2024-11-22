const temp3: object = {
    id: 1,
    name: 'inflearn',
};

type IData = {
    id: number;
    name: string;
};

console.log((temp3 as IData).id);
console.log((<IData>temp3).id);
