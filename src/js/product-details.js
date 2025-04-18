import { cartTotal } from "../cart/cart-total.js";
import { cartCount } from "./cart-count.js";
import { changeQuantity } from "./change-quantity.js";
import { decrement } from "./decrement.js";
import { increment } from "./increment.js";
import { getRandomProducts } from "./random-products.js";
import { saveDataInLocalStorage } from "./save-data-localStorage.js";
import { showSweetAlert } from "./show-sweet-alert.js";
import { wishListManage } from "./wishList-management.js";

let products;
let storedAccounts = JSON.parse(localStorage.getItem("account")) || [];

async function generateDishesData() {
  let request = await fetch(
    "https://api.jsonbin.io/v3/b/67f591f58a456b7966852561"
  );
  let response = await request.json();
  let data = response.record.dishesList;
  products = data;

  getProductDetails(data);
  cartCount();
  cartTotal();
}

let app = document.querySelector(".details__list");

function getProductDetails(data) {
  let urlParams = new URLSearchParams(window.location.search);
  let productId = +urlParams.get("id");
  let wishList = [];

  let product = data.find((el) => el.id === productId);
  wishList.push(product);

  if (product) {
    handleData(wishList);
    changeQuantity(app, productId);
    getRandomProducts(products, productId);
  }
}

function handleData(data) {
  app.innerHTML = data
    .map((item, index) => {
      let { id, title, img, price } = item;

      return `
          <li>
            <div
              class="product grid gap-[20px] max-w-[563px] lg:max-w-[1200px] lg:grid-cols-2 lg:flex"
            >
              <figure class="max-w-[360px] w-full">
                <img src="${img}" alt="" />
              </figure>
              <div
                class=" flex justify-center flex-col items-start gap-[6px]"
              >
                <h3 class="text-[19px]">${title}</h3>
                <p class="text-sm leading-5 text-[#2a2a2a]">
                  lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem vitae, inventore nesciunt maxime consequatur vel
                  ipsum assumenda voluptate quisquam. Praesentium exercitationem
                  impedit a totam cum deserunt temporibus alias in. Minus!
                </p>
                <div class="flex gap-2">
                  <span>quantity:</span>
                  <div
                    class="increment_decrement flex justify-center h-[30px] w-[80px] items-center gap-[8px] bg-white rounded-[30px] py-[10px] px-[10px]"
                  >
                    <div
                      data-id="${id}"
                      class="icon-minus p-[4px] rounded-[30px] bg-[#ffadad] cursor-pointer"
                    >
                      <svg class="text-[#e41e1e] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>
                    </div>
                    <p
                      id="product-quantity-${id}" data-id="${id}"
                      class="text-sm text-gray-700"
                    >
                      0
                    </p>
                    <div
                      data-id="${id}"
                      class="icon-plus p-[4px] rounded-[30px] bg-[#8ff196] cursor-pointer"
                    >
                      <svg class="text-[#07af0f] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </div>
                  </div>
                </div>
                <span>Price: $${price}</span>
                <button data-ion="${index}" data-id="${id}"
                  class="add-cart mt-[16px] text-white flex gap-[6px] justify-center items-center text-[13px] h-[37px] py-[5px] px-[30px] rounded-[7px] bg-[#fd5c38] cursor-pointer"
                >
                  Add to cart
                </button>
              </div>
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
    } else if (target.classList.contains("add-cart")) {
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
}

export { generateDishesData };
