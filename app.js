let playerOne = "X"
let playerTwo = "O"
let turncount = 0;
let cells = document.querySelectorAll(".row > div")
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
  if (turncount < 9) {
    if (turncount % 2 === 0) {
      e.target.textContent = playerOne
    } else {
      e.target.textContent = playerTwo;
    }
    if (cells.textContent !== "")
      turncount++
    console.log(turncount)
    checkForWinner()
  }
}
function checkForWinner() {
  for (let i = 0; i < possibleWins.length; i++) {
  let combo = possibleWins[i];
  let p1combocounter= 0;
  let p2combocounter= 0;
  for (let j = 0; j < combo.length; j++) {
    if (combo[j] === playerOne) {
      p1combocounter++;
    }
    if (combo[j] === playerTwo) {
      p2combocounter++;
    }
  if (cells[combo[j]].textContent == playerOne ) {
    alert("Player One Wins!")
  }
}
if( turncount >8 ){
  alert("It's A Tie!")
}
}
}
