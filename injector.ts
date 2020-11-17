
/** Angular 的实现
 * 1. 分析依赖 （Angular 拿到所有的 provider，分级注入到对应的模块）
 * 2. 剔除边界 case（@SkipSelf @Optional cycle reference）
 * 3. 根据 provider 上报的初始化方式进行 switch case 的初始化 
 *  （useValue 使用值类型, useFactory 使用工厂, useExisting 使用 DI 树中已有的, useClass 使用类）
 * 4. 注入 target， 整个注入的过程是递归注入的
 */



export class Injector {
    private _records: Map<string, { scope: string, value: unknown }>;

    constructor() { 
        this._records = new Map();
    }

    public register(token: string, value: unknown) {
        this._records.set(token, { scope: '', value });
    }

    /**
     * 
     * @param target 注入目标
     * @param scope 作用域
     * @param deps token 对应的注入类
     */
    public inject<T>(target: Function, scope: object, deps: any[]) {
        const args = [];
        target.apply(scope, args);
    }
}