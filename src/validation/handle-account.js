function handleAccount() {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;
  let signAccount = document.querySelector(".sign-account");
  let myAccount = document.querySelector(".my-account");
  let loginOut = document.querySelector(".loginOut-account");
  let user = document.querySelector(".my-account .user-name");
  let email = document.querySelector(".my-account .email");

  if (loggedInUser) {
    signAccount.classList.add("active");
    myAccount.classList.add("active");
    loginOut.classList.add("active");
    user.innerHTML = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
    email.innerHTML = `${loggedInUser.email}`;
  } else {
    signAccount.classList.remove("active");
    myAccount.classList.remove("active");
    loginOut.classList.remove("active");
  }

  loginOut.addEventListener("click", () => {
    setTimeout(() => {
      localStorage.clear();
      myAccount.classList.remove("active");
      loginOut.classList.remove("active");
      signAccount.classList.remove("active");
    }, 1500);
  });
}

export { handleAccount };
