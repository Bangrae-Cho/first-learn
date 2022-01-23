// JSON
// JavaScript Object Notation

// 1. Object to JSON, Object에서 JSON으로 넘어갈 때에는 함수나 Symbol이 넘어가지 않고 Key와 Value들이 String으로 넘어 감
// Stringfy(obj)
let json = JSON.stringify(true);
console.log(json);
json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
   // symbol: Symbol('id'),==> Symbol을 JSON으로 변경 불가함 28번 열 Error 발샐
    jump: () => {
        console.log(`${name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {// reviver 기능을 사용하면 String으로 넘어간 것을 다시 원래의 Data 형식으로 반환 가능
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(json);
rabbit.jump();
//obj.jump();// Object에서 Json으로 넘어가지 못한는 Object를 불러오면 Error가 발생
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);//Date를 Json으로 넘길 때 String으로 넘어 가고 다시 넘어올  때에도 Date가 아니 String으로 넘어 와 Error발생
console.log(rabbit.birthDate.getDate());//Rdviver 기능을 사용한 결과

// JSON Diff, Seautifier, JSON Parser, Json Validator 사이트에 가면 유용한 정보가 많음