$(".textarea").on("input", function () {
    $("#textareaCount").text(this.value.length);
});


const textarea = document.querySelector('.textarea')
const textareaCount = document.querySelector('.textarea-count')


const getNumberTextArea = function () {
    textareaCount.innerHTML = this.value.length
    console.log(textareaCount);
}


textarea.addEventListener('change', getNumberTextArea)
textarea.addEventListener('input', getNumberTextArea)



const trackListDesc = document.querySelectorAll('.tracklist-nest__item > .track-list__description')

for (let index = 1; index < trackListDesc.length; index++) {
    const element = trackListDesc[index];
    element.style.display = 'none'
}


