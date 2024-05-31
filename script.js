// const formArr = document.querySelector(".form");
// Array.from(formArr.elements).forEach((el) => console.log(el));

const forms = document.forms;

const arr =Array.from(forms[0].elements)
  .filter((el) => el.type === "radio")
  .forEach((el) => console.log(el));
