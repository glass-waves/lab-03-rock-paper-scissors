// import functions and grab DOM elements
import { didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';
import { displayPhoto, displayWhoWins } from './displayFunctions.js';


const winNumber = document.getElementById('win-number');
const lossNumber = document.getElementById('loss-number');
const drawNumber = document.getElementById('draw-number');
const throwButton = document.getElementById('throw-button');
const resetButton = document.getElementById('reset-button');

// initialize state
let numberOfWins = 0;
let numberOfLosses = 0;


// set event listeners to update state and DOM
throwButton.addEventListener('click', () => {

    const userChoice = document.querySelector('input[type="radio"]:checked');
    const userThrow = userChoice.value;
    const computerThrow = getRandomThrow();

    //display user image
    displayPhoto(userThrow, computerThrow);
    //tabulate the results    
    const result = didUserWin(userThrow, computerThrow);
    //display who wins
    displayWhoWins(result);

});