'use strict';
// Java Script is syschronous.==> 정해진 순서대로 순차적으로 실행(동기)
// Exxcute the code block by orger after hoisting
// hoisting: var, function declartion
console.log('1');//JavaScript가 세번째 실행
setTimeout(() => console.log('2'), 1000); // Asyscrhronous(비동기)에서 setTimeout(setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;)을 이용하여 Blowers에서 설정된 시간만큼 지연 시켜 실행, 이 때 설정된 시간은 ms임.
console.log('3');//JavaScript가 네번째 실행

// Sychronous callback ==> 함수 정의부분을 맨 위로 올리는 Hoisting 기능으로 10번 열의 function정이를 맨 위로 끌어 올려 실행
function printImmediately (print) {//JavaScript가 첫번째 실행
    print();
}
printImmediately(() => console.log('hello'));//JavaScript가 다섯번째 실행 후 6번 행 실행
// Asyschronous callback
function printWithDelay (print, timeout) {//JavaScript가 두번째 실행
    setTimeout(print, timeout);
}
printWithDelay (() => console.log('asysnc callback'), 2000);// 6번 행 실행 후 실행

// callback hell example
class userStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(is);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

getRoles(user, onSuccess, onError) {
    setTimeout(() => {
        if (user === 'ellie') {
            onSuccess ({name: 'ellie', role: 'admin'});
        } else {
            onError(new Error('no access'));
        }
    }, 1000);
}
}


const useStorge = new userStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,
    user => {
        userStorage.getRoles(
            user,
            useWithRole => {
                alert(
                    `hello ${useWithRole.name}, you have a ${useWithRole.role} role`
                    )
            },

    error => {
        console.log(error);
     }
    );
    },
    error => {
        console.log(error);
    }
);