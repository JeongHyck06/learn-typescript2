// class Animal {
//     bark() {}
// }

// class Cat extends Animal {
//     bark(): void {
//         console.log('야옹');
//     }
// }
// class Dog extends Animal {
//     bark(): void {
//         console.log('멍멍');
//     }
// }

abstract class Linux {
    constructor(private readonly _name: string) {}

    get name() {
        return this._name;
    }

    trunOn() {
        console.log('컴퓨터 키기');
    }
    trunOff() {
        console.log('컴퓨터 끄기');
    }

    abstract login();
}

interface IPhotoShop {
    imagePatch();
}

interface IVisualStudio {
    codeEdit();
}

interface IExcel {
    getCell();
}

class Redhat extends Linux implements IPhotoShop, IExcel {
    constructor(name: string) {
        super(name);
    }
    login() {
        console.log('id pw로 로그인');
    }
    imagePatch() {
        console.log('이미지 수정');
    }

    getCell() {
        console.log('셀 정보 가져오기');
    }
}

class Debian extends Linux implements IVisualStudio {
    constructor(name: string) {
        super(name);
    }
    login() {
        console.log('지문 로그인');
    }
    codeEdit() {
        console.log('js 코드 수정');
    }
}

class Ubuntu extends Linux {
    constructor(name: string) {
        super(name);
    }
    login() {
        console.log('안면 인식 로그인');
    }
}
