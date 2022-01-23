/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 */
{
    const ellie = {
        name: 'ellie',// JavaScript의 Object는 항상 키와 Value로 구성되어 있음
        age: '18',
    };

    const name = 'ellie';
    const age = '18';

    const ellie2 = {
        name: name,
        age: age,
    };
    const ellie3 = {
        name,
        age,
    };
    console.log(ellie, ellie2, ellie3);
}
/**
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
{
    // Object
    const student = {
        name: 'Anna',
        level: 1,
    };

    // 기존의 방법
    {const name = student.name;
    const level = student.level;
    console.log(name, level);
    };

    // Destucting Assignment
    {
    const { name, level } = student;
    console.log(name, level);

    const {name: studentName, level: studentLevel} = student;
    console.log(studentName, studentLevel);
    };

    // Destructuring Array
    const animals = ['dog', 'cat'];

    //기존의 방법
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // Destructuring Assignemt
    {
        const[first, second] = animals;
        console.log(first, second);
    }
    
}

/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
{
    const obj1 = { key: 'key1'};
    const obj2 = { key: 'key2'};
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    // array copy and added new item
    const arrayCopy2 = [...array, {key: 'key3'}];
    console.log(array, arrayCopy, arrayCopy2);
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);
    
    // Object Copy
    const obj3 = {...obj1};
    console.log(obj3);

    // array concatenation
    const fruits1 = ['pear', 'strawbery'];
    const fruits2 = ['banan', 'kiwi'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    //object merge
    const dog1 = { dog1: 'docshoont'};
    const dog2 = {dog2: 'Jindogae'};
    const dog = {...dog1, ...dog2};
    console.log(dog);
}