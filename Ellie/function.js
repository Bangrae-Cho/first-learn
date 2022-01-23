//function(5강)
//- fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value

// 1. fuction declaration
// function name(param1, param2){bosy...return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint --> createCard, CreatePoint (새분화 할 것)
// function is object in JS
function printHello(){
    console.log('hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){//new version
// if (from === undefined){//old Type
//   from = 'unknown';
 
// }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters (added in ES6)
function printAll(...args) {//...의 의미가 Rest parameters의미
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'cosing', 'ellie');

// 5. Local scope
let globalMessage = 'global';//global variable
function printMessage() {
    let message = 'hello';
    console.log(message);//local variable
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);//3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, Early exit
//bad
function upgradeUser(user){
    if (user.point>10) {
    // long upgrade logic
    }
}

//good
function upgradeUser(user){
    if (user.point<=10) {
        return;
    }
}

// first-class function
// function are treated like any other variable
// Can be assigned as a value to variable
// Can be passed as an argument to other functions.
// Can be returned by another function

// 1. Function expession
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() {//anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
// anonymous function
const printYes = function() {
    console.log('yes');
}
// named function
// better deburgging in debugger's stack traces
// recursions
const printNo = function print() {//named function
    console.log('no');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
// always anonymous function
const simplePrint = function(){
    console.log('simplePrint');
}

const simplePrint1 = () => console.log('simplePrint!');
simplePrint();
simplePrint1();

const add = function(a, b) {
    return a + b;
}
add();

//위의 function을 간결하게 Arrow Function으로 바꾸면

const add1 = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression(근래 잘 사용하지 않음)
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// Function calcurate(command, a, b)
// command: add, substract, divide, multiply, remainer

function calculate(command, a, b) {
    switch(command){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case  'divide':
            return a / b;
            
        case 'multiply':
            return a * b;
        case 'remainer':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));
console.log(calculate('divide', 2, 3));
console.log(calculate('substract', 2, 3));
console.log(calculate('multiply', 2, 3));
console.log(calculate('remainer', 2, 3));
console.log(calculate("", 2, 3));

