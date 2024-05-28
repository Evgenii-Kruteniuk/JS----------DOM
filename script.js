/*Список в котором можно кликом выделять выбранную книгу.*/

// const ol = document.querySelector("ol");
// const allLi = document.querySelectorAll("li");

// ol.addEventListener("click", (e) => {
//   if (e.target.closest("li")) {
//     allLi.forEach((el) => el.classList.remove("colorLi"));
//     e.target.classList.add("colorLi");
//   }
// });

/*Создадим светофор, который по нажатию на кнопку старт будут менять цвет*/

const buttonTrafficLights = document.querySelector(".buttonTrafficLights");
const allCircle = document.querySelectorAll(".circle");

buttonTrafficLights.addEventListener("click", redColor);

function redColor() {
  allCircle[2].classList.remove("green");
  allCircle[0].classList.add("red");
  buttonTrafficLights.removeEventListener("click", redColor);
  buttonTrafficLights.addEventListener("click", yellowColor);
}

function yellowColor() {
  allCircle[0].classList.remove("red");
  allCircle[1].classList.add("yellow");
  buttonTrafficLights.removeEventListener("click", yellowColor);
  buttonTrafficLights.addEventListener("click", greenColor);
}

function greenColor() {
  allCircle[1].classList.remove("yellow");
  allCircle[2].classList.add("green");
  buttonTrafficLights.removeEventListener("click", greenColor);
  buttonTrafficLights.addEventListener("click", redColor);
}

/*Автоматическое моргание светофора с интервалос 1 сек*/

// setInterval((outoClicker) => buttonTrafficLights.click(), 1000);

//Тут произошли новые изменения