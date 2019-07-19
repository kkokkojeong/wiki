var timeoutId = setTimeout(function () {
  console.log(10000)
}, 10000);

// console.log(timeoutId);
// clearTimeout(timeoutId)


var a = 123;
setTimeout(function () {
  console.log(a)
}, 0);
a = 456;
