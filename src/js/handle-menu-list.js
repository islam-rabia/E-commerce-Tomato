import { scrollLeftMenu } from "./scrollLeft-menu.js";

async function generateData() {
  let request = await fetch(
    "https://api.jsonbin.io/v3/b/685196ae8561e97a5025e898"
  );
  let response = await request.json();
  let data = response.record.menuList;

  handleData(data);
  scrollLeftMenu();
}

let app = document.querySelector(".menu__list");

function handleData(data) {
  app.innerHTML = data
    .map((item) => {
      let { id, attribute, title, img } = item;

      return `
      <li id="product-${id}" data-ion="${attribute}" class="product__list flex flex-col items-center justify-center gap-[6px]">
        <img src="${img}" class="max-w-[90px] cursor-pointer py-[2px] px-[2px] rounded-[50%]" alt="" />
        <h3>${title}</h3>
      </li>
    `;
    })
    .join("");
}

export { generateData };
