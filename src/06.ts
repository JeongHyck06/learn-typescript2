interface INumber {
    value: number;
}

interface IString {
    data: string;
}

/**
 * @interface & AND
 *  @union | OR
 */

function printSome(param: INumber | IString) {
    if ('value' in param) console.log(param.value);

    if ('data' in param) console.log(param.data);
}

printSome({ value: 2024 });
printSome({ data: 'asd' });

function printAnother(param: INumber & IString) {
    console.log(param);
}

printAnother({ value: 2024, data: '22' });
