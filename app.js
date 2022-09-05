let cells = document.querySelectorAll(".row > div");
let currentplayer = "X"
let turncount = 0;
let gameover = false;
let wincheck = true;

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

cells.forEach(function (cell) {
  cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {
  if (gameover !== true) {
    let cell = e.target;
    console.log("clicked")
    if (cell.textContent !== "") return;
    cell.textContent = currentplayer
  
    turncount++
    console.log(turncount)
    checkForWinner()
    switchPlayer()
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
        alert(`${currentplayer} Wins!`)
        gameover = true
        wincheck = false
        restartGame();
      }

      if (combocounter !== 3) {
        if (wincheck !== false) {
          if (turncount === 9 && gameover === false) {
            alert("It's A Tie!")
            gameover = true
            restartGame();
          }
          }
        }
      }
    }
  }


function restartGame() {
  window.location.reload();
}
