const form = document.querySelector(".login-form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  // SETUP REFERENCE TO INPUT VALUES
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // SETUP VALIDATION TO CHECK FOR EMPTY INPUTS
  if (email === "" && password === "") {
    alert("All form fields must be filled in");
    return;
  }

  // OTHERWISE DEFINE LOCAL OBJECT TO STORE ENTERED INPUT VALUES
  const formData = {
    email,
    password,
  };

  // OUTPUS VALUE IN CONSOLE
  console.log(formData);

  // CLEAR INPUT VALUES
  form.reset();
});
