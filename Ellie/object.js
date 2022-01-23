'use struct'
// Object
// one of the Javascript's data types.
// a collection of related data and/or functionality
// nearly all obects in JavaScript are instances of Object
// Object = {key: Value}의 집합체

//const name = 'ellie';
//const age = 4;
//print(name, age);
//function print(name, age) {
//    console.log(name);
//    console.log(age);
//}
// 1. Literals and Poperties
const obj1 ={};// 'objeft literal' syntax
const obj2 = new Object(); //"object constructor" syntax
function print (person){
    console.log(person.name);
    console.log(person.age);
}
const ellie = { name: 'ellie', age: 4};//Object
print(ellie);
// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);
// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

//Object Key
// 2. Computed properties
// key shoud be always string
console.log(ellie.name);// 어떤 키가 필요한지 이미 알고 있는 경우 사용, coding할 때는 '.'을 사용 권장
console.log(ellie['name']);// String type. 어떤 키가 필요한지 모를 경우 사용
ellie['hasJob'] = true;
console.log(ellie[name]);//Fial==>undefined
console.log(ellie.hasJob);
// Computed properties를 사용할 경우
function printValue(obj, key) {
    console.log(obj.key);
}
printValue(ellie, "name");//undefined
function printValue(obj, key) {
    console.log(obj[key]);//computed properties
}
printValue(ellie, "name")//정상 동작함
printValue(ellie,'age');

// 3. Property value shorthand
const person1 = {name:'bob', age: 2};
const person2 = {name:'steve', age: 3};
const person3 = {name:'dave', age: 2};
const person4 = new Person('ellie', 30);
const person5 = new Person('bangrae',50);
console.log(person5);
// 4. Constructor function
function Person(name, age) {
    //return{
       // name: name,// Property value shorthand 기능으로 key와 Value의 이름이 같을 경우 하나만 입력 가능(ex: name)
       // age: age,
       //this = {}
       this.name = name;
       this.age = age;
        // return this;
    //}
}

// 5. in poeration property exiistence check (key in obj) Object에 key가 있는지 확인하는 기능
console.log('name' in ellie);//true
console.log('age' in ellie);//true
console.log('random' in ellie);//false
console.log(ellie.random);//undefined

// 6. for...in vs for...of
//for (key in obj)
console.clear();//이전의 console.log를 삭제하는 기능
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// 복잡한 코딩
for (value of array) {
    console.log(value);
}
//간단하게 작성된 코딩

// 7. Fun cloning
// Object.assign (dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};//메모리 내부에서는 user가 ref를 가르키고 있고 그 ref는 하위 obj를  가르키고 있음
const user2 = user;//user2도 다른 ref를 가르키고 있고 이 ref는 user의 하위 object를 가르키고 있음
user2.name = 'coder';
console.log(user);

// old way for copy from other object
const user3 = {};
    for (key in user) {
        user3[key] = user[key];//첫 번째 for문이 실행되면 user3의 첫 번째 Property에 user의 첫 번째 Property인 name이 들어가고 value는 user의 첫 번째 Property value인 ellie가 들어가고 두 번째 for 문이 실행되면 user3의 두 번째 Property에 user의 두 번째 Property인 age가 복사되고 value는 user의 두 번째 Property Value가 복사된다.
}
console.log(user3)

// new way for copy from other object
const user4 ={};
Object.assign(user4, user);//object.assign(target, source)
const user5 = Object.assign({}, user)
console.log(user4);
console.log(user5);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);//같은 Property Value는 뒤에서 하나씩 체워 옴으로 새로 생성된 Object의 Property Valve는 제일 마지막에으로 기입된 Source의 것을 취한다.
console.log(mixed);
