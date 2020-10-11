async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const result = await fetch(url);
  const data = await result.json();
  document.writeln(data.name);
  // const result = await fetch(url);
  //
  // document.writeln(JSON.parse(result).name);
  //这样写为啥不对呢。。
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
