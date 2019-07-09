function printMessage(msg){
	var div = document.createElement('div');
	div.class="result"
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printIcon(computerMove, playerMove){
	var div = document.createElement('div');
	div.className = "d-flex justify-content-center py-1";
	div.id = 'parent';
	div.innerHTML='';
	document.getElementById('messages').appendChild(div);
	printComputer(computerMove);
	printPlayer(playerMove);
}

function printComputer(computerIcon){
	var resultIcon = document.createElement('div');
	resultIcon.className = "btn btn-secondary mx-1";
	resultIcon.id = 'computerResult';
	if(computerIcon == 'kamień') resultIcon.innerHTML = '<span class="fas fa-hand-rock p-2"></span>';
	else if(computerIcon == 'papier') resultIcon.innerHTML = '<span class="fas fa-hand-paper p-2"></span>';
	else if(computerIcon == 'nożyce') resultIcon.innerHTML = '<span class="fas fa-hand-scissors p-2"></span>';
	document.getElementById('parent').appendChild(resultIcon);
}

function printPlayer(playerIcon){
	var resultIcon = document.createElement('div');
	resultIcon.className = "btn btn-secondary mx-1";
	resultIcon.id = 'playerResult';
	if(playerIcon == 'kamień') resultIcon.innerHTML = '<span class="fas fa-hand-rock p-2"></span>';
	else if(playerIcon == 'papier') resultIcon.innerHTML = '<span class="fas fa-hand-paper p-2"></span>';
	else if(playerIcon == 'nożyce') resultIcon.innerHTML = '<span class="fas fa-hand-scissors p-2"></span>';
	document.getElementById('parent').appendChild(resultIcon);
}

function getMoveName(argMoveId){
  if(argMoveId == 1) return 'kamień';
	else if(argMoveId == 2)	return 'papier';
	else if(argMoveId == 3) return 'nożyce';
  //printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  //return 'nieznany ruch';
	}

function displayResult(argComputerMove, argPlayerMove){
	var gameStatus; // 1 = win, 0 = defeat, 3 = draw
	printMessage(' Wynik:');
	printIcon(argComputerMove, argPlayerMove);
	if ( argComputerMove != argPlayerMove ) printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.  ');
	else {};
	if (argComputerMove == argPlayerMove) {
		 gameStatus = 3;
		 printMessage(' Remis!');
	 }
  else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		 computerPoints++;
		 gameStatus = 0;
		 printMessage(' Przegrałeś!');
		}
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		computerPoints++;
		gameStatus = 0;
		printMessage(' Przegrałeś!');
	}
  else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		computerPoints++;
		gameStatus = 0;
		printMessage(' Przegrałeś!');
	}
//  else if (argPlayerMove == 'nieznany ruch') printMessage(' Wybierz F5 i podaj poprawną wartość');
	else {
		playerPoints++;
		gameStatus = 1;
		printMessage(' Wygrałeś!');
	}
	changeColor(gameStatus);

}

function changeColor(gameStatus){
	var player = document.getElementById("playerResult");
	var computer = document.getElementById("computerResult");
	if(gameStatus == 1){
 		player.style.background = 'green' ;
 		computer.style.background = 'red' ;
	}
	else if(gameStatus == 0){
 		player.style.background = 'red' ;
 		computer.style.background = 'green' ;
	}
	else if(gameStatus == 3){
 		player.style.background = 'grey' ;
 		computer.style.background = 'grey' ;
	}
}

function playGame(playerInput){
	clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);
  displayResult(computerMove, playerMove);
	displayPoints();
}

function displayPoints(){
	document.getElementById('player-points').innerHTML = playerPoints;
	document.getElementById('computer-points').innerHTML = computerPoints;
}

function restartPoints(){
	playerPoints = 0;
	computerPoints = 0;
	displayPoints();
}
