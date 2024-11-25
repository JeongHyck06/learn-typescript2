type IPerson2 = {
    name: string;
    walk(): void;
};

type IAnimal = {
    name: string;
    bark(): void;
};

function isPerson(o: object): o is IPerson2 {
    return 'name' in o && 'walk' in o;
}

function isAinmal(o: object): o is IAnimal {
    return 'name' in o && 'bark' in o;
}

function somethingTodo(param: IPerson2 | IAnimal) {
    // if ('walk' in param) {
    //     console.log(param.walk());
    // }
    // if ('bark' in param) {
    //     console.log(param.bark());
    // }

    if (isPerson(param)) {
        console.log(param.walk());
    }
    if (isAinmal(param)) {
        console.log(param.bark());
    }
}

type IData3 = {
    type: 'one';
    name: string;
    height: number;
    weight: number;
};

type IData4 = {
    type: 'two';
    createdAt: Date;
    updatedAt: Date;
};

// const data: IData3 | IData4 = {
// };
