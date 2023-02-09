'use strict'

let country = document.querySelector('#country')
let city = document.querySelector('#city')
const result = document.querySelector('.result')

const cityArr =
{
    Россия: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    Украина: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    Беларусь: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    Япония: ['Токио', 'Киото', 'Осака', 'Иокогама']
}


console.log(Object.keys(cityArr))

let countries = Object.keys(cityArr)

for (let index = 0; index < countries.length; index++) {
    country.add(new Option(countries[index]))
}



const showCity = function () {
    city.style.display = 'inline-block'
}

country.addEventListener('change', () => {
    console.log(country.value)
    let cities = cityArr[country.value]
    console.log(cities);
    city.length = 0;

    for (let index = 0; index < cities.length; index++) {
        city.add(new Option(cities[index]))
    }

    showCity()

})


city.addEventListener('change', function () {
    console.log(this.value)
    result.innerHTML = country.value + ' ' + this.value
})