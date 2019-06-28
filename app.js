//global scope
const btnReset = document.getElementById("reset");
const btnBlack = document.getElementById("black");
const btnRainbow = document.getElementById("rainbow");
const container = document.querySelector("#container");

//container styles.
document.getElementById("container").style.display = "flex";
document.getElementById("container").style.flexFlow = "row wrap";
document.getElementById("container").style.justifyContent = "flex-start";
document.getElementById("container").style.border = "1px solid #000";
document.getElementById("container").style.height = "600px";
document.getElementById("container").style.width = "600px";
document.getElementById("container").style.margin = "auto";

//create grid
function createGrid(gSize) {
  for (let i = 0; i < gSize; i++) {
    let gridCells = document.createElement("div");
    gridCells.className = "grid-cell";
    gridCells.style.backgroundColor = "white";
    gridCells.style.width = "50px";
    gridCells.style.height = "50px";
    gridCells.style.margin = "0";
    gridCells.style.padding = "0";
    gridCells.style.border = " 1px solid #000";

    container.appendChild(gridCells);
  }
}

createGrid(100);
