class User {
    private name?: string;
    private height?: number;
    private marketing?: boolean;

    constructor(
        name?: string,
        height?: number,
        marketing?: boolean
    ) {
        if (name) this.name = name;
        if (height) this.height = height;
        if (marketing) this.marketing = marketing;
    }

    static Builder = class {
        private _name?: string;
        private _height?: number;
        private _marketing?: boolean;

        constructor(
            name?: string,
            height?: number,
            marketing?: boolean
        ) {
            if (name) this._name = name;
            if (height) this._height = height;
            if (marketing) this._marketing = marketing;
        }

        name(newName: string) {
            this._name = newName;
            return this;
        }
        height(newHeight: number) {
            this._height = newHeight;
            return this;
        }
        marketing(newMarketing: boolean) {
            this._marketing = newMarketing;
            return this;
        }

        build(): User {
            return new User(
                this._name,
                this._height,
                this._marketing
            );
        }
    };
}

// class User {
//     constructor(
//         private name?: string,
//         private height?: number,
//         private marketing?: boolean
//     ) {}
// }

// const u = new User('inflearn', 124);

const u = new User.Builder()
    .name('엄준식')
    .height(123)
    // .marketing(true)
    .build();

console.log(u);
