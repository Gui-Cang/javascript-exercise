import Person from './person';
// TODO 17: 在这里写实现代码
export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
  }

  introduce() {
    let result = `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`;
    return result;
  }
}
