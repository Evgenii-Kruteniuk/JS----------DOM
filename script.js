/*Рандомный счетчик и рандомная смена цвета фона*/

const randomCount = document.querySelector(".random");
const button = document.querySelector(".button");

button.addEventListener("click", random);

function random() {
  randomCount.innerText = `${Math.floor(Math.random() * 100)}`;
  randomCount.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
     ${Math.floor(Math.random() * 255)}, 
  ${Math.floor(Math.random() * 255)})`;
}

setInterval(() => button.click(), 1000);
