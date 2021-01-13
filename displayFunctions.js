const computerImage = document.getElementById('computer-image');
const userImage = document.getElementById('user-image');
const whoWinsText = document.getElementById('who-wins'); 

export function displayPhoto(userThrow, computerThrow) {
    switch (userThrow) {
        case 'rock':
            userImage.src = 'assets/rock.png';
            break;
        case 'paper':
            userImage.src = 'assets/paper.png';
            break;
        case 'scissors':
            userImage.src = 'assets/scissors.png';
            break;
    }
    switch (computerThrow) {
        case 'rock':
            computerImage.src = 'assets/rock.png';
            break;
        case 'paper':
            computerImage.src = 'assets/paper.png';
            break;
        case 'scissors':
            computerImage.src = 'assets/scissors.png';
            break;
    }
}

export function displayWhoWins(result) {
    switch (result){
        case 0:
            whoWinsText.textContent = 'Computer Wins, Human intellect inferior!';
            break;
        case 1:
            whoWinsText.textContent = "It's a draw! Dare to try again human?";
            break;
        case 2:
            whoWinsText.textContent = 'Human wins! How is this possible? Try again and prove your skills.';
            break;            
    } 
}
