import "../js/navbar.js";
import { createIcons, icons } from "lucide";
import "../validation/handle-switching-forms.js";
import { formSignUpFunc } from "../validation/form-signUp.js";
import { formSignIn } from "../validation/form-signIn.js";
import "../validation/close-form.js";
import { goToTop, scrollHeader } from "../js/scroll-header.js";
import { getDataLocalStorage } from "./get-data-localStorage.js";
import { cartCount } from "../js/cart-count.js";
import { generateDataDashes, searchProduct } from "../js/search-product.js";

createIcons({ icons });

formSignUpFunc();
formSignIn();
scrollHeader();
goToTop();
getDataLocalStorage();
cartCount();
searchProduct();
generateDataDashes();
