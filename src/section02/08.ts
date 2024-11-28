class Person3 {
    @length2(4, 6)
    public name: string = 'hello';

    constructor(name: string) {
        this.name = name;
    }
}

function logging(
    _: undefined,
    ctx: ClassFieldDecoratorContext
) {
    return function (
        this: Person3,
        value: undefined | string
    ) {
        Object.defineProperty(this, ctx.name, {
            get: function () {
                console.log('getter 등장');
                return value;
            },
            set: function (newValue: string) {
                console.log('setter 등장');
                value = newValue;
            },
            enumerable: true,
            configurable: true,
        });
        return '';
    };
}

function length2(start: number, end: number) {
    return function (
        _: undefined,
        ctx: ClassFieldDecoratorContext
    ) {
        return function (
            this: Person3,
            value: undefined | string
        ) {
            Object.defineProperty(this, ctx.name, {
                get: function () {
                    console.log('getter 등장');
                    return value;
                },
                set: function (newValue: string) {
                    if (!newValue) return;

                    if (newValue.length < start) {
                        throw new Error(
                            `Property ${String(
                                ctx.name
                            )} must be bigger than ${start}`
                        );
                    }
                    if (newValue.length > start) {
                        throw new Error(
                            `Property ${String(
                                ctx.name
                            )} must be smaller than ${start}`
                        );
                    }
                    console.log('setter 등장');
                    value = newValue;
                },
                enumerable: true,
                configurable: true,
            });
            return '';
        };
    };
}

const p4: Person3 = new Person3('wwrn');

console.log(p4.name);

console.log(p4.name);
