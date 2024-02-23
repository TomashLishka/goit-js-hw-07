function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.getElementById('boxes');


createBtnEl.addEventListener('click', () => {
    inputNumberEl.focus();
    if (
      Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
      Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
    ) {
      alert('Please enter number from 1 to 100');
    } else {
      createBoxes(inputNumberEl.value);
      inputNumberEl.value = '';
    }
    
  });

let size = 0;
let div;
  
destroyBtnEl.addEventListener('click', () => {
        inputNumberEl.value = '';
        divBoxesEl.innerHTML = "";
});

function createBoxes(amount) {
    divBoxesEl.innerHTML = "";
    size = 30;
    for (let i = 0; i < amount; i += 1) {
      div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
      divBoxesEl.insertAdjacentHTML('beforeend', div);
      size += 10;
    }
    
}