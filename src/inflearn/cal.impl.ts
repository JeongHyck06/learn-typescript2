import { ICalculator, IExtension } from './cal';

// 구현체
export class Calculator implements ICalculator {
    add(a: number, b: number): number {
        return a + b;
    }
    minus(a: number, b: number): number {
        return a - b;
    }

    mul(a: number, b: number): number {
        return a * b;
    }
    div(a: number, b: number): number {
        return a / b;
    }
}
