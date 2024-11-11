class Animal {}

abstract class Person extends Animal {
    #name: string;

    constructor(name: string) {
        super();
        this.#name = name;
    }
    set name(newName: string) {
        this.name = newName;
    }
    get name() {
        return this.#name;
    }

    abstract greet();
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }

    greet() {
        console.log(`hello world}`);
    }
}
