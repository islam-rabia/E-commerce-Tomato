import { cartTotal } from "../cart/cart-total.js";
import { addActiveMenu } from "./add-active-menu.js";
import { cartCount } from "./cart-count.js";
import { changeQuantity } from "./change-quantity.js";
import { filterDishes } from "./filter-dishes-list.js";
import { saveDataInLocalStorage } from "./save-data-localStorage.js";
import { wishListManage } from "./wishList-management.js";
import { showIcons } from "./show-icons.js";
import { increment } from "./increment.js";
import { decrement } from "./decrement.js";
import { showSweetAlert } from "./show-sweet-alert.js";

let app = document.querySelector(".dishes__list");
let storedAccounts = JSON.parse(localStorage.getItem("account")) || [];
let products;

async function generateDishesData() {
  let request = await fetch(
    "https://api.jsonbin.io/v3/b/67f591f58a456b7966852561"
  );
  let response = await request.json();
  let data = response.record.dishesList;
  products = data;

  handleData(data);
  filterDishes(data);
  showIcons(app);
  addActiveMenu(data);
  cartTotal();
}

function handleData(data) {
  app.innerHTML = data
    .map((item, index) => {
      let { id, title, img, description, price, quantity } = item;

      return `
      <li id="product-${id}" class="gap-[5px] max-w-[265px] sm:max-w-fit">
        <figure class="relative">
          <img src="${img}" alt="" />
          <div data-index="${index}" data-id="${id}"
            class="icon_plus z-[1] cursor-pointer w-full absolute bottom-[13px] right-[10px] bg-white flex justify-center items-center h-6 max-w-[25px] rounded-[30px]"
          >
            <svg class="text-[#474747] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div>
          <div
            class="increment_decrement absolute bottom-[10px] right-[10px] flex justify-center h-[30px] w-[80px] items-center gap-[8px] bg-white rounded-[30px] py-[10px] px-[10px]"
          >
            <div data-id="${id}"
              class="icon-minus p-[4px] rounded-[30px] bg-[#ffadad] cursor-pointer"
            >
              <svg class="text-[#e41e1e] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>
            </div>
            <p id="product-quantity-${id}" class="data-id=${id} text-sm text-gray-700">${quantity}</p>
            <div data-id="${id}" data-index="${index}"
              class="icon-plus increment p-[4px] rounded-[30px] bg-[#8ff196] cursor-pointer"
            >
              <svg class="text-[#07af0f] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </div>
          </div>
        </figure>
        <div
          class="dishes__title bg-white flex flex-col px-[15px] py-[15px] gap-[5px] md:px-[9px] xl:px-[15px]"
        >
          <div class="title-icons flex flex-row justify-between items-center">
            <a href="show-details.html?id=${id}">
              <h3 class="title text-[17px] font-semibold md:text-[15px] xl:text-[17px]">${title}</h3>
            </a>
            <img
              src="./image/rating_starts.png"
              class="max-w-[76px] md:max-w-[69px]"
              alt=""
            />
          </div>
          <p class="text-sm text-gray-800">${description}</p>
          <span class="text-lg text-red-600 font-semibold">$${price}</span>
        </div>
      </li>
    `;
    })
    .join("");

  app.addEventListener("click", (event) => {
    let ele = event.target.closest(".icon_plus");

    if (ele) {
      let id = +ele.getAttribute("data-id");

      if (storedAccounts.length === 0) {
        showSweetAlert("Please sign in first!", id, "#f44336");
        return;
      }

      saveDataInLocalStorage(products, id);
      showSweetAlert("Added to cart!", id, "#4caf50");
      wishListManage(products, id);

      changeQuantity(app, id);
      cartCount();
      cartTotal();
    }
  });

  app.addEventListener("click", (event) => {
    let ele = event.target.closest(".increment");

    if (ele) {
      let id = +ele.getAttribute("data-id");

      increment(id);
      changeQuantity(app, id);
      cartCount();
      cartTotal();
    }
  });

  app.addEventListener("click", (event) => {
    let ele = event.target.closest(".icon-minus");

    if (ele) {
      let id = +ele.getAttribute("data-id");

      decrement(id);
      changeQuantity(app, id);
      cartCount();
      cartTotal();
    }
  });
}

export { handleData, generateDishesData };
