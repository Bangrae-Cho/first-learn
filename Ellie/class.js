'use strict';
// Object-oriented programimg
// class: template
// Object: instance of a class
// Javascript clasdded
// - introduced in ES6
// - syntactical suger over prototype-based inheritance
 
// 1. Class declarations
class Person {
    //construcor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }


    //methods
    speak() {
        console.log(`${this.name}: hello!`);
}
}
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value) {
       // if (value <0) {
       //     throw Error('age can not be negative');
       // }
        this._age =value < 0 ? 0: value;
    }
}
const user1 = new User( 'Steve', 'Job', 69);
console.log(user1.age);

// 3. Fields (Public, Private)
// too soon, 현재 지원해주는 Blowser가 없음
// https://devveloper.mozilla.org/en-US/docs/Javascript/Refer
class Experiment {
    publicField = 2;
    #privatField = 0;//외부에서는 접근되지 않음
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privatField);

// 4. Static properties and methods
// too soon(메모리의 사용을 조금이라도 줄여 주는 효과)
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);//static 함수를 사용하여 console.log(article.publisher);를 입력하면 undefined 됨
Article.printPublisher();

// 상속과 다양성
// 5. Inheritance
//  a way for one class to extend another class.
class Shape {
    constructor(width, height, color){//fiels
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {//method
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {//method
        return this.width*this.height;
    }
    toString() {
        return `Triangle: color: ${this.color}`;
    }
}
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('★')
    }
    getArea() {//method
        return (this.width*this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw()
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//instanceOf

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);//왼쪽 rectangle이 오른쪽의 Rectangle의 Instance인지 아니지 확인
console.log(Triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
