class Person4 {
    public name: string = 'hello';

    constructor(name: string) {
        this.name = name;
    }

    @exec
    getName(): string {
        if (!this.name) return 'defualt';
        return this.name;
    }
}

function exec(
    target: Function,
    ctx: ClassMethodDecoratorContext
) {
    const originalMethod = target;
    return function (): string {
        const start = performance.now();
        const end = performance.now();

        console.log(`exec time: ${end - start}ms`);
        return '';
    };
}

const p5: Person4 = new Person4('inflearn');
console.log(p5.getName());
