'use strict';

const textElement = document.getElementById('text');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const fontChanger = document.getElementById('fontChanger');

let fontSize = 16;

const fonts = [
    "Arial", "Verdana", "Times New Roman", "Courier New", "Georgia", "Palatino",
    "Garamond", "Bookman", "Comic Sans MS", "Trebuchet MS", "Arial Black", "Impact",
    "Lucida Sans Unicode", "Tahoma", "Century Gothic", "Lucida Console", "Copperplate",
    "Brush Script MT", "Montserrat", "Roboto", "Lato", "Oswald", "Raleway"
];

fonts.forEach(font => {
    const option = document.createElement('option');
    console.log(option);
    option.value = font;
    option.textContent = font;
    fontChanger.appendChild(option);
});

increaseButton.addEventListener('click', function () {
    fontSize += 2;
    textElement.style.fontSize = fontSize + 'px';
});

decreaseButton.addEventListener('click', function () {
    fontSize -= 2;
    textElement.style.fontSize = fontSize + 'px';
});

fontChanger.addEventListener('change', function () {
    const selectedFont = fontChanger.value;
    textElement.style.fontFamily = selectedFont;
});
