'use strict';
// Q1 make a string out of an array
const fruits = ['apple', 'banana', 'orange']
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
const result = fruits.join(', & ');
console.log(result);
//Q2. make an array out of a string
const fruits1 = 'apple, kiwi, banana, chery';
const fruits2 = [fruits1];
console.log(fruits2);
const result1 = fruits1.split(',', 2);//구분자가 없으면 split은 하나의 data 영역에 모든 것을 다 넣기 때문에 반드시 구분자를 사용
console.log(result1);

// Q3. make this array look.like this:[5,  4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];
const result3 = array.reverse();
console.log(result3);
console.log(array);

// Q4. make new array without the first tow elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,array.length);
    console.log(result);
    console.log(array)
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const Students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 29, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a sutdent with the score 90
{
   // const result = Students.find(function(Student, index) {   function의 Arrow function 법으로 아래같이 간단하게 표현 가능
   //     return Student.score === 90;
    const result = Students.find((Student) => Student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = Students.filter((Student) => Student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// Result should be:[45, 80, 90, 66, 88]
{
    const result = Students.map((Student) => Student.score);//callback 함수로 리턴되는 인자는 최대한 이해하기 쉽게 이름을 지정한다.
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    //const result = Students.find((Student) => Student.score <= 50);
    //console.log(result);
    const result = Students.some((Student) => Student.score < 50);//하나의 조건이라도 만족하는 경우 some 사용
    console.log(result);
    const result1 = !Students.every((Student) => Student.score < 50);// 모든 조건이 만족하는지 확인할 경우 every 사용
    console.log(result1);
}

// Q9. conpute students average score

{
  //  const result = Students.reduce((prev, curr) => {
  //      console.log('---------');
  //      console.log(prev);
  //      console.log(curr);
  //      return prev + curr.score;
  //  }, 0);
  //  console.log(result);
  //  const average = result / Students.length;
  //  console.log(average);
  const result = Students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / Student.length);
}
console.clear();

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = Students
    .map((Student) => Student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'

{
    const result = Students.map((Student) => Student.score)
    .sort((a, b) => a-b)
    .join();
    console.log(result);
}
// result should be: '90, 88, 80, 66, 45'

{
    const result1 = Students.map((Student) => Student.score)
    .sort((a, b) => b-a)
    .join();
    console.log(result1);
}