function subTotal() {
  let wishList = JSON.parse(localStorage.getItem("products")) || [];

  let quantities = document.querySelectorAll(".quantity");
  let totalProduct = document.querySelectorAll(".total-product span");
  let subTotal = document.querySelector(".sub-total");
  let sum = 0;

  totalProduct.forEach((item, index) => {
    let quantity = +quantities[index].innerText;
    let price = wishList[index].price;
    let total = quantity * price;
    sum += total;

    item.innerText = `${total}`;
    subTotal.innerText = `$${sum.toFixed(2)}`;
  });
}

function total() {
  let delivery = document.querySelector(".delivery");
  let subTotal = document.querySelector(".sub-total");
  let total = document.querySelector(".total");
  let cart = document.querySelector(".header__icons .cart");
  let sum = 0;

  sum =
    +subTotal.innerText.replace("$", "") + +delivery.innerText.replace("$", "");

  total.innerText = `$${sum.toFixed(2)}`;
  cart.innerText = `$${sum.toFixed(2)}`;

  localStorage.setItem(
    "cartTotal",
    JSON.stringify({
      subTotal: subTotal.innerText.replace("$", ""),
      total: sum.toFixed(2),
      delivery: delivery.innerText.replace("$", "")
    })
  );
}

function cartTotal() {
  let cart = document.querySelector(".header__icons .cart");
  let data = JSON.parse(localStorage.getItem("products")) || [];
  let sum = 0;

  if (data) {
    data.map((ele) => {
      let total = ele.quantity * ele.price;
      sum += total;
    });
    cart.innerText = `$${sum.toFixed(2)}`;
  } else {
    cart.innerText = `$0.00`;
  }
}

export { subTotal, total, cartTotal };
