'use strict'



// class User {
//     hello() {
//         console.log(`Привет, я: метод родителя`);
//     }
// }

// class Person extends User {
//     hello() {
//         console.log(super.hello());
//         console.log(`Привет, я: наследуемый метод`)
//     }
// }

// const person1 = new Person('')
// person1.hello()


/*
class User {
    constructor(name) {
        this.name = name
    }
    sayHello() {
        console.log(this.name + ' Hello')
    }
}




const user1 = new User('Alex')
console.log(user1.name);

class Person extends User {
    constructor(name, email, phone) {
        super(name)
        this.name = name;
        this.email = email;
        this.phone = phone
    }
}

const person1 = new Person('Geo', 'ge@gmail.com', '8928287382')
console.log(person1.sayHello())




class First {
    constructor(name) {
        this.name = name
    }
    sayHello() {
        return console.log(`Привет, я метод ${this.name}`)
    }
}

const first1 = new First('родителя')
console.log(first1.sayHello())

class Second extends First {
}

const second1 = new Second('наследуемый')

console.log(second1.sayHello());



class Animal {
    constructor(name) {
        this.name = name // имя животного 

    }
    run(speed) {
        this.speed = speed
        console.log(`${this.name} бежит со скоростью ${this.speed}`);

    }
}

const newAnimal = new Animal('Животное', 3)
console.log(newAnimal.run(1));


class Rabbit extends Animal {
}

const newRabbit = new Rabbit('Кроллик')
console.log(newRabbit.run(5));


*/





class Animal {
    constructor(name) {
        this.name = name
    }
    walk() {
        console.log('привет, я ' + this.name);
    }
}

class Rabbit extends Animal {
    walk() {
        super.walk()
        console.log('и я прыгаю');
    }
}


const newRabbit = new Rabbit('Заяц')
newRabbit.walk()

