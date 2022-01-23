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

/**
 *  Default parameters
 *  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */

{
    function printMessage(message) {
        console.log(message);
    }

    printMessage('hello');
}
{
    function printMessage(message) {
        if (message == null) {
            message = 'default message';}
            console.log(message);
    }
    printMessage('hello');
    printMessage();  
}
{
    function printMessage(message = '현대중공업') {//인자 다음에 = 를 사용한 후 원하는 Default Message를 입력한다.
        console.log(message);
    }
    printMessage('hello');// hello 출력
    printMessage();  // 현대중공업 출력
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#conditional_ternary_operator
 */
{
    const isCat = true;

    {
        let component;
        if (isCat) {
            component = '야옹이';
        } else {
            component = '멍멍이';
        }
        console.log(component);
    }
    {
        const component = isCat ? '멍멍이' : '야옹이';
        console.log(component);
        console.log(isCat ? '야옹이' : '멍멍이');
    }
}

/**
 * Template Literals
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
{
    const weather = 'sun with cloud';
    const temperature = '16도시';
    //안 좋은 예
    console.log('Today weather is' + weather + 'and temperature is ' + temperature);
    //좋은 예
    console.log(`Today weather is ${weather} and temperature is ${temperature}`);
}

// ES11
/**
 * Optional Chaining(ES11)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
{
    const person1 = {
        name: 'ellie',
        job: {
            tittle: 'S/W Engineet',
            manager: {
                name: 'Bob',
            },
        },
    };
    const person2 = {
        name: 'Bob',
    };
    //실폐 사례
    {
    function printManager(person) {
        console.log(person.job.manager.name);
    }
    printManager(person1);//Perso1d의 경우 Bob이라는 Manager가 있기 때문에 아무 이상없이 출력됨
    //printManager(person2);//Person2의 경우 직업도 없고 Manager도 없기 때문에 undefined Error발생
    }
    {
        function printManager(person) {
            console.log(
                person.job
                ? person.job.manager
                ?person.job.manager.name
                : undefined
                : undefined
            );
        }
        printManager(person1);
        printManager(person2);
    }
    {
        function printManager(person) {
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1);
        printManager(person2);
    }
    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person2);
    }
}
