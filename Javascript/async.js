console.log("script start");

requestAnimationFrame(function() {
  console.log("requestAnimationFrame");
});

setTimeout(function() {
  console.log("setTimeout");
}, 0);



Promise.resolve().then(function() {
  console.log("promise1");
}).then(function() {
  console.log("promise2");
}).then(function() {
  console.log("promise3");
}).then(function() {
  console.log("promise4");
}).then(function() {
  console.log("promise5");
});


console.log("script end");

/**
 *  실행결과
 *
 script end
 promise1
 promise2
 promise3
 promise4
 promise5
 equestAnimationFrame
 setTimeout

  즉 우선순위가 다음과 같음
 microtask(promise) > animation frame(rAF) > task queue(setTimeout)
 */

