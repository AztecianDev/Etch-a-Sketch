//global scope
const btnReset = document.getElementById("reset");
const btnBlack = document.getElementById("black");
const btnRainbow = document.getElementById("rainbow");
const gridContainer = document.querySelector("#container");

//create grid
function createGrid(gSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${gSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gSize}, 1fr)`;

  for (let i = 0; i < gSize * gSize; i++) {
    gridCells = document.createElement("div");
    gridCells.classList.add("grid-cell");
    gridCells.style.backgroundColor = "white";

    gridContainer.appendChild(gridCells);
  }
}

createGrid(16);

btnBlack.addEventListener("click", function() {
  alert("hello im working");
});
