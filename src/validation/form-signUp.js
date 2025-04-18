import { handleMassageSignUp } from "./massage-in-signUp.js";
import { handleSwitchingSignIn } from "./handle-switching-forms.js";

function formSignUpFunc() {
  let formSignUp = document.querySelector(".form__signUp");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  formSignUp.addEventListener("submit", (event) => {
    event.preventDefault();

    if (
      firstName.value !== "" &&
      lastName.value !== "" &&
      email.value !== "" &&
      password.value !== ""
    ) {
      saveInLocalStorage();
      handleSwitchingSignIn();
    }

    handleMassageSignUp(firstName, lastName, email, password);
  });
}

function saveInLocalStorage() {
  let accounts = JSON.parse(localStorage.getItem("account")) || [];
  accounts.push({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  });
  localStorage.setItem("account", JSON.stringify(accounts));
}

export { formSignUpFunc };
