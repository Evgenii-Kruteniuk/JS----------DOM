const ol = document.querySelector("ol");
const allLi = document.querySelectorAll("li");

ol.addEventListener("click", (e) => {
  if (e.target.closest("li")) {
    allLi.forEach((el) => el.classList.remove("newColor"));
    e.target.classList.add("newColor");
  }
});
