function searchProduct() {
  let input = document.querySelector(".search-input");
  let btnClose = document.querySelector(".close-search");
  let sectionSearch = document.getElementById("section-search");

  input.addEventListener("click", () => {
    sectionSearch.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    sectionSearch.classList.remove("active");
  });
}

async function generateDataDashes() {
  let req = await fetch("https://api.jsonbin.io/v3/b/67f591f58a456b7966852561");
  let res = await req.json();
  let data = res.record.dishesList;

  manageSearch(data);
}

function manageSearch(data) {
  let sectionSearch = document.getElementById("section-search");
  let input = sectionSearch.querySelector(".search");
  let paragraph = sectionSearch.querySelector("p");
  let list = sectionSearch.querySelector(".product-list");

  input.addEventListener("input", () => {
    let searchValue = input.value.toLowerCase();
    let filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );

    if (filteredProducts.length > 0) {
      list.innerHTML = filteredProducts
        .map((ele) => {
          let { id, title, img, price } = ele;

          return `
          <li id="product-${id}" class="flex gap-[10px]">
            <figure class="max-w-[58px]">
              <img class="w-full h-full" src="${img}" />
            </figure>
            <div class="w-full">
              <div class="flex flex-row-reverse items-center justify-between w-full">
                <img src="./image/rating_starts.png" class="max-w-[76px] md:max-w-[69px]" alt="">
                <a href="show-details.html?id=${id}">
                  <h3 class="title text-[17px] font-semibold md:text-[15px] xl:text-[17px]">${title}</h3>
                </a>
              </div>
                <p class="text-[14px]">Price: <span class="text-[#fd5c38] font-medium">$${price}</span></p>
            </div>
          </li>
        `;
        })
        .join("");
    }

    if (input.value === "") {
      paragraph.classList.remove("active");
      list.innerHTML = "";
    } else {
      paragraph.classList.add("active");
    }

    if (filteredProducts.length === 0) {
      paragraph.classList.add("active");
    }
  });
}

export { searchProduct, generateDataDashes };
