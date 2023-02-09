const a = document.getElementById('a')
const b = document.getElementById('b')
const res = document.getElementById('res')

const buttonSum = document.getElementById('sum')
const buttonMult = document.getElementById('mult')


const calculator = {

    sum: function () {
        let sum = +a.value + +b.value
        console.log(sum);
        res.value = sum
    },
    mult: function () {
        let mult = +a.value * +b.value
        console.log(mult);
        res.value = mult
    },
    show: function () {
        buttonSum.addEventListener('click', this.sum)
        buttonMult.addEventListener('click', this.mult)
    }
}

calculator.show()