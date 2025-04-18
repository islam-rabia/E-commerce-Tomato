function scrollLeftMenu() {
  const scrollContainer = document.querySelector(".menu__list");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });
}

export { scrollLeftMenu };
