const person = {
    name: 'George',
    age: 26,
    clgFunc: function (job, location) {
        console.log(`Hello, my name is ${this.name}`);
        console.log(`Hello, my age is ${this.age}`);
        console.log(`Hello, my job is ${job}`);
        console.log(`Hello, my location is ${location}`);
    },
    init: function () {
        this.clgFunc()
    }
}


let unit = {
    age: 28,
    name: 'Unit 1'
}

const newUnit = person.clgFunc.bind(unit)
newUnit('FrontEnd', 'Moscow')

const newUnit2 = person.clgFunc.call(unit, 'BackDev', 'New York')
const newUnit3 = person.clgFunc.apply(unit, ['ХуйДев', 'Мухосранск'])





console.log('----------');



const array = [1, 2, 3, 4, 5, 66, 737, 1227]




const mult = function (arr, n) {
    return arr.map(item => {
        return item * n
    })
}



console.log(mult(array, 10));





const array2 = [1, 2, 3, 4, 5, 66, 737, 1212327]
const arr3 = [5, 6, 7, 8, 9, 0]

Array.prototype.mult2 = function (n) {
    console.log('Отображаем массив через this ', this);
    return this.map(item => item * n)
}

console.log(arr3.mult2(2));
