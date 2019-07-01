//global scope
const btnReset = document.getElementById("reset");
const btnBlack = document.getElementById("black");
const btnRainbow = document.getElementById("rainbow");
const gridContainer = document.querySelector("#container");

let newGrid = createGrid(16);

//create grid
function createGrid(gSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${gSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gSize}, 1fr )`;

  for (let i = 0; i < gSize * gSize; i++) {
    gridCells = document.createElement("div");
    gridCells.classList.add("grid-cell");
    gridCells.style.backgroundColor = "white";

    gridContainer.appendChild(gridCells);
  }
}

function reset() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  const userInput = prompt("Create Grid, Chose a Number between 1-100");
  newGrid = createGrid(userInput);

  return;
}

// event listners
btnReset.addEventListener("click", reset);
