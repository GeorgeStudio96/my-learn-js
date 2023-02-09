'use strict'
/*
getResult(10, 20)

// function Declaration
function getResult(arg1, arg2) {
    console.log(arg1 * arg2, ' Declaration Func')
}


// TODO Вывод: функция декларейшн может быть вызвана, ДО ее объявления и результат будет верный


// function Expression
const getResult2 = function (arg1, arg2) {
    return console.log(arg1 * arg2, ' Expression Func')
}
getResult2(10, 20)

// TODO Вывод: функция експрешион может быть вызвана, только ПОСЛЕ ее создания иначе ошибка



// Arrow function 
const getResult3 = (arg1, arg2) => console.log(arg1 * arg2, ' Arrow Func')
getResult3(10, 20)

// TODO Вывод: функция експрешион может быть вызвана, только ПОСЛЕ ее создания иначе ошибка

// Call Stack 

function foo1() {
    console.log(10 + 10);
    foo2()
}
function foo2() {
    foo3()
}
function foo3() {
    console.log('this is foo3')

}
foo3()

*/

// это область видимости переменных + переменная this
// this - это ссылка на объект, который вызывает код в данный момент

/*
const obj = {
    name: 'geo',
    age: 26
}

function f1() {
    console.log(this.name)
}

f1.call(obj)
f1.apply(obj)
f1.bind(obj)

*/

// ООП

/*
const Person = function (name) {
    this.name = name
}

Person.prototype.sayHello = function () {
    console.log('Hello, my name is', this.name);
}


const person1 = new Person('Vlad')
const person2 = new Person('Vlad-2')
const person3 = new Person('Vlad-3')

console.log(person1.sayHello());
console.log(person2.sayHello());
console.log(person3.sayHello());

console.log(person1 instanceof Person);
console.log(person2 instanceof Person);
console.log(person3 instanceof Person);


*/

/*
class Rectangle {
    // свойства
    width;
    height;
    name;

    constructor(w, h, text) {
        this.width = w
        this.height = h
        this.name = text
    }

    // методы
    calc() {
        return this.width * this.height
    }
}


// создаем разные ОБЪЕКТЫ на основе параметров из общего прототипа(КЛАССА) — Rectangle
const rect = new Rectangle(10, 20)
const rect2 = new Rectangle(50, 3)
const rect3 = new Rectangle(11, 120)

rect.text = 'Квадрт 1'
rect2.text = 'Квадрт 2'
rect3.text = 'Квадрт 3'




// Отобразим РЕЗУЛЬТАТ вычислений

console.log(rect.calc(), rect.text)
console.log(rect2.calc(), rect2.text)
console.log(rect3.calc(), rect3.text)


*/


const user = {
    name: 'geo',
    age: 26,
    city: 'Moscow'
}

console.log(user);


class User {

    constructor(params) {
        this.name = params.name
        this.age = params.age
        this.city = params.city
    }

    voice() {
        console.log('I am Developer');
    }
}

const createNewUser = new User({
    name: 'Geo',
    age: 26,
    city: 'Moscow'
})
createNewUser.voice()
console.log(createNewUser);


class Person extends User { }

const createNewPerson = new Person({
    name: 'Geo2',
    age: 27,
    city: 'Moscow-city'
})




