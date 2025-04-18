function saveDataInLocalStorage(products, productId) {
  let wishListData = JSON.parse(localStorage.getItem("products")) || [];
  let findProduct = products.find((ele) => ele.id === productId);

  if (findProduct) {
    localStorage.setItem("products", JSON.stringify(wishListData));
    wishListData.push(findProduct);
  }
}

export { saveDataInLocalStorage };
