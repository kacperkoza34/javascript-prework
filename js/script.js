let computerMove = `nieznana liczba`;
let playerMove = `nieznana liczba`;

// computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}


// player player move
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
if(playerInput == 1){
  playerMove = 'kamień';
}
else if(playerInput == 2){
  playerMove = 'papier';
}
else if(playerInput == 3){
  playerMove = 'nożyce';
}



  // result
if(playerInput == 1 || playerInput ==2 || playerInput ==3 ){
  printMessage('Wybrałeś ' + playerMove + '! Przeciwnik wybrał ' + computerMove + '!');
  if (computerMove == playerMove){
    printMessage('Remis!');
  }
  else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrałeś!!!');
  }
  else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrałeś!!!');
  }
  else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrałeś!!!');
  }
  else {
    printMessage('Wygrałeś!!!');
  }
}
else{
  printMessage('Nieznany znak')
}
