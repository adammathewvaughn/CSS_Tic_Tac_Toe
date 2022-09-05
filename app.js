let cells = document.querySelectorAll(".row > div");
let currentplayer = "X"
let turncount = 0;
let gameover = false;


let possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function switchPlayer() {
  if (currentplayer === "X") {
    currentplayer = "O";
  } else {
    currentplayer = "X";
  };
}

function tieGame() {
  alert("It's A Tie!")
  restartGame();
}

cells.forEach(function (cell) {
  cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {
  turncount++
  e.target.textContent = currentplayer
  checkForWinner()
  console.log(turncount)
  switchPlayer()
  if (turncount === 9 && gameover === false) {
    tieGame();
  }
  
}

function checkForWinner() {
  for (let i = 0; i < possibleWins.length; i++) {
    let combo = possibleWins[i];
    let combocounter = 0;

    for (let j = 0; j < combo.length; j++) {
      if (cells[combo[j]].textContent === currentplayer) {
        combocounter++;
      }

      if (combocounter === 3) {
        gameover = true
        alert(`${currentplayer} Wins!`)

        restartGame();
      }


    }
  }
}



function restartGame() {
  window.location.reload();
}
