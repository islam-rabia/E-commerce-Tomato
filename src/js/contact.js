import "./navbar.js";
import { createIcons, icons } from "lucide";
import "../validation/handle-switching-forms.js";
import { formSignUpFunc } from "../validation/form-signUp.js";
import { formSignIn } from "../validation/form-signIn.js";
import "../validation/close-form.js";
import { scrollHeader } from "./scroll-header.js";
import { cartCount } from "./cart-count.js";
import { cartTotal } from "../cart/cart-total.js";
import { generateDataDashes, searchProduct } from "./search-product.js";

createIcons({ icons });

formSignUpFunc();
formSignIn();
scrollHeader();

function cartTotalContact() {
  let cartTotal = JSON.parse(localStorage.getItem("cartTotal")) || [];
  let delivery = document.querySelector(".delivery");
  let subTotal = document.querySelector(".sub-total");
  let total = document.querySelector(".total");

  delivery.innerText = `$${cartTotal.delivery}`;
  subTotal.innerText = `$${cartTotal.subTotal}`;
  total.innerText = `$${cartTotal.total}`;
}

cartTotalContact();
cartTotal();
cartCount();
searchProduct();
generateDataDashes();
