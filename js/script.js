console.log("Cześć!");

let body = document.querySelector(".js__body");
let button = document.querySelector(".js__button");
let specialText = document.querySelector(".js__specialText");

button.addEventListener("click", () => {
  body.classList.toggle("body__changedBackground");
  specialText.innerText = body.classList.contains("body__changedBackground")
    ? "jasne"
    : "ciemne";
});
