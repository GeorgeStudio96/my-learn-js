const textBlock = document.querySelector('.text-block')
const addBtn = document.getElementById('add-btn')
const buttonsBLock = document.querySelector('.buttons-block')
const main = document.querySelector('main')


let btns = document.querySelectorAll('.btn')

const changeText = (text) => {
    textBlock.textContent = text
}

const getNewButton = () => {
    const newBtn = btns[0].cloneNode()

    newBtn.textContent = btns.length + 1 >= 10 ?
        btns.length + 1 : `0${btns.length + 1}`
    buttonsBLock.append(newBtn)
    btns = document.querySelectorAll('.btn')

}

main.addEventListener('click', (e) => {
    if (e.target.matches('button') && e.target.closest('buttons-block')) {
        changeText(e.target.textContent)
    } else if (e.target.id === 'add-btn')
        getNewButton()
})

