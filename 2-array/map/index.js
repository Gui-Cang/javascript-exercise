export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  // for (let i = 0; i < collection.length; i += 1) {
  //   resultArray.push();
  // }
  return collection.map(i => String.fromCharCode(i + 64).toLowerCase());
}
