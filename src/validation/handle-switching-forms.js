let btnLogin = document.querySelector(".form__signUp .login");
let formSignUp = document.querySelector(".form__signUp");

let formSignIn = document.querySelector(".form__signIn");
let btnSignUp = document.querySelector(".form__signIn .SignUp");

function handleSwitchingSignIn() {
  formSignUp.classList.add("fade-out");
  formSignIn.classList.add("fade-in");
}

function handleSwitchingSignUp() {
  formSignUp.classList.remove("fade-out");
  formSignIn.classList.remove("fade-in");
}

btnLogin.addEventListener("click", () => handleSwitchingSignIn());
btnSignUp.addEventListener("click", () => handleSwitchingSignUp());

export { handleSwitchingSignIn };
