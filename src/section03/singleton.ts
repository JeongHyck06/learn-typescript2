class Config {
    private readonly option: any;
    private static _instance: any;
    private constructor(option: any) {
        this.option = option;
    }

    public static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new Config('test');
        return this._instance;
    }
}

console.log(Config.getInstance());

// new Config('test')
