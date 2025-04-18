import "./navbar.js";
import { createIcons, icons } from "lucide";
import "../validation/handle-switching-forms.js";
import { formSignUpFunc } from "../validation/form-signUp.js";
import { formSignIn } from "../validation/form-signIn.js";
import "../validation/close-form.js";
import { handleScreen } from "./handle-screen.js";
import { goToTop, scrollHeader } from "./scroll-header.js";
import { cartCount } from "./cart-count.js";
import { generateDataDashes, searchProduct } from "./search-product.js";
import { cartTotal } from "../cart/cart-total.js";

createIcons({ icons });

formSignUpFunc();
formSignIn();
handleScreen();
scrollHeader();
goToTop();
cartCount();
cartTotal();
searchProduct();
generateDataDashes();
