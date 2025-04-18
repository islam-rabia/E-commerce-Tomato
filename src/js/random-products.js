import { cartTotal } from "../cart/cart-total.js";
import { cartCount } from "./cart-count.js";
import { changeQuantity } from "./change-quantity.js";
import { decrement } from "./decrement.js";
import { increment } from "./increment.js";
import { saveDataInLocalStorage } from "./save-data-localStorage.js";
import { showIcons } from "./show-icons.js";
import { showSweetAlert } from "./show-sweet-alert.js";
import { wishListManage } from "./wishList-management.js";

let products;
let storedAccounts = JSON.parse(localStorage.getItem("account")) || [];

function getRandomProducts(products, productId) {
  let filteredProducts = products.filter((el) => el.id !== productId);
  let randomProducts = [];

  while (randomProducts.length < 3 && filteredProducts.length > 0) {
    let randomIndex = Math.floor(Math.random() * filteredProducts.length);
    randomProducts.push(filteredProducts[randomIndex]);
    filteredProducts.splice(randomIndex, 1);
  }

  handleData(randomProducts);
}

let app = document.querySelector(".dishes__list");
function handleData(data) {
  products = data;
  app.innerHTML = data
    .map((item, index) => {
      let { id, title, img, description, price } = item;

      return `
      <li id="product-${id}" class="gap-[5px] max-w-[265px] sm:max-w-fit">
        <figure class="relative">
          <img src="${img}" alt="" />
          <div data-ion="${index}" data-id="${id}"
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
            <p id="product-quantity-${id}" class="data-id=${id} text-sm text-gray-700">0</p>
            <div data-id="${id}"
              class="icon-plus p-[4px] rounded-[30px] bg-[#8ff196] cursor-pointer"
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
    let target = event.target.closest("[data-id]");

    let id = parseInt(target.getAttribute("data-id"));

    if (target.classList.contains("icon-plus")) {
      increment(id);
    } else if (target.classList.contains("icon-minus")) {
      decrement(id);
    } else if (target.classList.contains("icon_plus")) {
      if (storedAccounts.length === 0) {
        showSweetAlert("Please sign in first!", id, "#f44336");
        return;
      }

      saveDataInLocalStorage(products, id);
      showSweetAlert("Added to cart!", id, "#4caf50");
      wishListManage(products, id);
    }

    changeQuantity(app, id);
    cartCount();
    cartTotal();
  });

  showIcons(app);
}

export { getRandomProducts };
