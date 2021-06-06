'use strict';
// class : template (in ES6)
// object : instance of a class
// syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor : object에 필요한 데이터 전달
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
    console.log(`${this.name}: hello!`);
    }
}

// object 생성 (new)
const john = new Person('john', 20);
console.log(john.name);
console.log(john.age);
john.speak();

// 2. Getter and setters
// 현실적으로 잘못된 입력을 바로 잡기 위해 
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        // getter와 setter를 정의하면, 메모리에서 호출하는 것이 아니라
        // 바로 get age (this.age)와 set age (age)의 값을 호출한다.
        this.age = age;
    }
    // getter와 setter안의 변수를 다르게 지정한다.
    // 그렇지 않으면 setter에서 무한정 불러오기 때문에... error 발생!
    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0){
        //     throw Error('age can not be negative');
        // }
        // this._age = value;

        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// Fields (public, private)
// 최근에 추가 됨. 그냥 추가되었다~ 정도로 알고있자
// constructor 없이 field 정의 가능
class Experiment {
    publicField = 2;    // 그냥 정의하면 외부에서 접근 가능
    #privateField = 0;  // class 내부에서만 접근 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); 

// 4. Static properties and methods
// Too soon!
// object에 상관없이 class 자체에 연결되어있다.
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
console.log(article1.publisher);    // undefined (article1이란 object안의 publisher는 값이 지정되지 않았다.)
console.log(Article.publisher);     
Article.printPublisher();

// 5. Inheritance
// 상속 및 다양성 (객체지향의 하이라이트)
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        // 총 3가지 fields
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }
    getArea() {
        return this.width * this.height;
    }
    // methods 2개
}

// rectangle 이란 class를 만들 때, extends를 이용해서 shape을 연장한다.
// 자동으로 rectangle에 shape의 모든 것들이 포함되어있다.
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();               // 부모의 draw method 호출!
        console.log('Triangle');    // 재정의한 draw method 호출
    }

    getArea() {
        return (this.width * this.height) / 2;
        // 이런식으로 overiding이 가능하다!
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf operator
// 왼쪽에 있는 object가 오른쪽에 있는 class의 instance 인지 아닌지 체크한다.(true/false)
console.log(rectangle instanceof Rectangle);    // true
console.log(triangle instanceof Rectangle);     // false
console.log(triangle instanceof Triangle);      // true
console.log(triangle instanceof Shape);         // true
console.log(triangle instanceof Object);        // true (js의 모든 object는 Object를 상속한다.)
