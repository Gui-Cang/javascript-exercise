function chooseMultiplesOfThree(collection) {
  const resultArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 3 === 0) {
      resultArray.push(collection[i]);
    }
  }
  return resultArray;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const setOfArray = new Set(collection);
  return [...setOfArray];
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
