const field = document.querySelector(".field");
const ball = document.querySelector(".ball");

field.addEventListener("click", (e) => {
  ball.style.top = `${e.clientY - 50}px`;
  ball.style.left = `${e.clientX - 50}px`;
  console.log(e.clientX);
  console.log(e.clientY);
});
