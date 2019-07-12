// call, apply, bind는 함수 객체가 가진 메서드입니다
// 이를 이용해 this가 가리키는 객체를 변경할 수 있습니다
function fn(age) {
  this.age = age;
}

var obj = {};
fn.call(obj, 10);
console.log(obj);

/* apply는  함수인자 배열로 받습니다 */
fn.apply(obj, [10]);
console.log(obj);

// bind는  함수를 실행시키는 대신  this가 변경된 함수를 반환합니다
fn.bind(obj, 10);
console.log(obj);
