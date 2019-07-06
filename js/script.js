function playGame(playerInput){
	clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);
  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', playGame);
