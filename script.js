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
const ol = document.querySelector("ol");
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
  allLi.forEach((el) => el.classList.remove("red"));
  random1.innerText = `${arr[Math.floor(Math.random() * 10)]}`;

  let param = Math.floor(Math.random() * 10);
  random2.innerText = `${allLi[param].innerText}`;
  allLi[param].classList.add("red");
}

ol.addEventListener("click", (e) => {
  if (e.target.closest("li")) {
    allLi.forEach((el) => el.classList.remove("red"));
    random2.innerText = e.target.innerText;
    e.target.classList.add("red");
  }
});
