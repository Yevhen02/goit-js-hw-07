const changeColorButton = document.querySelector(".change-color");
const backgroundColorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// ATTACH EVENT LISTENER & EVENT HANDLER OF INLINE ARROW CALLBACK FUNCTION
changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  backgroundColorSpan.textContent = randomColor;
});
