import { defineConfig } from "vite";

export default defineConfig({
  base: "/E-commerce-Tomato/",
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        mobileApp: "mobileApp.html",
        menu: "menu.html",
        cart: "shopping-cart.html",
        details: "show-details.html",
        contact: "contact.html"
      }
    }
  }
});
