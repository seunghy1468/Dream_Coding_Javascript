'use strict';
// 1. function
// fundamental building block in the program
// function name(param1, param2) {body ... return; }
// 하나의 함수 === 하나의 일!
// 함수의 이름 : doSomething, command, verb 형태
// e.g. createCardandPoint -> createCard, createPoint
// function은 object의 일종이다! => 함수명.속성 : 속성을 선택할 수 있기 때문이다. 

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');

// 2. Parameters
// premitive parameter : 값(value)이 전달
// object parameter : reference가 전달
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};  // ref형태로 메모리에 저장
changeName(ellie);              // ellie.name 의 값을 coder로 변경
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    // if(from === undefined){
    //     from = 'unknown';
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');             // unknown이 없을 경우) message만 전달됨. from은 undefined

// 4. Rest parameters (added in ES6)
function printAll(...args) {    // ... : 배열 형태로 전달한다.
    for (let i = 0; i < args.length; i++){  // arg 개수만큼 돌린다
        console.log(args[i]);
    }

    // 방법 2
    // arg들(args)을 하나씩 arg로 할당한다.
    // for (const arg of args){
    //     console.log(arg);
    // }

    // 방법 3
    // forEach라는 함수를 쓴다
    // args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie');         // 인자를 3개 전달

// 5. Local scope
// 밖에선 안을 볼 수 없고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';   // global variable
function printMessage() {
    let message = 'hello';      // 지역변수
    console.log(message);
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);   // error 발생!
}
printMessage();
// console.log(message);   // error 발생!

// 6. Return a value
function sum(a, b) {
    return a+b;
}
const result = sum(1, 2);   // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return , early exit (현업 팁(early 어쩌구 하라 지적질 받을 때...))
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
        // block 안에서 작성하면 가독성 떨어짐
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
        // 조건이 맞지 않을 때, return을 해서 빨리 함수를 종료하고
    }
    // 조건이 맞을 때, logic을 돌린다...
    // long upgrade logc...
}

//---------------------------------------------------------------------------
// Function expression
// function을 선언함과 동시에 변수에 할당한다. 
const print = function() {  // anonymous function
    console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// callback function using function expression
// 함수를 전달해서 조건에 맞을 때, 조건에 맞는 함수를 호출한다.
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {           // anonymous function
    console.log('yes!');
};
const printNo = function print() {      // named function
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// 함수를 간결하게 만들어준다!
// const simplePrint = function() {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

// IIFE : Immediately Invoked Function Expression
// 선언함과 동시에 함수를 호출! -> 잘 쓰이진 않음
(function hello() {
    console.log('IIFE');
})();

// Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
    if (command === 'add') {
        console.log(`add: ${a + b}`);
    } else if (command === 'substract') {
        console.log(`substract: ${a - b}`);
    } else if (command === 'divide') {
        console.log(`divide: ${a / b}`);
    } else if (command === 'multiply') {
        console.log(`multiply: ${a * b}`);
    } else if (command === 'remainder') {
        console.log(`remainder: ${a % b}`);
    } else {console.log('unknown')};
}
calculate('add', 1, 2);
calculate('substract', 2, 4);
calculate('divide', 6, 3);
calculate('multiply', 5, 7);
calculate('remainder', 9, 2);