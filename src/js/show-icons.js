function showIcons(parent) {
  let plusDivs = parent.querySelectorAll(".icon_plus");
  let products = parent.querySelectorAll(".dishes__title");
  let incrDecrBtns = parent.querySelectorAll(".increment_decrement");

  plusDivs.forEach((plusDiv, index) => {
    plusDiv.addEventListener("click", () => {
      incrDecrBtns[index].classList.add("active");
      plusDivs[index].classList.add("active");
    });
  });

  products.forEach((product, index) => {
    product.addEventListener("click", () => {
      incrDecrBtns[index].classList.remove("active");
      plusDivs[index].classList.remove("active");
    });
  });
}

export { showIcons };
