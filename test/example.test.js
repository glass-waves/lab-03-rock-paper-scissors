// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';
import { resultAsAString } from '../get-random-throw.js';
const test = QUnit.test;


//tests for didUserWin function
test('when user and computer arguments are rock and scissors respectively, function should return 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when user and computer arguments are scissors and scissors respectively, function should return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('scissors', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when user and computer arguments are paper and scissors respectively, function should return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('paper', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
///////////////////////////////////////////////////////////////////////////


//tests for resultAsString function
test('when given a 0, function should output rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = resultAsAString(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('when given a 1, function should output scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = resultAsAString(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('when given a 0, function should output paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = resultAsAString(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});