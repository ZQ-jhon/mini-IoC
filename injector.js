/**
 *
 * @param {*} target 注入目标
 * @param {*} clz 注入类
 * @param {*} token 注入的名称
 */
function injector(target, token, clz, args) {
    //  循环依赖检测，例如 Car -> Wheel -> Engine -> Car？
    //  如何控制 singleton ?
    //  如何分级注入？ 假设 Work implements Person ？
    //  如何实现注入的 Life cycle 钩子？
    //  在尽量不修改原型的前提下，如何自动收集每个需要注入的类的需求，并序列化为对应的入参类型？
    //  目前注入的类，在 Person 内部无法看到，都在原型上，对 IDE 不友好，如何改进？
  target.prototype[token] = new clz(...args);
  return target;
}


module.exports = injector;