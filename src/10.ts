// @Logging
class Book {
    // @Logging
    private readonly title: string;
    constructor(title: string) {
        this.title = title;
    }

    @Logging
    greet(param: string) {
        console.log(param);
        // console.log(this.title + ' ' + +param);
    }
}

function Logging(orginalMethod: Function, context: ClassMethodDecoratorContext) {
    console.log(orginalMethod, context);
    orginalMethod('world');
    console.log('logging !');
}
