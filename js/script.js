let intervalID;
const button = document.getElementById('loadPhrase');
let randomUsed = [];

/***
Creates a random RGB number string by generating 3 random numbers.
Applies that random RGB color string to the background color and button color.
Colors are limited to darker colors to prevent blending with the white font.
***/

const randomRGB = () => Math.floor(Math.random() * 180);

const randomColor = () => {
    let color = `rgb(`;
    color += `${randomRGB()},`;
    color += `${randomRGB()},`;
    color += `${randomRGB()})`;
    document.body.style.backgroundColor = color;
    button.style.backgroundColor = color;
};

/***
Calls the random number generator and returns the phrase object with that index number 
from the array. Prevents repeating phrases by storing used phrases indexes in an array
***/
const getRandomNumber = array => {
    return Math.floor(Math.random() * array.length);
};

const getRandomPhrase = array => {
    let randomNumber = getRandomNumber(array);
    return array[randomNumber];
};

/***
Calls the getRandomPhrase function to get a random phrase object from the phrases array.
Builds an HTML string using the properties of the phrase object, only if they exist.
Replaces the contents of the 'phrase-box' div element with the new HTML string.
Calls the randomColor function to randomly change the background color.
Clears and restarts the interval timer.
***/

const printPhrase = () => {
    let randomPhrase = getRandomPhrase(phrases);
    let phraseString = `<h2>${randomPhrase}</h2>`;
    document.querySelector('.phrase-container').innerHTML = phraseString;
    randomColor();
    clearInterval(intervalID);
};

//Calls the printPhrase function each time the 'Show Another phrase' button is clicked.

document
    .getElementById('loadPhrase')
    .addEventListener('click', printPhrase, false);

//Calls the printPhrase function on first page load

printPhrase();
