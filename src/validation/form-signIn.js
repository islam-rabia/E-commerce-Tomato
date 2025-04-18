import { handleAccount } from "./handle-account.js";
import { handleMassageSignIn } from "./massage-in-signIn.js";

let form = document.querySelector(".form__signIn");
let email = document.getElementById("email_2");
let password = document.getElementById("password_2");
let submit = form.querySelector(".submit");

handleAccount();

function formSignIn() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value !== "" && password.value !== "") {
      matchAccount();
    }
    handleMassageSignIn(email, password);
  });
}

function matchAccount() {
  let storedAccounts = JSON.parse(localStorage.getItem("account")) || [];
  if (!Array.isArray(storedAccounts)) {
    storedAccounts = [];
  }
  let user = storedAccounts.find(
    (acc) => acc.email === email.value && acc.password === password.value
  );
  if (user) {
    submit.innerHTML = "Loading...";
    setTimeout(() => {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.reload();
    }, 1000);
  }
}

export { formSignIn };
