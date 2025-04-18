import{b as u,h as x,f as $,a as b,s as k,e as y,c as j,i as L,d as M,g as P}from"./search-product-CkJgnzyF.js";import{i as h,d as m,s as l,c as g}from"./show-sweet-alert-CPHbVcik.js";import{a as f,w,s as S}from"./wishList-management-Cf47GKFr.js";let p,_=JSON.parse(localStorage.getItem("account"))||[];function q(a,s){let e=a.filter(i=>i.id!==s),t=[];for(;t.length<3&&e.length>0;){let i=Math.floor(Math.random()*e.length);t.push(e[i]),e.splice(i,1)}I(t)}let n=document.querySelector(".dishes__list");function I(a){p=a,n.innerHTML=a.map((s,e)=>{let{id:t,title:i,img:r,description:c,price:v}=s;return`
      <li id="product-${t}" class="gap-[5px] max-w-[265px] sm:max-w-fit">
        <figure class="relative">
          <img src="${r}" alt="" />
          <div data-ion="${e}" data-id="${t}"
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
            <p id="product-quantity-${t}" class="data-id=${t} text-sm text-gray-700">0</p>
            <div data-id="${t}"
              class="icon-plus p-[4px] rounded-[30px] bg-[#8ff196] cursor-pointer"
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
              <h3 class="title text-[17px] font-semibold md:text-[15px] xl:text-[17px]">${i}</h3>
            </a>
            <img
              src="./image/rating_starts.png"
              class="max-w-[76px] md:max-w-[69px]"
              alt=""
            />
          </div>
          <p class="text-sm text-gray-800">${c}</p>
          <span class="text-lg text-red-600 font-semibold">$${v}</span>
        </div>
      </li>
    `}).join(""),n.addEventListener("click",s=>{let e=s.target.closest("[data-id]"),t=parseInt(e.getAttribute("data-id"));if(e.classList.contains("icon-plus"))h(t);else if(e.classList.contains("icon-minus"))m(t);else if(e.classList.contains("icon_plus")){if(_.length===0){l("Please sign in first!",t,"#f44336");return}f(p,t),l("Added to cart!",t,"#4caf50"),w(p,t)}g(n,t),u(),x()}),S(n)}let d,A=JSON.parse(localStorage.getItem("account"))||[];async function D(){let e=(await(await fetch("https://api.jsonbin.io/v3/b/67f591f58a456b7966852561")).json()).record.dishesList;d=e,C(e),u(),x()}let o=document.querySelector(".details__list");function C(a){let e=+new URLSearchParams(window.location.search).get("id"),t=[],i=a.find(r=>r.id===e);t.push(i),i&&(B(t),g(o,e),q(d,e))}function B(a){o.innerHTML=a.map((s,e)=>{let{id:t,title:i,img:r,price:c}=s;return`
          <li>
            <div
              class="product grid gap-[20px] max-w-[563px] lg:max-w-[1200px] lg:grid-cols-2 lg:flex"
            >
              <figure class="max-w-[360px] w-full">
                <img src="${r}" alt="" />
              </figure>
              <div
                class=" flex justify-center flex-col items-start gap-[6px]"
              >
                <h3 class="text-[19px]">${i}</h3>
                <p class="text-sm leading-5 text-[#2a2a2a]">
                  lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem vitae, inventore nesciunt maxime consequatur vel
                  ipsum assumenda voluptate quisquam. Praesentium exercitationem
                  impedit a totam cum deserunt temporibus alias in. Minus!
                </p>
                <div class="flex gap-2">
                  <span>quantity:</span>
                  <div
                    class="increment_decrement flex justify-center h-[30px] w-[80px] items-center gap-[8px] bg-white rounded-[30px] py-[10px] px-[10px]"
                  >
                    <div
                      data-id="${t}"
                      class="icon-minus p-[4px] rounded-[30px] bg-[#ffadad] cursor-pointer"
                    >
                      <svg class="text-[#e41e1e] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>
                    </div>
                    <p
                      id="product-quantity-${t}" data-id="${t}"
                      class="text-sm text-gray-700"
                    >
                      0
                    </p>
                    <div
                      data-id="${t}"
                      class="icon-plus p-[4px] rounded-[30px] bg-[#8ff196] cursor-pointer"
                    >
                      <svg class="text-[#07af0f] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </div>
                  </div>
                </div>
                <span>Price: $${c}</span>
                <button data-ion="${e}" data-id="${t}"
                  class="add-cart mt-[16px] text-white flex gap-[6px] justify-center items-center text-[13px] h-[37px] py-[5px] px-[30px] rounded-[7px] bg-[#fd5c38] cursor-pointer"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </li>
      `}).join(""),o.addEventListener("click",s=>{let e=s.target.closest("[data-id]"),t=parseInt(e.getAttribute("data-id"));if(e.classList.contains("icon-plus"))h(t);else if(e.classList.contains("icon-minus"))m(t);else if(e.classList.contains("add-cart")){if(A.length===0){l("Please sign in first!",t,"#f44336");return}f(d,t),l("Added to cart!",t,"#4caf50"),w(d,t)}g(o,t),u(),x()})}$();b();k();y();j({icons:L});D();M();P();
