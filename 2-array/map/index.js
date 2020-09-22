export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const resultArray = [];
  for (let i = 0; i < collection.length; i += 1) {
    resultArray.push(String.fromCharCode(collection[i] + 64).toLowerCase());
  }
  return resultArray;
}
