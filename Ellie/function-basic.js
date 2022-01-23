'use strict';
// 함수 선언
// 함수 호출

function doSomething() {// 소괄호 안에는 함수를 수행할 인자들을 정의하고나서 코드블럭 작성
    console.log();// {} 중괄호 내에 codeblock을 작성하고 정의만 해 두면 실행되지 않고 이를 사용하기 위해서는 함수를 호출해야 한다.
    //const result = add(2, 3);
    //console.log(result);
}
function add(a, b) {
    const sum = a + b;
    return sum;  
}
// 함수 호출, 함수를 호출하기 위해서는 함수 이름과 () 소괄호를 이용해서 함수에서 원하는 정의된 인자 값을 활용해서 호출해야 하다
// 함수의 이름자체는 함수를 가르키는 함수 자체가 되어 괄호를 사용하지 않고 함수이름만 다른 함수에 바로 사용하거나 다른 함수의 인자로 사용
//doSomething(add);// 함수 전달을 위해서는 반드시 함수 이름만 적어 전달할 것 
const addFun = add;
console.log(add);
console.log(addFun(1, 2));



