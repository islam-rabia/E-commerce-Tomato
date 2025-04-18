function scrollHeader() {
  let header = document.getElementById("header");
  let go_to_top = document.querySelector("#go_to_top");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      header.classList.add("active");
      go_to_top.classList.add("active");
    } else {
      header.classList.remove("active");
      go_to_top.classList.remove("active");
    }
  });
}

function goToTop() {
  let go_to_top = document.querySelector("#go_to_top");

  go_to_top.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

export { scrollHeader, goToTop };
