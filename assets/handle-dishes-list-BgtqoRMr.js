import{h as o,b as c}from"./search-product-C18CYfkg.js";import{s as x,c as n,i as f,d as w}from"./show-sweet-alert-CPHbVcik.js";import{s as g,a as v,w as b}from"./wishList-management-Cf47GKFr.js";function k(a){document.querySelectorAll(".product__list").forEach(e=>{e.addEventListener("click",()=>{let t=e.querySelector("img");if(!t)return;let r=document.querySelector(".product__list img.active");t.classList.add("active"),r&&(r.classList.remove("active"),u(a))})})}function y(a){let i=document.querySelectorAll(".product__list"),e=document.querySelector(".dishes__list");i.forEach(t=>{t.addEventListener("click",()=>{let r=t.getAttribute("data-ion"),l=a.filter(d=>d.userId===r);l&&(u(l),g(e))})})}let s=document.querySelector(".dishes__list"),_=JSON.parse(localStorage.getItem("account"))||[],p;async function A(){let e=(await(await fetch("https://api.jsonbin.io/v3/b/685196d38a456b7966afc4c8")).json()).record.dishesList;p=e,u(e),y(e),g(s),k(e),o()}function u(a){s.innerHTML=a.map((i,e)=>{let{id:t,title:r,img:l,description:d,price:h,quantity:m}=i;return`
      <li id="product-${t}" class="gap-[5px] max-w-[265px] sm:max-w-fit">
        <figure class="relative">
          <img src="${l}" alt="" />
          <div data-index="${e}" data-id="${t}"
            class="icon_plus z-[1] cursor-pointer w-full absolute bottom-[13px] right-[10px] bg-white flex justify-center items-center h-6 max-w-[25px] rounded-[30px]"
          >
            <svg class="text-[#474747] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div>
          <div
            class="increment_decrement absolute bottom-[10px] right-[10px] flex justify-center h-[30px] w-[80px] items-center gap-[8px] bg-white rounded-[30px] py-[10px] px-[10px]"
          >
            <div data-id="${t}"
              class="icon-minus p-[4px] rounded-[30px] bg-[#ffadad] cursor-pointer"
            >
              <svg class="text-[#e41e1e] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>
            </div>
            <p id="product-quantity-${t}" class="data-id=${t} text-sm text-gray-700">${m}</p>
            <div data-id="${t}" data-index="${e}"
              class="icon-plus increment p-[4px] rounded-[30px] bg-[#8ff196] cursor-pointer"
            >
              <svg class="text-[#07af0f] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </div>
          </div>
        </figure>
        <div
          class="dishes__title bg-white flex flex-col px-[15px] py-[15px] gap-[5px] md:px-[9px] xl:px-[15px]"
        >
          <div class="title-icons flex flex-row justify-between items-center">
            <a href="show-details.html?id=${t}">
              <h3 class="title text-[17px] font-semibold md:text-[15px] xl:text-[17px]">${r}</h3>
            </a>
            <img
              src="./image/rating_starts.png"
              class="max-w-[76px] md:max-w-[69px]"
              alt=""
            />
          </div>
          <p class="text-sm text-gray-800">${d}</p>
          <span class="text-lg text-red-600 font-semibold">$${h}</span>
        </div>
      </li>
    `}).join(""),s.addEventListener("click",i=>{let e=i.target.closest(".icon_plus");if(e){let t=+e.getAttribute("data-id");if(_.length===0){x("Please sign in first!",t,"#f44336");return}v(p,t),x("Added to cart!",t,"#4caf50"),b(p,t),n(s,t),c(),o()}}),s.addEventListener("click",i=>{let e=i.target.closest(".increment");if(e){let t=+e.getAttribute("data-id");f(t),n(s,t),c(),o()}}),s.addEventListener("click",i=>{let e=i.target.closest(".icon-minus");if(e){let t=+e.getAttribute("data-id");w(t),n(s,t),c(),o()}})}export{A as g};
