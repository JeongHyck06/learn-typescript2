abstract class Builderinit {
    static Builder = class<T extends object> {
        [props: string]: Function;
        build(): Partial<T> {
            return {} as Partial<T>;
        }
    };
}

@Builder
class User extends Builderinit {
    constructor(
        private name: string,
        private height: number,
        private marketing: boolean
    ) {
        super();
    }
    //원래 여기에 Builder 클래스 구현해서 사용했었음
}

function Builder(
    constructor: {
        new (...args: any[]): any;
    },
    ctx: ClassDecoratorContext
) {
    const _ = new constructor();
    const keys = Object.keys(_);
    console.log(keys);

    const temp = class extends constructor {
        static Builder = class {
            constructor() {
                for (const key of keys) {
                    Object.defineProperties(this, {
                        ['_' + key]: {
                            value: null,
                            enumerable: true,
                            writable: true,
                            configurable: true,
                        },
                        [key]: {
                            value: function (
                                newValue
                            ): typeof Builder {
                                this['_' + key] = newValue;
                                return this;
                            },
                            enumerable: false,
                            writable: false,
                            configurable: false,
                        },
                    });
                }
            }
            build() {
                return new constructor(
                    ...keys.map((e) => this['_' + e])
                );
            }
        };
    };

    temp.prototype = Object.create(constructor.prototype);
    temp.prototype.constructor = constructor;
    return temp as any;
}

const u1 = new User.Builder().name('inflearn').build();
const u2 = new User.Builder().name('inflearn').build();
const u3 = new User.Builder().name('inflearn').build();
