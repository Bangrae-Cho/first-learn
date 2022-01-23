'use strict';
// Promise is a JavaScript Object for asynchronous operation.
// State: Pending(Process 수행 중) -> fulfilled or rejected(Process 완료)
// Producer vs Consumer

// 1. Producer
// When new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read fiels)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        //reject(new Error('no network'));
    }, 2000);
});

// Promise를 만드는 순간 우리가 전달한 Execute 실행하는 함수가 실행
// network에 연결된 상태라면 Promise를 만드는 순간 Network에서 뭔가를 실행
// 만일 사용자의 요청에 의해 Execute가 실행되어야 한다면 위와 같은 Code를 사용하면 안됨

// 2. Consumers: then, catch, finally(성공 또는 실패와 상관없이 어떤 기능을 마지막으로 수행하고 싶을 때 finally를 사용)
promise//
    .then(value => {
        console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});
// 3. Promise chaining
const fetchNumber = new promise((resolve, reject) => {
    setTimeput(() => resolve(1), 1000);
});
fetchNumber
.then(num => num *2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeOut(() => resolve(num-1), 1000);
    });
})
.then