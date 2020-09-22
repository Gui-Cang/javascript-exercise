import Person from './person';
// TODO 20: 在这里写实现代码
export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    let father = super.introduce();
    let result1 = `I am a Teacher. I teach Class ${this.klass}.`;
    let result2 = 'I am a Teacher. I teach No Class.';

    if (this.klass === null || this.klass === undefined || this.klass === '') {
      return father + ' ' + result2;
    } else {
      return father + ' ' + result1;
    }
  }
}
