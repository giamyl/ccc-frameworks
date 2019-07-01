import SingletonFactory from "./base/utils/SingleFactory";

export default class MyApp {

    private static _instance: MyApp;

    public SingletonFactory: typeof SingletonFactory;

    public static getInstance() {
        if (!this._instance) {
            this._instance = new MyApp();
        }
        return this._instance;
    }

    private constructor() {
        this.init();
    }

    private async init() {
        console.log("在MyApp这里初始化参数配置等...");
    }

}

MyApp.prototype.SingletonFactory = SingletonFactory;

window[`APP`] = MyApp.getInstance();