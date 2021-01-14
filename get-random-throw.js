export function getRandomThrow(){
    const result = Math.floor(Math.random() * 3);
    return resultAsAString(result);

}

export function resultAsAString(numberInput) {
    let result;
    switch (numberInput) {
        case 0:
            result = 'rock';
            break;
        case 1:
            result = 'paper';
            break;
        case 2: 
            result = 'scissors';
            break;
    }
    return result;
}