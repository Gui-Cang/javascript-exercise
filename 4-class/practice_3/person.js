// TODO 12: 在这里写实现代码
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    let result = `My name is ${this.name}. I am ${this.age} years old.`;
    return result;
  }
}
