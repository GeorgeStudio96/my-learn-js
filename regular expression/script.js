// const text = document.getElementById('text')


// // text.textContent = text.textContent.replace(/Lorem/gi, 'Лорем')
// text.innerHTML = text.innerHTML.replace(/<span>[\w\s]+<\/span>/gi, (str, $1) => {
//     return `<strong>${str}</strong>`
// })



// const width = window.innerWidth
// console.log(width);

// window.addEventListener("resize", function () {
//     if (width > 600) {
//         console.log('Ширина экрана ', window.innerWidth);
//     }
// });



const inputText = document.getElementById('text')
const inputNumber = document.getElementById('number')
const form = document.getElementById('form')


// input.addEventListener('input', (e) => {
//     e.target.value = e.target.value.replace(/\d+/, '')
// })


// number.addEventListener('input', (e) => {
//     e.target.value = e.target.value.replace(/\D+/, '')
// })


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isError = false;

    if (!/[^а-яА-Я]/g.test(inputText.value) && inputText.value !== '') {
        alert('в инпуте только кириллица')
    } else {
        isError = true
    }

    if (!/[^\d]/g.test(inputNumber.value) && inputNumber.value !== '') {
        alert('в инпуте только числа')
    } else {
        isError = true
    }

    if (!isError) {
        alert('данные отправлены')
    }

})