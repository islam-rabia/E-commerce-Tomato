import "./navbar.js";
import { createIcons, icons } from "lucide";
import "../validation/handle-switching-forms.js";
import { formSignUpFunc } from "../validation/form-signUp.js";
import { formSignIn } from "../validation/form-signIn.js";
import "../validation/close-form.js";
import { generateDishesData } from "./handle-dishes-list.js";
import { goToTop, scrollHeader } from "./scroll-header.js";
import { cartCount } from "./cart-count.js";
import { generateDataDashes, searchProduct } from "./search-product.js";

createIcons({ icons });

formSignUpFunc();
formSignIn();
generateDishesData();
scrollHeader();
cartCount();
searchProduct();
generateDataDashes();
goToTop();
