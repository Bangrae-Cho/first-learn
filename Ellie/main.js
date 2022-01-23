// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// 'use strict was added late ECMAScript 5
'use strict';
function add(a, b) {
    return a + b;
}

const doSomething = add;
const sum = doSomething(1, 2);
console.log(sum);

function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  var mycar = {make: "Honda", model: "Accord", year: 1998};
  var x, y;
  
  x = mycar.make; // x 의 값은 "Honda" 입니다.
  console.log(x);

  
  myFunc(mycar);
  y = mycar.make; // y 의 값은 "Toyota" 입니다.
    console.log(y);               // (make 속성은 myFunc에서 변경되었습니다.)

    var factorical = function fac(n) { return n<2 ? 1: n*(n-1)};
    console.log(factorical(3));//6이 출력 됨

    function map(f, a) {
        var result = [], i;
        for (i = 0; i !=a.length; i++)
        result[i] = f(a[i]);
        console.log(i);
//        console.log(f);
        return result;S
    }
    var f = function(x) {
        return x*x*x;
    }
    f();
    var numbers = [0, 1, 2, 5, 10];
    var cube = map(f, numbers);
    console.log(cube);
//인터넷 강의
function add(num1, num2) {
    return num1 + num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function suprise(operator) {
    const result = operator(2, 3)//operator();=>error발생=> const result = operator(num1, num2);로 작성하면 정상 작동
    console.log(result);
}
//위에까지만 작성하면 eroor가 발생(operator에 아무 인자를 사용하겠다는 정의가 누락되어 있음)
suprise(add);//suprise의 인자에 add라는 함수의 ref 값을 입력함으로 superise 함수는 add라는 함수의 받아 add 함수를 실행한다.
// 위의 line을 작성함으로서 superise는 add의 자바스크립트의 실행 부분 즉 Code block을 실행한다.
suprise(divide);

//보충 강의 operator
// 변수 선언 후 값에 아무 것도 지정하지 않으면 undefined가 할당되고 이는 boolean 값으로 변환하면 false가 된다
// boolean에서 false로 반환되는 것들: 0, -0, ''(빈공간), null, undefined.
// boolean에서 True로 반환되는 것들: 값이 있는 모든 것들(number, string 등)
// 정상 작동 예
let num = 3;
if(num){
    console.log('true');
}
num && console.log(num);

// 비정상 작동
let num1;
if(num1){
    console.log('true');
}
num && console.log(num1);//undefined으로 결과값 출력

let obj = {
    name: 'ellie',
};
// 1번
if(obj){
    console.log(obj.name);
}
// 2번
obj && console.log(obj.name);
// 1번과 2번은 동일한 결과를 나타내어 주로 2번을 사용
// Object를 지정함에 있어 없는 Object를 지정하게되면 Program이 다운되는 현상이 있음

function square (number) {
    return number * number;
}
square(5);
console.log(square(5));

console.log(square1);   // square는 초기값으로 undefined를 가지고 호이스트된다.
console.log(square1(5));  // TypeError: square는 함수가 아니다.
square1 = function (n) {
  return n * n;
}
