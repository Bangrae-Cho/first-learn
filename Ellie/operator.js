// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals:
""""
1 + 2 = ${1 + 2}`);

console.log("bangrae's \n\tbook");//\n 줄바꿈, \t: Tab 삽입

// 2. Numeric Operators
console.log(1 + 1);//add
console.log(1 - 1);//substract
console.log(1 / 1);//Divide
console.log(1 * 1);//multiply
console.log(5 % 2);//remainder(나머지)
console.log(2 ** 3);//exponentiation(지수)

// 3. Increment and decrement operators
let counter =2;
const preIncrement = ++counter;
//counter = counter + 1
//preIncrement = counter;
console.log(`preIncremnet: ${preIncrement}, counter: ${counter}`);

const posIncrement = counter++;
//preIncrement = counter;
//counter = counter + 1

console.log(`posIncremnet: ${posIncrement}, counter: ${counter}`);
const preDecrement = --counter;
//counter = counter - 1
//preDecrement = counter;
console.log(`preDecremnet: ${preDecrement}, counter: ${counter}`);

const posDecrement = counter--;
//preDecrement = counter;
//counter = counter - 1

console.log(`posDecremnet: ${posDecrement}, counter: ${counter}`);

// 4. Assignment operators(할당 연산자)
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparson operators(비교 연산자)
console.log(10 < 6);//less than
console.log(10 <= 6);//less than or equal
console.log(10 > 6);//greater than
console.log(10 >= 6);//greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

function check(){
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('oops');
    }
    return true;
}

// &&(and), finds the first truthy value
console.log(`and: ${value1 || value2 || check()}`);
// often used to compres long if-statement
//nullable object && nullableObject.something(첫 번째 조건이 True여만 뒤의 것을 받아옴)
//if (nullableObject ! = null){
//    nullableObject.somthing
//}
function check(){
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('oops');
    }
    return true;
}

// ! (not)(값을 반대로 바꾸어 줌)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion(타입을 변경하여 비교)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== Strict equality, no type conversion(타입을 확인하여 비교)***recommand
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'eliie'};
const ellie2 = {name: 'eliie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equaity -  puzzler
console.log(0 == false);//true
console.log(0 === false);//false
console.log('' == false);//true
console.log('' === false);//false
console.log(null == undefined);//true
console.log(null === undefined);//false

//8. conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie'){//name이 Ellie이면 바로 이어오는 Code를 실행하고 아니면 다음 조건을 검사
    console.log('welcome , Eliie!');
} else if (name === 'coder'){//조건에 부합하면 이어오는 Code를 실행하고 아니면 다음 조건을 검사
    console.log ('You are amazing coder');
} else {//앞의 조건이 모두 아닐 때 아래 Code 실행
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1, value2;
console.log(name ==='ellie' ? 'yes' : 'no');//name이 ellie이면 ? 마크 뒤의 것을 실행하고 아니면 ':' 뒤의 것을 실행(간단한 조건에서만 사용하는 것을 권장)

// 10. Switch statment(If else보다 가독성이 좋아 사용 권장)
// use for multiple if check
// use for enum-like value check
//use for multiple type check in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
        console.log('love you');
        break;
    case 'FireFox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
}//결과가 같으면 한번에 묶어서 code 작성 가능
//case 'Chrome':
//case 'FireFox':
//console.log('love you');

// 11. loops
// while loop, while the dondition is truthy
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}//i의 값이 0보다 큰 조건에서 무한 반복. console.log를 3번 실행

// Do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
//조건을 먼저 검사해야하면 While을 사용하고 Block을 먼저 실행하고 조건을 확인할 경우 Do While을 사용

// for loop, for (begin(시작하는 문장); condition(조건 문장); step(단계))
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
//시작하는 문장을 처음 한번만 불러오고 다음부터는 조건과 단계만 실행
for(let i = 3; i > 0; i -= 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}
// nested loop
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }

}
//break, continue
//Q1 iterate from 0 to 10 and print only enven numbers
//(use continue)
for (let i = 0; i < 11; i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(`i:${i}`); 
}
//Q2. Iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++){
    console.log(`Q1 i: ${i}`);
    if (i >= 8 ){break;
    }

}