const btnReset = document.getElementById('reset');
const btnBlack = document.getElementById('black');
const btnRainbow = document.getElementById('rainbow');
const container = document.querySelector('#container');
let grid = 16;

//create grid
function createGrid(grid) {
    resetContainer();

    for (let i = 0; i < (grid * grid); i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.style.color = 'red';


        container.appendChild(cell);
    }
    container.style.gridTemplateColums = 'repeat(grid) 1fr';

}

function resetContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

window.onload = function () {
    createGrid(grid);
}