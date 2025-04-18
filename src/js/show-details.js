import "./navbar.js";
import "../validation/handle-switching-forms.js";
import { formSignUpFunc } from "../validation/form-signUp.js";
import { formSignIn } from "../validation/form-signIn.js";
import "../validation/close-form.js";
import { createIcons, icons } from "lucide";
import { goToTop, scrollHeader } from "./scroll-header.js";
import { generateDishesData } from "./product-details.js";
import { generateDataDashes, searchProduct } from "./search-product.js";

formSignUpFunc();
formSignIn();
scrollHeader();
goToTop();
createIcons({ icons });
generateDishesData();
searchProduct();
generateDataDashes();
