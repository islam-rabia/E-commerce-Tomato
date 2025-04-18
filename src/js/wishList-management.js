function wishListManage(products, productId) {
  let wishListData = JSON.parse(localStorage.getItem("products")) || [];

  let findProduct = wishListData.find((ele) => ele.id === productId);
  if (findProduct) {
    wishListData = wishListData.map((el) =>
      el.id === findProduct.id ? { ...el, quantity: el.quantity + 1 } : el
    );
  } else {
    let findProduct = products.find((ele) => ele.id === productId);
    wishListData.push({ ...findProduct, quantity: 1 });
  }

  localStorage.setItem("products", JSON.stringify(wishListData));
}

export { wishListManage };
