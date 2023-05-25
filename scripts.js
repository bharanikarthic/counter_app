const mainTitle = document.querySelector('#title');
let curValue = 0;

const Decrement = document.querySelector('#decrement');
const Reset = document.querySelector('#reset');
const Increment = document.querySelector('#increment');

Increment.addEventListener('click', () => {
  curValue++;
  mainTitle.textContent = curValue;
});

Decrement.addEventListener('click', () => {
  curValue--;
  mainTitle.textContent = curValue;
});

Reset.addEventListener('click', () => {
  curValue = 0;
  mainTitle.textContent = curValue;
});
