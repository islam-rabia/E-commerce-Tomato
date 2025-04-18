import { handleData } from "./handle-dishes-list.js";

function addActiveMenu(data) {
  let productLists = document.querySelectorAll(".product__list");

  productLists.forEach((btn) => {
    btn.addEventListener("click", () => {
      let img = btn.querySelector("img");
      if (!img) return;

      let activeImg = document.querySelector(".product__list img.active");
      img.classList.add("active");

      if (activeImg) {
        activeImg.classList.remove("active");
        handleData(data);
      }
    });
  });
}

export { addActiveMenu };
