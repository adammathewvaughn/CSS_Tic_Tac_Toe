let cells = document.querySelectorAll(".row > div");
let playerOne = "X"
let playerTwo = "O"
let turncount = 0;
let gameover = false;
let wincheck = true;

let possibleWins = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[0], cells[4], cells[8]],
  [cells[2], cells[4], cells[6]]
];


cells.forEach(function (cell) {
  cell.addEventListener("click", cellClicked);
  console.log("click");
});

function cellClicked(e) {
  if (gameover !== true) {
    let cell = e.target;

  if (cell.textContent !== "") return;
  if (turncount % 2 === 0) {
      e.target.textContent = playerOne
    } else {
      e.target.textContent = playerTwo;
    }
    if (turncount < 8) {
      turncount++
      console.log(turncount)
      checkForWinner()
    }
  }
}

function checkForWinner() {
  for (let i = 0; i < possibleWins.length; i++) {
    let combo = possibleWins[i];
    let p1combocounter = 0;
    let p2combocounter = 0;
    for (let j = 0; j < combo.length; j++) {
      if (cells[combo[j]].textContent === playerOne) {
        p1combocounter++;
      }
        if (cells[combo[j]].textContent === playerTwo) {
          p2combocounter++;
        }
      
      if (p1combocounter === 3) {
        alert("Player One Wins!")
      }
      if (p2combocounter === 3) {
        alert("Player Two Wins!")
      }

      if (p1combocounter !== 3) {
        if (p2combocounter !== 3) {
          if (turncount < 8) {
            alert("It's A Tie!")
          }
        }
      }
    }
  }
}
