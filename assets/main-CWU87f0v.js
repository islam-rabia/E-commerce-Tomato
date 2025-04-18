import{f as o,a as i,s as c,c as l,b as p,d as u,g as d,e as m,i as f}from"./search-product-CkJgnzyF.js";import{g}from"./handle-dishes-list-zhLtrY1D.js";import"./show-sweet-alert-CPHbVcik.js";import"./wishList-management-Cf47GKFr.js";function h(){const e=document.querySelector(".menu__list");e.addEventListener("wheel",t=>{t.preventDefault(),e.scrollLeft+=t.deltaY})}async function x(){let a=(await(await fetch("https://api.jsonbin.io/v3/b/67f592138960c979a580ea11")).json()).record.menuList;_(a),h()}let D=document.querySelector(".menu__list");function _(e){D.innerHTML=e.map(t=>{let{id:a,attribute:r,title:s,img:n}=t;return`
      <li id="product-${a}" data-ion="${r}" class="product__list flex flex-col items-center justify-center gap-[6px]">
        <img src="${n}" class="max-w-[90px] cursor-pointer py-[2px] px-[2px] rounded-[50%]" alt="" />
        <h3>${s}</h3>
      </li>
    `}).join("")}o();i();x();g();c();l({icons:f});p();u();d();m();
