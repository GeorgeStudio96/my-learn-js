'use strict'


function getResult(x, y) {
    let result;

    result = Math.pow(x, y)
    let array = ("" + result).split("").map(Number)
    console.log(array);

    let sumArr = array.reduce((currentItem, accumulator) => {
        return currentItem + accumulator
    }, 0)

    console.log(sumArr);

    return result
}

console.log(getResult(4, 8))