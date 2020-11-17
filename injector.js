/**
 *
 * @param {*} target 注入目标
 * @param {*} clz 注入类
 * @param {*} token 注入的名称
 */
function injector(target, token, clz, args) {
    //  循环依赖检测，例如 Car -> Wheel -> Engine -> Car？
    //  如何控制 singleton ? -> 单个 scope 中，注入的类肯定单例的
    //  如何分级注入？ 假设 Work implements Person ？ -> scope 分级
    //  在尽量不修改原型的前提下，如何自动收集每个需要注入的类的需求，并序列化为对应的入参类型？ -> 通过构造函数来说明，IoC 自动收集比进行构造
    //  目前注入的类，在 Person 内部无法看到，都在原型上，对 IDE 不友好，如何改进？ -> 维基百科解释，依赖注入的诉求来源都是来自 base 类的构造函数入参
  target.prototype[token] = new clz(...args);
  return target;
}


module.exports = injector;