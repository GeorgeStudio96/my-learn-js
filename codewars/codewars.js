'use strict'

const reduceArray = () => {
    const arr = ['hello', 'world', 'this', 'is', 'great']
    const newArr = arr.reduce((accum, current) => {
        return accum += ' ' + current
    })
    console.log(newArr);
}

reduceArray()



function greet(name) {
    return console.log(`Hello, ${name} how are you doing today?`);
}

greet('George')