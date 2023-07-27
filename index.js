const message = document.querySelector('#message');
const result = document.querySelector('.result');

message.addEventListener("keyup", e =>{
    if (e.keyCode === 13) {
        const input = message.value;
        const inputLetter = input.replace(/[^a-zA-Z]+/g, '').length;
        const inputWords = input.split(" ").length;
        const inputSentences = input.replace(/[?!]+\s/g, '. ').split(". ").length;
        result.innerHTML = `
            Count of Letters ${inputLetter}:
            Count of Words ${inputWords}:
            Count of Sentences ${inputSentences}:
        `;
    }
});

document.querySelector(".button").addEventListener("click", function () {
    const color = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector(".cube-child").style.backgroundColor = "#" + color;
});