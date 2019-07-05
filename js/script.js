let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(playerInput);

displayResult(computerMove, playerMove);
