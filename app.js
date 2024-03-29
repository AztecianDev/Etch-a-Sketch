//global scope
const btnReset = document.getElementById("reset");
const btnBlack = document.getElementById("black");
const btnRainbow = document.getElementById("rainbow");
const gridContainer = document.querySelector("#container");

let newGrid = createGrid(16);

//create grid
function createGrid(gSize) {
  //create grid coloumns/rows.
  gridContainer.style.gridTemplateColumns = `repeat(${gSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gSize}, 1fr )`;

  for (let i = 0; i < gSize * gSize; i++) {
    let gridCells = document.createElement("div");
    gridCells.classList.add("grid-cell");
    gridCells.style.backgroundColor = "white";

    gridContainer.appendChild(gridCells);
  }
  hover();
}

//reset grid when user inputs new grid size.
function reset() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  const userInput = prompt("Create Grid, Chose a Number between 1-100");
  newGrid = createGrid(userInput);
  if (userInput >= 1 && userInput <= 100) {
    return;
  } else {
    alert("Invalid Choice! Pick a number between 1-100");
  }
}

function colourB() {
  let cell = document.querySelectorAll(".grid-cell");
  cell.forEach(gridCells => {
    gridCells.addEventListener("mouseover", e => {
      e.target.style.backgroundColor = "#000";
    });
  });
}
// create random hex color.
function random() {
  let hash = "#";
  let colour = Math.floor(Math.random() * 16777215).toString(16);
  return hash + colour;
}

function rainbow() {
  // let colour = Math.floor(Math.random() * 16777215).toString(16);
  let cellR = document.querySelectorAll(".grid-cell");
  cellR.forEach(gridCells => {
    gridCells.addEventListener("mouseover", e => {
      e.target.style.backgroundColor = random();
    });
  });
}

function hover() {
  let cellG = document.querySelectorAll(".grid-cell");
  cellG.forEach(gridCells => {
    gridCells.addEventListener("mouseover", e => {
      e.target.style.backgroundColor = "#cbcdd1";
    });
  });
}

// event listners
btnReset.addEventListener("click", reset);
btnBlack.addEventListener("click", e => {
  colourB();
});
btnRainbow.addEventListener("click", e => {
  rainbow();
});
