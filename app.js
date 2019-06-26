// creat grid within the container div.
const container = document.querySelector('#container');

const div = document.createElement('div');
div.classList.add('grid');
div.textContent = 'im the div with class grid!';

container.appendChild(div);