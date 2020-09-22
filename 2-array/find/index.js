export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  let suitNum = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].age < 20 && collection[i].age > 10) {
      suitNum = i;
    }
  }
  return collection[suitNum].name;
}
