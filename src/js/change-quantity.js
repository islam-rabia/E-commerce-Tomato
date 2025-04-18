function changeQuantity(parent, productId) {
  let wishList = JSON.parse(localStorage.getItem("products")) || [];

  let singleProduct = wishList.find((el) => el.id === productId);

  if (singleProduct) {
    let titleQuantity = parent.querySelector(`#product-quantity-${productId}`);
    titleQuantity.innerHTML = singleProduct.quantity;
  }
}

export { changeQuantity };
