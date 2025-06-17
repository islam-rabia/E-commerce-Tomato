import{j as r,t as d,b as l,c as m,i as w,f,a as v,s as k,e as S,d as b,g as y}from"./search-product-C18CYfkg.js";import{s as $,i as L,c as n,d as j}from"./show-sweet-alert-CPHbVcik.js";let i=JSON.parse(localStorage.getItem("products"))||[];function A(){document.querySelectorAll(".delete-product").forEach(e=>{e.addEventListener("click",()=>{const s=+e.getAttribute("data-index"),t=+e.getAttribute("data-id");i.splice(s,1),localStorage.setItem("products",JSON.stringify(i)),p(i),$("Removed from wishlist!",t,"#f44336"),r(),d(),l()})})}let c=JSON.parse(localStorage.getItem("products"))||[];function q(){c&&(p(c),r(),d(),A())}let a=document.querySelector("table tbody");function p(o){a.innerHTML=o.map((e,s)=>{let{id:t,title:u,img:g,price:x,quantity:h}=e;return`
      <tr id="${t}"
        class="grid grid-cols-6 gap-5 sm:gap-[40px] py-[3px] border-b-[1px] border-[#dfdfdf] items-center text-[14px]"
      >
        <td>
          <img class="max-w-[55px]" src="${g}" alt="" />
        </td>
        <td>${u}</td>
        <td class="price">$${x}</td>
        <td>
          <div
            class="increment_decrement flex justify-center h-[30px] w-[80px] items-center gap-[8px] bg-white rounded-[30px] py-[10px] px-[10px]"
          >
            <div
              data-id="${t}"
              class="icon-minus p-[4px] rounded-[30px] bg-[#ffadad] cursor-pointer"
            >
              <svg class="text-[#e41e1e] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path></svg>
            </div>
            <p
              id="product-quantity-${t}"
              class="quantity text-sm text-gray-700"
            >
              ${h}
            </p>
            <div
              data-id=${t}
              class="icon-plus p-[4px] rounded-[30px] bg-[#8ff196] cursor-pointer"
            >
              <svg class="text-[#07af0f] w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            </div>
          </div>
        </td>
        <td class="total-product">$<span>24</span></td>
        <td data-index="${s}" data-id="${t}" class="delete-product w-fit" >
          <svg class="w-[16px] text-[#F44336] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </td>
      </tr>
    `}).join(""),a.addEventListener("click",e=>{let s=e.target.closest(".icon-plus");if(s){let t=+s.getAttribute("data-id");L(t),n(a,t),r(),d()}}),a.addEventListener("click",e=>{let s=e.target.closest(".icon-minus");if(s){let t=+s.getAttribute("data-id");j(t),n(a,t),r(),d()}})}m({icons:w});f();v();k();S();q();l();b();y();
