// async & await
// clear style of using promise :)

// 1. async
function fetchUser() {
    // do network request in 10 secs...
    //return 'ellie';
    return new Promise((resolve, reject) =>{
        resolve('ellie');
    });
}
const user = fetchUser();
user.then(console.log);
console.log(user);

async function fetchUser1() {
    return 'ellie';
}
const user1 = fetchUser1();
user1.then(console.log);
console.log(user);

// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getApple() {
    await delay(1000);
    return 'Apple';
}
async function getBanana() {
    await delay(1000);
    return 'banana';
}
// 가장 늦은 결과와 복잡한 Coding
//function pickFruits() {
//   return getApple().then(apple => {
//        return getBanana().then(banana => `${apple} + ${banana}`);
//    });
//}
// 가장 늦은 결과와 간단한 coding
//async function pickFruits() {
//    const apple = await getApple();
//    const banana = await getBanana();
//    return `${apple} + ${banana}`;
//}
//가장 빠른 결과와 조금 복잡한 coding(recommend)
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
//const apple = getApple();
//const banana = getBanana();
//console.log('banana');
//console.log('apple');

// 가장 빠른 결과와 복잡한 코딩을 간단하게 작성

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);