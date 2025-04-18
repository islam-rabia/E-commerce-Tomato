import { cartCount } from "../js/cart-count.js";
import { showSweetAlert } from "../js/show-sweet-alert.js";
import { subTotal, total } from "./cart-total.js";
import { handleRenderData } from "./get-data-localStorage.js";

let wishList = JSON.parse(localStorage.getItem("products")) || [];
function deleteProductFromLocalStorage() {
  const deleteBtns = document.querySelectorAll(".delete-product");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = +btn.getAttribute("data-index");
      const id = +btn.getAttribute("data-id");

      wishList.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(wishList));
      handleRenderData(wishList);

      deleteProductFromLocalStorage();
      showSweetAlert("Removed from wishlist!", id, "#f44336");

      subTotal();
      total();
      cartCount();
    });
  });
}

export { deleteProductFromLocalStorage };
