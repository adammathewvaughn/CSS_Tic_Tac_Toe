let players = [
  {
    name: "playerOne",
    marker: "X"
  },
  {
    name: "playerTwo",
    marker: "O"
  },
]
let marker= target.querySelector("textContent").value
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
]

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellsClicked(players, marker))
  if (turncount % 2 === 0) {
    cellsClicked(playerOne)
    else if (turncount % 2 !=== 0) {
      cellsClicked(playerTwo)
  }
}

}
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellsClicked)
  
  for (let i = 0; i < cells.length; i++) {
}
function cellsClicked(e) {
  e.target.textContent = ("X")
  checkForWinner
  if (turncount < 10) {
    document.querySelector(cellsClicked(playerOne))
  } else if {
    document.querySelector(cellsClicked(playerTwo))
  }
  function checkForWinner(possibleWins, true) {
    if (possibleWins == true) {
      alert("You Win!")
    }
  }
}

//function getFee(isWinner) {
  //return (isWinner) ? '$2.00' : '$10.00');
//}




/*cellsClicked(playerOne);
 cellsClicked(playerTwo);
 cells[0].textContent;
 cells[1].textContent;
 cells[2].textContent;
 cells[3].textContent;
 cells[4].textContent;
 cells[5].textContent;
 cells[6].textContent;
 cells[7].textContent;
 cells[8].textContent;*/