// 바닐라 js를 쓸 때, 항상 이렇게 선언해주는 게 좋다! (ts는 ㄴㄴ)
// flexible == dangerous
// added ECMAscript 5 모던하게!
// 변수를 선언할 때나.... 등등 관련해서 나중에 문제가 발생할 수 있음
'use strict';

// 2. Variable, rw(read/write)
//  let : 변수 선언 시 사용 (ES6)
// mutable 타입이라 함 (all object type이 이에 속한다.)
// application 마다 저장할 수 있는 공간 존재... memory
// global 변수는 항상 메모리를 차지하고 있다... 적당히 쓰자!
let globalName = 'global name';

// block scope
{
let name = 'seung';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this! 값을 선언하기도 전에 쓸 수 있기 때문이다!)
// var hoisting (어디에서 선언했는지 상관없이 맨 위로 올라간다. 'use strict' 아래로..)

// 3. const (한번 할당하면 값 변경 불가. read만 가능)
// immutable 타입이라 함. (->primitive type이 이에 속한다)
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. variable types
// primitive type :값 자체가 메모리에 저장. number(알아서 메모리 지정), string, boolean, null, symbol
// object type : object를 가리키는 ref가 메모리에 저장된다
const count = 17;
const size = 17.6;
console.log(`value: ${count}, type: ${typeof count}` );
console.log(`value: ${size}, type: ${typeof size}` );

// number : infinity, -infinity, NaN
// DOM 요소를 js를 이용해서 position을 바꾸거나, 다양한 계산을 할 때,
// 정말 valid한 값인지 확인할 수 있다.
const infinity = 1 / 0;
const uninfinity = -1 / 0;
const nan = 'not a number' / 2;
console.log(infinity);
console.log(uninfinity);
console.log(nan);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

// template literals (string)
// brendan의 변수 값이 hi 옆에 붙여서 나온다.
const helloBob = `hi ${brendan}!`; 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : 위를 제외한 다른 value
const canRead = true;
console.log(`value: ${canRead}, type: ${typeof canRead}`);

// null (내가 명확하게 지정함)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
// undefined
let x;
let y = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

// symbol 
// 나중에 고유 식별자가 필요할 때, 우선순위를 주고 싶을 때
// string이 똑같아도 다른 심볼이다!
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
// .for를 이용해서 심볼을 똑같이 만들 수 있다.
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 == gsymbol2);
// 항상 .description을 이용해서 string으로 선언해야 print 가능하다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

// object, function
const seung = {name : 'seunghyeong', age : 20};
seung.age = 26;
console.log(seung);

// 5. Dynamic typing
// 빠르게 프로토타입을 할 때, 굉장히 효과적!
// 그러나 다수의 엔지니어들과 규모가 있는 프로젝트를 할 때, 문제발생할 수 있다.
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // error 발생!!
// -> 이런 다이나믹 성질 때문에 type으로 뒤통수를 맞아서... typescript가 나왔다!!