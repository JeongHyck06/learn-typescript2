class Person {
    constructor(private name: string, private _height: number) {}
    //getter
    getName() {
        return this.name;
    }

    //setter
    setName(newName: string) {
        this.name = newName;
    }

    get height() {
        console.log('getter 호출');
        return this._height;
    }
    set height(newHeight: number) {
        console.log('setter 호출');
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            this._height = 0;
        }
    }
}

const p: Person = new Person('yongsoo', 144);
// console.log(p.getName());
// p.setName('inflearn');
// console.log(p.getName());

console.log(p.height);
p.height = -100;
console.log(p.height);
