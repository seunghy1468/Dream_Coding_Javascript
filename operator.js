'use strict';
// 1. String contenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);     // add
console.log(1 - 1);     // substact
console.log(1 / 1);     // divide
console.log(1 * 1);     // multiply
console.log(5 % 2);     // remainder
console.log(2 ** 3);    // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
// counter = counter - 1;
// preDencrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let q = 3;
let p = 6;
q += p;     // q = q + p;
q -= p;     // q = q - p;
q *= p;     
q /= p;

// // 5. Comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);   // greater than or equal

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), 처음으로 true가 나오면 거기서 멈춘다. (뒤에 있는 놈들이 상관없음)
// 따라서 expression (func 등)은 가장 마지막에 넣어야 효율적!
console.log(`or: ${value1 || value2 || check()}`);

// && (and), 처음에 false가 나오면 멈춘다.
// and는 간편하게 null check에 사용가능하다. 
console.log(`and: ${value1 && value2 && check()}`);
// if (nullableObject != null){
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++){
        // wasting time
        console.log('omg!');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (type을 변경해서 같은지 확인한다.)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion (type이 다르면 다르다!)
// 검사할때, strict equality를 이용하는 게 좋다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};     // ref1 이라 하자
const ellie2 = {name: 'ellie'};     // ref2 라 하자
const ellie3 = ellie1;              // ref1
console.log(ellie1 == ellie2);      // ref가 다르므로 false
console.log(ellie1 === ellie2);     // 안에 내용물이 같아도 ref가 다르므로 false
console.log(ellie1 === ellie3);     // true

// equality - puzzler
console.log(0 == false);            // true
console.log(0 === false);           // 0은 boolean이 아니기 때문에 false
console.log('' == false);           // true
console.log('' === false);          // empty 문자열은 boolean 타입이 아니라서 false
console.log(null == undefined);     // 같은거로 간주 되어서 true
console.log(null === undefined);    // 다른 타입이라 false

// 8. Conditional operators : if
const name = 'coder';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('you are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator : ? (간단할 때만 사용한다.)
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// if else 를 반복하며 써야할 때, switch 문도 고려해보자!
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('Go away!');
        break;
    case 'Opera':
    case 'Firefox':
        console.log('love you!');
        break;
    case 'Chrome':
        console.log('omg!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop : statement가 false가 나오기 전까지 무한대로 반복
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop
// do 안의 block을 먼저 실행하고 그다음 i가 0보다 큰지 아닌지 검사한다.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop
// for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

// 지역변수를 선언해서 작성하는 것도 좋다
for (let i = 3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loop
// i가 0일 때, j를 0부터 9까지 돌리고 그다음 i가 1일 때.... 
for (let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// 01. from 0 to 10 print only even numbers (use continue)
for (let i = 0; i <=10; i++){
    if (i % 2 == 0){
        console.log(`even number: ${i}`);
    }
    continue;
}
// 02. from 0 to 10 print numbers until reaching 8 (use break) 
for (let j = 0; j <= 10; j++){
    if (j >= 9){
        break;
    }
    console.log(`until reaching 8: ${j}`);
}