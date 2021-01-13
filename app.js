// import functions and grab DOM elements
import { didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';

const winNumber = document.getElementById('win-number');
const lossNumber = document.getElementById('loss-number');
const drawNumber = document.getElementById('draw-number');
const computerImage = document.getElementById('computer-image');
const userImage = document.getElementById('user-image');
const throwButton = document.getElementById('throw-button');
const resetButton = document.getElementById('reset-button');

// initialize state
let numberOfWins = 0;
let numberOfLosses = 0;


// set event listeners to update state and DOM