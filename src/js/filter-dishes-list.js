import { handleData } from "./handle-dishes-list.js";
import { showIcons } from "./show-icons.js";

function filterDishes(data) {
  let productLists = document.querySelectorAll(".product__list");
  let app = document.querySelector(".dishes__list");

  productLists.forEach((productList) => {
    productList.addEventListener("click", () => {
      let param = productList.getAttribute("data-ion");

      let newData = data.filter((ele) => ele.userId === param);
      if (newData) {
        handleData(newData);
        showIcons(app);
      }
    });
  });
}

export { filterDishes };
