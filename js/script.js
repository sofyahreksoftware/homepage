const toggleBackground = () => {
  const body = document.querySelector(".js__body");
  body.classList.toggle("body__changedBackground");
  const specialText = document.querySelector(".js__specialText");
  specialText.innerText = body.classList.contains("body__changedBackground")
    ? "jasne"
    : "ciemne";
};

const welcome = () => {
  console.log("Witam wszystkich deweloperów, którzy tutaj zaglądają😜");
};

const init = () => {
  const button = document.querySelector(".js__button");
  button.addEventListener("click", toggleBackground);
  welcome();
};

init();
