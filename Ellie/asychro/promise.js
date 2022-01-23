'use strict';
// Promise is a JavaScript object fir asynchronous operation.
// state: Pending(Processing) --> fulfilled or rejected
// Producer vs Cunsumer
// 1. Producer
// When new Promise isn created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout (() => {
        resolve('ellie');
        reject(new Error('no network'));//Error class는 JavaScript에서 제공하는 Object 중 하나(별도의 자표 참조)
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');//성공하던 실패하던 상관없이 수행
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(1);
    reject(new Error('What is this'));
}, 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num *3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1),1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve('chikine'), 1000);
});

const getEgg = hen =>
new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('How')),1000);//resolve(`${hen} => egg`), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => sunny side up`), 1000);
})
getHen()
.then(getEgg)//.then(hen =>getEgg(hen))
.catch(error => {
    return 'Bread';
})
.then(cook)//.then(egg => cook(egg))
.then(console.log)//.then(meal => console.log(meal));
.catch(console.log);