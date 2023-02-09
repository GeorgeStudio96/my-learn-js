/*
let user = {
    name: 'George',
    age: 26,
    isAuth: false
}



const { name: nameUser, age, isAuth } = user

console.log(nameUser);
console.log(age);
console.log(isAuth);

console.log(user.name);
console.log(user.age);
console.log(user.isAuth);

*/



// const logger = ({ age, name }) => {
//     console.log(name, age);
// }



// logger({ age: 26, name: 'George' }) 


// const sum = (...params) => {
//     return params.reduce((prev, item) => prev + item)
// }


// console.log(sum(1, 2, 3, -6, 8));


let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [7, 8, 12, 54, 12, 5]

console.log([...arr1, ...arr2]);
