const injector = require('./injector.js');

/**
 * 测试类 `Car`
 * @param {*} _name
 */
function Car(_name) {
  this.name = _name || "car";
  this.run = function () {
    console.log(this.name, "is running well in Car class inner!");
  };
  // ... more funcs
}

/**
 * 测试类 `Wheel`
 * @param {*} _name
 */
function Wheel(_name) {
  this.name = _name || "wheel";
  this.rotate = function () {
    console.log(this.name, `is rotate well in Wheel Class inner!`);
  };
  // ... more funcs
}

/**
 * 主类
 * @param {*} name
 */
function Person(name, dependencies) {
  if (Array.isArray(dependencies)) {
    dependencies.forEach((dep) => {
      injector(Person, dep.token, dep.clz, dep.args);
    });
  }
  this.name = name || "";
  this.drive = function () {
    console.log(`${this.name} is driving ! car name is: ${this.car.name}, wheel is: ${this.wheel.name}`);
  };
}

/**
 * 假设这里是分析出来 and 序列化 后的依赖
 */
const deps = [
  { token: "car", clz: Car, args: ["法拉利"] },
  { token: "wheel", clz: Wheel, args: ["壳牌轱辘"] },
];

const p = new Person("SiCong.Wang", deps);

p.drive();
p.car.run();
p.wheel.rotate();
