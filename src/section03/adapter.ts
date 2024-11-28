// 기존
class OldCalculator {
    add(a: number, b: number): number {
        return a + b;
    }
    minus(a: number, b: number): number {
        return a - b;
    }
}

// 기확팀 : 새로 이렇게 만들어줘 벅벅
interface INewCalculator {
    addAwithB(a: number, b: number): number;
    minusAwithB(a: number, b: number): number;
}

// Adapter extends 기존것 implements 새로운 요구 사항 인터페이스
class Adapter
    extends OldCalculator
    implements INewCalculator
{
    addAwithB(a: number, b: number): number {
        return this.add(a, b);
    }

    minusAwithB(a: number, b: number): number {
        return this.minus(a, b);
    }
}
