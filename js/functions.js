function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
	else if(argMoveId == 2){
		return 'papier';
	}
	else if(argMoveId == 3){
		return 'nożyce';
	}

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

	if (argComputerMove == argPlayerMove){
    printMessage('Remis!');
  }
  else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrałeś!!!');
  }
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrałeś!!!');
  }
  else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrałeś!!!');
  }
  else if (argPlayerMove == 'nieznany ruch') {
    printMessage('Wybierz F5 i podaj poprawną wartość');
  }
	else {
		printMessage('Wygrałeś!!!');
	}
}

function playGame(playerInput){
	clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);
  displayResult(computerMove, playerMove);
}
