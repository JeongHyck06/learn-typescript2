const arr1: number[] = [1, 2, 3, 4];
const arr3: Array<number> = [1, 2, 3, 4];

const arr4: number[][] = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];

const arr5: Array<Array<number>> = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];

//tuple
const arr2: readonly [number, boolean, object, string] = [1, true, {}, 'hello'];
// arr2.push('new value'); readonly로 push 방지
console.log(arr2);
