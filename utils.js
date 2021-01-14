export function didUserWin(userThrow, computerThrow) {
    // 0 = 'user lost', 1 = 'draw', 2 = 'user wins'
    let result;
    if (userThrow === 'rock'){
        if (computerThrow === 'rock'){
            result = 1;
        } else if (computerThrow === 'paper') {
            result = 0;
        } else {
            result = 2;
        }
    }
    if (userThrow === 'paper'){
        if (computerThrow === 'rock'){
            result = 2;
        } else if (computerThrow === 'paper') {
            result = 1;
        } else {
            result = 0;
        }
    }
    if (userThrow === 'scissors'){
        if (computerThrow === 'rock'){
            result = 0;
        } else if (computerThrow === 'paper') {
            result = 2;
        } else {
            result = 1;
        }
    }
    return result;
}