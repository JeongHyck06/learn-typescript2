// 1.객체의 타입을 정의할 때
// 2. 클래스를 명시할 떄 ***

//사용법
export interface ICommon {
    add(a: number, b: number): number;
    minus(a: number, b: number): number;
}

export interface IExtension {
    mul(a: number, b: number): number;
    div(a: number, b: number): number;
}

export interface ICalculator extends ICommon, IExtension {}
