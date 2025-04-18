function decrement(productId) {
  let wishList = JSON.parse(localStorage.getItem("products")) || [];

  let singleProduct = wishList.find((ele) => ele.id === productId);
  if (singleProduct) {
    if (singleProduct.quantity !== 1) {
      singleProduct.quantity--;
      localStorage.setItem("products", JSON.stringify(wishList));
    }
  }
}

export { decrement };
