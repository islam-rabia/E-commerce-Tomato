function cartCount() {
  let headerIcons = document.querySelector(".header__icons span");
  let cartItems = JSON.parse(localStorage.getItem("products")) || [];

  if (cartItems) {
    headerIcons.textContent = cartItems.length;
  }
}

export { cartCount };
