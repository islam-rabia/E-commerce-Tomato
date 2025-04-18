function handleScreen() {
  let mobileApp = document.querySelector(".mobileApp__section");
  let btns = mobileApp.querySelectorAll("button");
  let iframe = document.querySelector("iframe");

  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let attr = event.target.getAttribute("data-ion");

      iframe.className = "";
      iframe.classList.add(`${attr}`);
    });
  });
}

export { handleScreen };
