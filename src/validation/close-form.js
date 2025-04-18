let btnsClose = document.querySelectorAll(".close__form");
let btnsShow = document.querySelector(".sign-account");
let section = document.getElementById("form__validation");

function ShowForm() {
  section.classList.add("active");
}

function hiddenForm() {
  section.classList.remove("active");
}

btnsShow.addEventListener("click", () => ShowForm());
btnsClose.forEach((btn) => {
  btn.addEventListener("click", () => hiddenForm());
});
