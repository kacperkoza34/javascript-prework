var playerPoints = 0;
var computerPoints = 0;
document.getElementById('play-rock').addEventListener('click', function (){ playGame(1) });
document.getElementById('play-paper').addEventListener('click', function (){ playGame(2) });
document.getElementById('play-scissors').addEventListener('click', function (){ playGame(3) });
document.getElementById('restart').addEventListener('click', function (){ restartPoints() });
window.onload = displayPoints();
window.onload = displayPercent();
