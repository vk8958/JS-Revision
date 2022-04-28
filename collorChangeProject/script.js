const btn = document.getElementById('btn');
const color = ["green", "red", "grey", "pink"]
btn.addEventListener('click', function () {

    const randomNumber = getRandomNumber();
    const span = document.getElementById('colorName');
    span.style.color = color[randomNumber];
    span.textContent = color[randomNumber]
    // const container =document.querySelector('.main-container');
    // console.log(container)
    document.body.style.backgroundColor = color[randomNumber];

})

function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
}