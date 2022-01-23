'use strict';
// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// Index position 기반으로 Data를 저장
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);//배열은 해당 배열을 Index로 값을 불러 올수 있음
console.log(fruits[1]);//banana가 표시
console.log(fruits[2]);//배열의 바깥쪽을 불러올 경우 undefined 표시
console.log(fruits[fruits.length-1]);//배열에서 마지막을 찾을 경우에 사용


//  3. Looping over an array
// print all fruits
// a. for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//b. for of
for (let fruit of fruits) {
    console.log(fruit)
}

// c. forEach(정의된 동작을 배열에 있는 각각의 Item마다 수행)
fruits.forEach(function(){
    console.log('he');
})
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
})
//한 줄 표기 법
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));//anonymous function 기능 사용

// 4. Addion, deletion, copy
// push: add an item to the end
fruits.push('strawbery', 'peach')
console.log(fruits.length);
// pop remove an item from the end
fruits.pop();//마지막 item이 삭제
console.log(fruits);
fruits.pop(2);
console.log(fruits);

// unshift: add an item to the begining.
fruits.unshift('strawbery', 'peach')
console.log(fruits)
// Shift: remove an item to the begining.
fruits.shift();
console.log(fruits);

// Note!! shift, unshift are slower than pop and push(Pop과 Push의 경우 마지막에 추가를 하거나 빼면되지만 Unshift와 Shift는 처음에 Data를 넣으면서 기존의 있던 Data를 다음 칸으로 밀거나 당겨야 함으로 속도가 느림)
// Index를 활용하여 중간에 넣고 빼는 것 또한 속도가 빠르나 전체 Data를 움직이는 것은 속도가 느림
//slice: remove an item by index position
fruits.push('strawbery','pear');
console.log(fruits);
fruits.splice(2);//지우려는 개수를 지정하지 않으면 지정된 숫자의 index만 남기고 다 지움
console.log(fruits);
fruits.push('banana', 'strawbery','pear');
console.log(fruits);
fruits.splice(1, 1);//1번 Index부터 하나만 삭제함으로 Peach만 삭제 됨(1번 Index만 삭제)
console.log(fruits);
fruits.splice(1, 1, 'watermelon','grape');//지워진 자리부터 새로운 Item이 추가되면서 비워있지 않는 Index는 뒤로 밀리면서 새로운 Item 및 index가 추가된다.
console.log(fruits);

// combine two 8arrays
const fruits2 = ['lenon', 'mango'];
console.log(fruits2);
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
// indexOf(Item이 배열에 몇번째 있는지 확인)
console.log(fruits);
console.log(fruits.indexOf('watermelon'));//watermelon이 몇 번째 있는지 확인 가능, 배열 안에 해당하는 값이 없을 경우 -1을 return
// includes(Item이 배열에 있는지 확인, True or False로 Return)
console.log(fruits.includes("apple"));
// lastIndexOf 같은 이름을 가진 item 중에 마지막에 있는 index를 Return
fruits.push('watermelon');
console.log(fruits.indexOf('watermelon'));
console.log(fruits.lastIndexOf('watermelon'));
console.log(fruits);
const poped = fruits.pop(1);
console.log(fruits);
const wa = fruits.indexOf('watermelon');
console.log(wa);
console.log(fruits);
const poped2 = fruits.splice(1, 1);
console.log(fruits);
console.log(poped);
console.log(poped2);
const slice1 = fruits.slice(1, 3);
console.clear();
console.log(fruits);
console.log(slice1);


