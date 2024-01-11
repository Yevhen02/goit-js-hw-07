// DECLARE VARIABLE TO STORE SELECTED HTML ELEMENT
const nameInput = document.querySelector("input#name-input");
// DECLARE VARIABLE TO STORE SELECTED HTML ELEMENT
const nameOutput = document.querySelector("span#name-output");

// ATTACH EVENT LISTENER & EVENT HANDLER ARROW INLINE ARROW FUNCTION
nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();

  // SETUP TEXT CONTENT VALUE
  return inputValue === ""
    ? `${(nameOutput.textContent = "Anonymous")}`
    : `${(nameOutput.textContent = inputValue)}`;
});
