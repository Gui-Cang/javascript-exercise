import Person from './person';
// TODO 19: 在这里写实现代码
export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const father = super.introduce();
    const result = `I am a Student. I am at Class ${this.klass}.`;
    return `${father} ${result}`;
  }
}
