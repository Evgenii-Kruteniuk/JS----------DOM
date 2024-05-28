/*Рандомный счетчик и рандомная смена цвета фона*/

// const randomCount = document.querySelector(".random");
// const button = document.querySelector(".button");

// button.addEventListener("click", random);

// function random() {
//   randomCount.innerText = `${Math.floor(Math.random() * 100)}`;
//   randomCount.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
//      ${Math.floor(Math.random() * 255)},
//   ${Math.floor(Math.random() * 255)})`;
// }

// setInterval(() => button.click(), 1000);

const button = document.querySelector(".button");
const random1 = document.querySelector(".random1");
const random2 = document.querySelector(".random2");
const allLi = document.querySelectorAll("li");
const arr = [
  "Это цитата дня!",
  "Это самая лучшая цитата, которую я слышал",
  "Вау, никогда не забуду",
  "Это что-то новенькое",
  "Впервые слышу",
  "Мне об этом друг рассказывал",
  "Вау!!!!",
  "Полная фигня",
  "Это нужно записать",
  " Хрен такое запомнишь)",
];

button.addEventListener("click", random);

function random() {
  random1.innerText = `${arr[Math.floor(Math.random() * 10)]}`;
  random2.innerText = `${allLi[Math.floor(Math.random() * 10)].innerText}`;
}
