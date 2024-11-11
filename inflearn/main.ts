// 사용자

import { ICalculator } from './cal';
import { Calculator } from './cal.impl';

const cal: ICalculator = new Calculator();

console.log(cal.add(1, 2));
console.log(cal.minus(1, 2));
console.log(cal.mul(1, 2));
console.log(cal.div(1, 2));
