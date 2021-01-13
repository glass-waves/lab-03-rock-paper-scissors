// import functions and grab DOM elements
import { didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';
import { displayPhoto, displayWhoWins, resetImages } from './displayFunctions.js';


const winNumber = document.getElementById('win-number');
const lossNumber = document.getElementById('loss-number');
const drawNumber = document.getElementById('draw-number');
const throwButton = document.getElementById('throw-button');
const resetButton = document.getElementById('reset-button');

// initialize state
let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfDraws = 0;

// set event listeners to update state and DOM
throwButton.addEventListener('click', () => {
    //grab user choice and convert to string value
    const userChoice = document.querySelector('input[type="radio"]:checked');
    const userThrow = userChoice.value;
    //create a random number between 1 and 3 and store it in computerThrow
    const computerThrow = getRandomThrow();

    //display user image
    displayPhoto(userThrow, computerThrow);
    //tabulate the results    
    const result = didUserWin(userThrow, computerThrow);
    //display who wins
    displayWhoWins(result);
    //increment correct column
    if (result === 0) numberOfLosses++;
    if (result === 1) numberOfDraws++;
    if (result === 2) numberOfWins++;
    //update counts on screen
    update();
});

resetButton.addEventListener('click', () => {
    resetImages();
    numberOfWins = 0;
    numberOfLosses = 0;
    numberOfDraws = 0;
    update();
});

function update(){
    winNumber.textContent = numberOfWins;
    lossNumber.textContent = numberOfLosses;
    drawNumber.textContent = numberOfDraws;
}