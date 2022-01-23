// 1. use strict
//added in ES 5
// use this for valina Javascript.
'use strict';
//2. valiable
// let (added in ES6)

//Block Scope
// if use let variable in block coudld not access in block variable from outside
{
let name = 'bangrae';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);