// | or

const color: 'red' | 'green' | ' blue' = 'red';
const statusCode: 500 | 404 | 400 | 200 = 200;

enum EColor {
    'red' = ' red',
    'green' = 'green',
    'blue' = 'blue',
}

const myColor: EColor = EColor.red;
console.log(EColor.green); // 1
