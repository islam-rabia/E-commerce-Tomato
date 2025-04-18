import { changeQuantity } from "../js/change-quantity.js";
import { decrement } from "../js/decrement.js";
import { increment } from "../js/increment.js";
import { subTotal, total } from "./cart-total.js";
import { deleteProductFromLocalStorage } from "./delete-product.js";

let data = JSON.parse(localStorage.getItem("products")) || [];
function getDataLocalStorage() {
  if (data) {
    handleRenderData(data);
    subTotal();
    total();
  }
  deleteProductFromLocalStorage();
}

let app = document.querySelector("table tbody");
function handleRenderData(data) {
  app.innerHTML = data
    .map((item, index) => {
      let { id, title, img, price, quantity } = item;

      return `
      <tr id="${id}"
        class="grid grid-cols-6 gap-5 sm:gap-[40px] py-[3px] border-b-[1px] border-[#dfdfdf] items-center text-[14px]"
      >
        <td>
          <img class="max-w-[55px]" src="${img}" alt="" />
        </td>
        <td>${title}</td>
        <td class="price">$${price}</td>
        <td>
          <div
            class="increment_decrement flex justify-center h-[30px] w-[80px] items-center gap-[8px] bg-white rounded-[30px] py-[10px] px-[10px]"
          >
            <div
              data-id="${id}"
              class="icon-minus p-[4px] rounded-[30px] bg-[#ffadad] cursor-pointer"
            >
              <svg class="text-[#e41e1e] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path></svg>
            </div>
            <p
              id="product-quantity-${id}"
              class="quantity text-sm text-gray-700"
            >
              ${quantity}
            </p>
            <div
              data-id=${id}
              class="icon-plus p-[4px] rounded-[30px] bg-[#8ff196] cursor-pointer"
            >
              <svg class="text-[#07af0f] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            </div>
          </div>
        </td>
        <td class="total-product">$<span>24</span></td>
        <td data-index="${index}" data-id="${id}" class="delete-product w-fit" >
          <svg class="w-[16px] text-[#F44336] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </td>
      </tr>
    `;
    })
    .join("");

  app.addEventListener("click", (event) => {
    let ele = event.target.closest(".icon-plus");

    if (ele) {
      let id = +ele.getAttribute("data-id");
      increment(id);
      changeQuantity(app, id);
      subTotal();
      total();
    }
  });

  app.addEventListener("click", (event) => {
    let ele = event.target.closest(".icon-minus");

    if (ele) {
      let id = +ele.getAttribute("data-id");
      decrement(id);
      changeQuantity(app, id);
      subTotal();
      total();
    }
  });
}

export { getDataLocalStorage, handleRenderData };
