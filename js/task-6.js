// ELEMENTS
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// EVENT LISTENERS
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

// FUNCTIONS
function createBoxes() {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  clearBoxes();

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }

  input.value = "";
}

function destroyBoxes() {
  clearBoxes();
  input.value = "";
}

function clearBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
