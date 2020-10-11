export default function collectCarNumberCount(collection) {
  // // TODO 7: 在这里写实现代码
  // let number = 0;
  // for (let i = 0; i < collection.length; i++) {
  //   if (collection[i].substring(0, 2) === '粤A') {
  //     number++;
  //   }
  // }
  // return number;

  const result = collection.filter(i => i.startsWith('粤A'));
  return result.length;
}
