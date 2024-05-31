const forms = document.forms;
const content = document.getElementById("content");
const buttonNode = document.getElementById("sendForm");

buttonNode.addEventListener("click", (e) => {
  e.preventDefault();

  Array.from(forms[0].elements).forEach((el) => {
    if (
      (el.type === "radio" && el.checked) ||
      (el.type === "checkbox" && el.checked)
    ) {
      const p = document.createElement("p");
      p.innerText = `Вы воспользовались радио/чекбоксом и выбрали: ${el.value}`;
      content.append(p);
    } else if (
      el.name === "reviev" ||
      el.type === "text" ||
      el.type === "mail"
    ) {
      const p = document.createElement("p");
      p.innerText = `Вы ввели в поле: ${el.value}`;
      content.append(p);
    } else if (el.name === "country") {
      Array.from(el.children).forEach((elem) => {
        if (elem.selected) {
          const p = document.createElement("p");
          p.innerText = `Вы выбрали из списка: ${elem.value}`;
          content.append(p);
        }
      });
    }
  });
});
