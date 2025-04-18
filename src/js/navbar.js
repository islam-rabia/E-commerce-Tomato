let openMenu = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".close-menu");
let sectionNavbar = document.querySelector(".section-navbar");
let navbar = document.querySelector(".navbar");

function RemoveActiveNavbar() {
  sectionNavbar.classList.add("fade-out");
  sectionNavbar.classList.remove("fade-in");
  navbar.classList.remove("active");
}

function AddActiveNavbar() {
  sectionNavbar.classList.remove("fade-out");
  sectionNavbar.classList.add("fade-in");
  navbar.classList.add("active");
}

navbar.addEventListener("click", () => RemoveActiveNavbar());
closeMenu.addEventListener("click", () => RemoveActiveNavbar());
openMenu.addEventListener("click", () => AddActiveNavbar());
