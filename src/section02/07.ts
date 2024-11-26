// 1. 데코레이터 = 함수
// 2. 클래스, 메서드, 파라미터, 프로퍼티(필드)

@test('some data')
class Person2 {
    constructor(public name: string) {}
}

function test(message: string) {
    return function (
        constructor: { new (name: string): Person2 },
        ctx: ClassDecoratorContext
    ) {
        return class extends constructor {
            title = message;
        };
        temp.prototype = Object.create(
            constructor.prototype
        );
        temp.prototype.constructor = constructor;
    };
}

interface AddType {
    (a: number, b: number): number;
}

const add5: AddType = function (
    a: number,
    b: number
): number {
    return a + b;
};

add5(1, 2);
const p3 = new Person2('hello world');

console.log(p3);
