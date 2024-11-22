class Personnn {
    constructor(private readonly name: string) {}
}

const p2 = new Personnn('inflearn');

const add3 = new Function('a', 'b', 'return a + b');

console.log(add3(1, 2));

type PersonType = {
    name: string;
    greet(): void;
};

function Person(name: string) {
    this.name = 'inflearn';
    this.greet = function () {
        console.log(`hello i m ${this.name}`);
    };
}

Person.prototype.greet = function () {
    console.log(`hello i m ${this.name}`);
};

function Student(name: string, ID: string) {
    Person.call(this, name);
    this.ID = ID;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
