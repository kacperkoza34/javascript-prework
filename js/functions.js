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
	printResult(computerMove, playerMove);
}

function printResult(computerIcon, playerIcon){    // <---- tutaj były dwie funcje, miała być jedna według DRY
																									//        ale chciałem zachowac dwa rózne id elementów, to było kluczowe
																									//        inne rozwiązenie niż z tą pętlą nie przyszło mi do głowy
	let resultComputer = document.createElement('div');
	resultComputer.className = "btn btn-secondary mx-1";
	resultComputer.id = 'computerResult';

	let resultPlayer = document.createElement('div');
	resultPlayer.className = "btn btn-secondary mx-1";
	resultPlayer.id = 'playerResult';

for (let i = 0; i<2; i++){
		if(computerIcon == 'kamień' || playerIcon == 'kamień') resultComputer.innerHTML = '<span class="fas fa-hand-rock p-2"></span>';
		else if(computerIcon == 'papier' || playerIcon == 'papier') resultComputer.innerHTML = '<span class="fas fa-hand-paper p-2"></span>';
		else if(computerIcon == 'nożyce' || playerIcon == 'nożyce') resultComputer.innerHTML = '<span class="fas fa-hand-scissors p-2"></span>';
		document.getElementById('parent').appendChild(resultComputer);
		resultComputer = resultPlayer;
	}
}

function getMoveName(argMoveId){
  if(argMoveId == 1) return 'kamień';
	else if(argMoveId == 2)	return 'papier';
	else if(argMoveId == 3) return 'nożyce';
  //printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  //return 'nieznany ruch';
	}

function displayResult(argComputerMove, argPlayerMove){
	printMessage(' Wynik:');
	printIcon(argComputerMove, argPlayerMove);
	if ( argComputerMove != argPlayerMove ) printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.  ');
	if (argComputerMove == argPlayerMove) {
		 changeColor(3);
		 printMessage(' Remis!');
	 }
  else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'papier'  || argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		 computerPoints++;
		 changeColor(0);
		 printMessage(' Przegrałeś!');
		}
//  else if (argPlayerMove == 'nieznany ruch') printMessage(' Wybierz F5 i podaj poprawną wartość');
	else {
		playerPoints++;
		changeColor(1);
		printMessage(' Wygrałeś!');
	}
}

function changeColor(gameStatus){
	let player = document.getElementById("playerResult");
	let computer = document.getElementById("computerResult");
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
//	for( let i = 0; i < 100; i++ ){
	clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);
  displayResult(computerMove, playerMove);
	displayPoints();
	//}
}

function displayPoints(){
	document.getElementById('player-points').innerHTML = playerPoints;
	document.getElementById('computer-points').innerHTML = computerPoints;
	displayPercent(computerPoints, playerPoints);
}

function restartPoints(){
	playerPoints = 0;
	computerPoints = 0;
	displayPoints();
}

function displayPercent(computerPoints, playerPoints){
	let playerPercent = 0;
	let computerPercent = 0;
	if ( playerPoints != 0 ) playerPercent = Math.floor(playerPoints / (computerPoints + playerPoints)*100);
	if ( computerPoints != 0) computerPercent = Math.floor(computerPoints / (computerPoints + playerPoints)*100);
	document.getElementById('player-percent').innerHTML = playerPercent + "%";
	document.getElementById('computer-percent').innerHTML = computerPercent + "%";
}
