import Person from './person';
// TODO 14: 在这里写实现代码
export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
  }

  introduce() {
    let result = 'I am a Worker. I have a job.';
    return result;
  }
}
