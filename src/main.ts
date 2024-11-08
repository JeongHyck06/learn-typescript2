import { ErrorLogger } from '@lib/util/logger/error-logger';

console.log('hello world');

class Student {
    name = '';
    constructor(name: any) {
        this.name = name;
    }
}

ErrorLogger();
