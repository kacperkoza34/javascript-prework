let computerMove = `nieznana liczba`;
let playerMove = `nieznana liczba`;

// computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);
if(randomNumber == 1){
  computerMove = 'kamień';
}
if(randomNumber == 2){
  computerMove = 'papier';
}
if(randomNumber == 3){
  computerMove = 'nozyce';
}

// player player move
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
if(playerInput == 1){
  playerMove = 'kamień';
}
if(playerInput == 2){
  playerMove = 'papier';
}
if(playerInput == 3){
  playerMove = 'nozyce';
}
