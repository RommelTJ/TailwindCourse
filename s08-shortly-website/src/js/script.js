const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errorMessage = document.getElementById("err-msg");

const validUrl = (s) => {
  return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(s);
};

const formSubmit = (e) => {
  e.preventDefault();
  if (input.value === "") {
    errorMessage.innerText = "Please add a link";
    input.classList.add("border-red");
  } else if (!validUrl(input.value)) {
    errorMessage.innerText = "Please add a valid link";
    input.classList.add("border-red");
  } else {
    errorMessage.innerText = "";
    input.classList.remove("border-red");
  }
}

linkForm.addEventListener('submit', formSubmit);
