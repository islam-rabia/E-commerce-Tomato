(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const e of c.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&p(e)}).observe(document,{childList:!0,subtree:!0});function h(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function p(t){if(t.ep)return;t.ep=!0;const c=h(t);fetch(t.href,c)}})();let ea=document.querySelector(".open-menu"),Ma=document.querySelector(".close-menu"),l=document.querySelector(".section-navbar"),H=document.querySelector(".navbar");function Q0(){l.classList.add("fade-out"),l.classList.remove("fade-in"),H.classList.remove("active")}function ra(){l.classList.remove("fade-out"),l.classList.add("fade-in"),H.classList.add("active")}H.addEventListener("click",()=>Q0());Ma.addEventListener("click",()=>Q0());ea.addEventListener("click",()=>ra());let oa=document.querySelector(".form__signUp .login"),Y0=document.querySelector(".form__signUp"),aa=document.querySelector(".form__signIn"),na=document.querySelector(".form__signIn .SignUp");function ta(){Y0.classList.add("fade-out"),aa.classList.add("fade-in")}function ia(){Y0.classList.remove("fade-out"),aa.classList.remove("fade-in")}oa.addEventListener("click",()=>ta());na.addEventListener("click",()=>ia());function la(a,d,h,p){let t=document.querySelector(".SweetAlert"),c=document.querySelector(".title-massage");a.value!==""&&d.value!==""&&h.value!==""&&p.value!==""?(t.classList.add("active"),c.classList.add("active"),c.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" 
        height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" 
        stroke-linecap="round" stroke-linejoin="round" 
        data-lucide="circle-check" 
        class="lucide lucide-circle-check w-[22px]">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
      <p class="text-[17px]">Form is valid</p>
    `,t.style.backgroundColor="#00bb53",a.value="",d.value="",h.value="",p.value=""):(t.classList.add("active"),c.classList.add("active"),c.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="24"
        height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" 
        stroke-linejoin="round" data-lucide="circle-x" 
        class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10">
        </circle><path d="m15 9-6 6"></path>
        <path d="m9 9 6 6"></path>
      </svg>
      <p class="text-[17px]">Please enter the data</p>
    `,t.style.backgroundColor="#f44336"),setTimeout(()=>{t.classList.remove("active"),c.classList.remove("active")},1500)}function GH(){let a=document.querySelector(".form__signUp"),d=document.getElementById("firstName"),h=document.getElementById("lastName"),p=document.getElementById("email"),t=document.getElementById("password");a.addEventListener("submit",c=>{c.preventDefault(),d.value!==""&&h.value!==""&&p.value!==""&&t.value!==""&&(sa(),ta()),la(d,h,p,t)})}function sa(){let a=JSON.parse(localStorage.getItem("account"))||[];a.push({firstName:firstName.value,lastName:lastName.value,email:email.value,password:password.value}),localStorage.setItem("account",JSON.stringify(a))}function va(){let a=JSON.parse(localStorage.getItem("loggedInUser"))||null,d=document.querySelector(".sign-account"),h=document.querySelector(".my-account"),p=document.querySelector(".loginOut-account"),t=document.querySelector(".my-account .user-name"),c=document.querySelector(".my-account .email");a?(d.classList.add("active"),h.classList.add("active"),p.classList.add("active"),t.innerHTML=`${a.firstName} ${a.lastName}`,c.innerHTML=`${a.email}`):(d.classList.remove("active"),h.classList.remove("active"),p.classList.remove("active")),p.addEventListener("click",()=>{setTimeout(()=>{localStorage.clear(),h.classList.remove("active"),p.classList.remove("active"),d.classList.remove("active")},1500)})}function xa(a,d){let h=document.querySelector(".SweetAlert"),p=document.querySelector(".title-massage"),t=JSON.parse(localStorage.getItem("account"))||[],c,e;t.map(M=>{c=M.email,e=M.password}),a.value!==""&&d.value!==""&&a.value===c&&d.value===e?(h.classList.add("active"),p.classList.add("active"),p.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" 
        height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" 
        stroke-linecap="round" stroke-linejoin="round" 
        data-lucide="circle-check" 
        class="lucide lucide-circle-check w-[22px]">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
      <p class="text-[17px]">Success your account</p>
    `,h.style.backgroundColor="#00bb53"):(h.classList.add("active"),p.classList.add("active"),p.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="24"
        height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" 
        stroke-linejoin="round" data-lucide="circle-x" 
        class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10">
        </circle><path d="m15 9-6 6"></path>
        <path d="m9 9 6 6"></path>
      </svg>
      <p class="text-[17px]">Please enter the data</p>
    `,h.style.backgroundColor="#f44336"),setTimeout(()=>{h.classList.remove("active"),p.classList.remove("active")},1500)}let ha=document.querySelector(".form__signIn"),y=document.getElementById("email_2"),m=document.getElementById("password_2"),ya=ha.querySelector(".submit");va();function NH(){ha.addEventListener("submit",a=>{a.preventDefault(),y.value!==""&&m.value!==""&&ma(),xa(y,m)})}function ma(){let a=JSON.parse(localStorage.getItem("account"))||[];Array.isArray(a)||(a=[]);let d=a.find(h=>h.email===y.value&&h.password===m.value);d&&(ya.innerHTML="Loading...",setTimeout(()=>{localStorage.setItem("loggedInUser",JSON.stringify(d)),window.location.reload()},1e3))}let Ha=document.querySelectorAll(".close__form"),ga=document.querySelector(".sign-account"),da=document.getElementById("form__validation");function ua(){da.classList.add("active")}function Va(){da.classList.remove("active")}ga.addEventListener("click",()=>ua());Ha.forEach(a=>{a.addEventListener("click",()=>Va())});function WH(){let a=JSON.parse(localStorage.getItem("products"))||[],d=document.querySelectorAll(".quantity"),h=document.querySelectorAll(".total-product span"),p=document.querySelector(".sub-total"),t=0;h.forEach((c,e)=>{let M=+d[e].innerText,r=a[e].price,o=M*r;t+=o,c.innerText=`${o}`,p.innerText=`$${t.toFixed(2)}`})}function XH(){let a=document.querySelector(".delivery"),d=document.querySelector(".sub-total"),h=document.querySelector(".total"),p=document.querySelector(".header__icons .cart"),t=0;t=+d.innerText.replace("$","")+ +a.innerText.replace("$",""),h.innerText=`$${t.toFixed(2)}`,p.innerText=`$${t.toFixed(2)}`,localStorage.setItem("cartTotal",JSON.stringify({subTotal:d.innerText.replace("$",""),total:t.toFixed(2),delivery:a.innerText.replace("$","")}))}function _H(){let a=document.querySelector(".header__icons .cart"),d=JSON.parse(localStorage.getItem("products"))||[],h=0;d?(d.map(p=>{let t=p.quantity*p.price;h+=t}),a.innerText=`$${h.toFixed(2)}`):a.innerText="$0.00"}function $H(){let a=document.querySelector(".header__icons span"),d=JSON.parse(localStorage.getItem("products"))||[];d&&(a.textContent=d.length)}/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=([a,d,h])=>{const p=document.createElementNS("http://www.w3.org/2000/svg",a);return Object.keys(d).forEach(t=>{p.setAttribute(t,String(d[t]))}),h!=null&&h.length&&h.forEach(t=>{const c=ca(t);p.appendChild(c)}),p},wa=(a,d={})=>{const h="svg",p={...pa,...d};return ca([h,p,a])};/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=a=>Array.from(a.attributes).reduce((d,h)=>(d[h.name]=h.value,d),{}),Aa=a=>typeof a=="string"?a:!a||!a.class?"":a.class&&typeof a.class=="string"?a.class.split(" "):a.class&&Array.isArray(a.class)?a.class:"",La=a=>a.flatMap(Aa).map(h=>h.trim()).filter(Boolean).filter((h,p,t)=>t.indexOf(h)===p).join(" "),Sa=a=>a.replace(/(\w)(\w*)(_|-|\s*)/g,(d,h,p)=>h.toUpperCase()+p.toLowerCase()),g=(a,{nameAttr:d,icons:h,attrs:p})=>{var n;const t=a.getAttribute(d);if(t==null)return;const c=Sa(t),e=h[c];if(!e)return console.warn(`${a.outerHTML} icon name was not found in the provided icons object.`);const M=Ca(a),r={...pa,"data-lucide":t,...p,...M},o=La(["lucide",`lucide-${t}`,M,p]);o&&Object.assign(r,{class:o});const s=wa(e,r);return(n=a.parentNode)==null?void 0:n.replaceChild(s,a)};/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 7v9"}],["path",{d:"m14 12 4 4 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 16V7"}],["path",{d:"m14 11 4-4 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=[["path",{d:"M21 14h-5"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"}],["path",{d:"M4.5 13h6"}],["path",{d:"m3 16 4.5-9 4.5 9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["path",{d:"m12 15 5 6H7Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=[["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=[["path",{d:"M17 12H7"}],["path",{d:"M19 18H5"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=[["path",{d:"M3 12h18"}],["path",{d:"M3 18h18"}],["path",{d:"M3 6h18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=[["path",{d:"M15 12H3"}],["path",{d:"M17 18H3"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=[["path",{d:"M21 12H9"}],["path",{d:"M21 18H7"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=[["path",{d:"M22 17h-3"}],["path",{d:"M22 7h-5"}],["path",{d:"M5 17H2"}],["path",{d:"M7 7H2"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=[["path",{d:"M10 10H6"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"}],["path",{d:"M8 8v4"}],["path",{d:"M9 18h6"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68"}],["path",{d:"M18 22H6"}],["path",{d:"M9 2h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M12 22V8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}],["circle",{cx:"12",cy:"5",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h.01"}],["path",{d:"M10 8h.01"}],["path",{d:"M14 8h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14.31 8 5.74 9.94"}],["path",{d:"M9.69 8h11.48"}],["path",{d:"m7.38 12 5.74-9.94"}],["path",{d:"M9.69 16 3.95 6.06"}],["path",{d:"M14.31 16H2.83"}],["path",{d:"m16.62 12-5.74 9.94"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M4 4v16h16"}],["path",{d:"m4 20 7-7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M9 12h.01"}],["path",{d:"M15 12h.01"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"M10 10.01h.01"}],["path",{d:"M10 14.01h.01"}],["path",{d:"M14 10.01h.01"}],["path",{d:"M14 14.01h.01"}],["path",{d:"M18 6v11.5"}],["path",{d:"M6 6v12"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M10 4 8 6"}],["path",{d:"M17 19v2"}],["path",{d:"M2 12h20"}],["path",{d:"M7 19v2"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"}],["path",{d:"m11 7-3 5h4l-3 5"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M10 9v6"}],["path",{d:"M13.5 7H16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5"}],["path",{d:"M22 11v2"}],["path",{d:"M6.5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5"}],["path",{d:"M7 12h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"M10 17h.01"}],["path",{d:"M10 7v6"}],["path",{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M22 11v2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=[["path",{d:"M13 13v5"}],["path",{d:"M17 11.47V8"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"}],["path",{d:"M9 14.6V18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"}],["circle",{cx:"18",cy:"8",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6"}],["circle",{cx:"20",cy:"16",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1"}],["path",{d:"m22 15-3-3 3-3"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1"}],["path",{d:"m2 9 3 3-3 3"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1"}],["path",{d:"m9 22 3-3 3 3"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1"}],["path",{d:"m15 2-3 3-3-3"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=[["path",{d:"M10 10h4"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"}],["path",{d:"M 22 16 L 2 16"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=[["circle",{cx:"9",cy:"9",r:"7"}],["circle",{cx:"15",cy:"15",r:"7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=[["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M12 17h1.5"}],["path",{d:"M12 22h1.5"}],["path",{d:"M12 2h1.5"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5"}],["path",{d:"M20 14v3h-2.5"}],["path",{d:"M20 8.5V10"}],["path",{d:"M4 10V8.5"}],["path",{d:"M4 19.5V14"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3 3 3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=[["path",{d:"m19 3 1 1"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"}],["circle",{cx:"14",cy:"8",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=[["path",{d:"M10 2v8l3-3 3 3V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=[["path",{d:"M12 21V7"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=[["path",{d:"M12 7v14"}],["path",{d:"M16 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}],["path",{d:"M6 12h2"}],["path",{d:"M6 8h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=[["path",{d:"M12 7v6"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 11h8"}],["path",{d:"M8 7h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=[["path",{d:"M10 13h4"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=[["path",{d:"M12 13V7"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3-3 3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=[["path",{d:"M15 13a3 3 0 1 0-6 0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=[["path",{d:"m14.5 7-5 5"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9.5 7 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=[["path",{d:"M12 6V2H8"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"}],["path",{d:"M2 12h2"}],["path",{d:"M9 11v2"}],["path",{d:"M15 11v2"}],["path",{d:"M20 12h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M22 22 2 2"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"}],["path",{d:"M9 13v2"}],["path",{d:"M9.67 4H12v2.33"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=[["path",{d:"M16 3h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-2"}],["path",{d:"M8 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2"}],["circle",{cx:"16",cy:"13",r:".5"}],["circle",{cx:"18",cy:"3",r:".5"}],["circle",{cx:"20",cy:"21",r:".5"}],["circle",{cx:"20",cy:"8",r:".5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m15.7 10.4-.9.4"}],["path",{d:"m9.2 13.2-.9.4"}],["path",{d:"m13.6 15.7-.4-.9"}],["path",{d:"m10.8 9.2-.4-.9"}],["path",{d:"m15.7 13.5-.9-.4"}],["path",{d:"m9.2 10.9-.9-.4"}],["path",{d:"m10.5 15.7.4-.9"}],["path",{d:"m13.1 9.2.4-.9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=[["path",{d:"M10 20v2"}],["path",{d:"M14 20v2"}],["path",{d:"M18 20v2"}],["path",{d:"M21 20H3"}],["path",{d:"M6 20v2"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=[["path",{d:"M12 11v4"}],["path",{d:"M14 13h-4"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M18 6v14"}],["path",{d:"M6 6v14"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M6 13H2"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"}],["path",{d:"M21 21v-2h-4"}],["path",{d:"M3 5h4V3"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h.01"}],["path",{d:"M12 4h.01"}],["path",{d:"M17 4h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=[["path",{d:"M11 14h1v4"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=[["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 14v8"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=[["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 22v-8"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m16 20 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m9 16 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.3V14"}],["circle",{cx:"16",cy:"16",r:"6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=[["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"M16 2v4"}],["path",{d:"m16.9 15.2-.4-.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"}],["path",{d:"M3 10h18"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"}],["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=[["path",{d:"M16 19h6"}],["path",{d:"M16 2v4"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}],["path",{d:"M12 14v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"M16 19h6"}],["path",{d:"M19 16v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=[["path",{d:"M16 2v4"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"}],["path",{d:"m22 22-1.875-1.875"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=[["path",{d:"M11 10v4h4"}],["path",{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M16 2v4"}],["path",{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5"}],["path",{d:"M21 22v-4h-4"}],["path",{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"}],["path",{d:"M3 10h4"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m17 22 5-5"}],["path",{d:"m17 17 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m14 14-4 4"}],["path",{d:"m10 14 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"}],["path",{d:"M14 16.5V14"}],["path",{d:"M14 6.5v1.843"}],["path",{d:"M10 10v7.5"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"}],["path",{d:"M14 6.5v10"}],["path",{d:"M10 7.5v10"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5"}],["path",{d:"M17 11h-.5"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7 11h4"}],["path",{d:"M7 15h2.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=[["path",{d:"M12 22v-4"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"}],["circle",{cx:"8",cy:"19",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}],["path",{d:"M7 9h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h3"}],["path",{d:"M7 6h12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h12"}],["path",{d:"M7 6h3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=[["path",{d:"M11 13v4"}],["path",{d:"M15 5v4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=[["path",{d:"M13 17V9"}],["path",{d:"M18 17v-3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17V5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=[["path",{d:"M11 13H7"}],["path",{d:"M19 9h-4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=[["path",{d:"M10 6h8"}],["path",{d:"M12 16h6"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 11h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"m19 9-5 5-4-4-3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"m13.11 7.664 1.78 2.672"}],["path",{d:"m14.162 12.788-3.324 1.424"}],["path",{d:"m20 4-6.06 1.515"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["circle",{cx:"12",cy:"6",r:"2"}],["circle",{cx:"16",cy:"12",r:"2"}],["circle",{cx:"9",cy:"15",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=[["path",{d:"M12 20V10"}],["path",{d:"M18 20v-4"}],["path",{d:"M6 20V4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=[["path",{d:"M12 16v5"}],["path",{d:"M16 14v7"}],["path",{d:"M20 10v11"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"}],["path",{d:"M4 18v3"}],["path",{d:"M8 14v7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=[["path",{d:"M20 6 9 17l-5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=[["path",{d:"m6 9 6 6 6-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=[["path",{d:"m15 18-6-6 6-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=[["path",{d:"m18 15-6-6-6 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=[["path",{d:"M10 9h4"}],["path",{d:"M12 7v5"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 12H8"}],["path",{d:"m12 8-4 4 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 8v8"}],["path",{d:"M16 12H8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M22 2 2 22"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=[["circle",{cx:"12",cy:"12",r:"6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=[["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"}],["path",{d:"m17 10 4 4-4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}],["path",{d:"M12 17v-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 12 16.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 7.5 12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=[["path",{d:"M12 6v6l4 2"}],["path",{d:"M16 21.16a10 10 0 1 1 5-13.516"}],["path",{d:"M20 11.5v6"}],["path",{d:"M20 21.5h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=[["path",{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227"}],["path",{d:"M12 6v6l2 1"}],["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M18 14v8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=[["path",{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338"}],["path",{d:"M12 6v6l1.562.781"}],["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M18 22v-8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 6v6l4 2"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=[["path",{d:"M12 12v4"}],["path",{d:"M12 20h.01"}],["path",{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M11 20v2"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M7 19v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["path",{d:"M16.17 7.83 2 22"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"}],["path",{d:"m7.83 7.83 8.34 8.34"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 3v18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7.5 3v18"}],["path",{d:"M12 3v18"}],["path",{d:"M16.5 3v18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"m7 21 3-3-3-3"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"M16 2v2"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"12",r:"4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=[["polyline",{points:"15 10 20 15 15 20"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=[["polyline",{points:"14 15 9 20 4 15"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["polyline",{points:"14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=[["polyline",{points:"10 15 15 20 20 15"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["polyline",{points:"10 9 15 4 20 9"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["polyline",{points:"9 14 4 9 9 4"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["polyline",{points:"15 14 20 9 15 4"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M2 6h4"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"}],["path",{d:"m12 9 6 6"}],["path",{d:"m18 9-6 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["circle",{cx:"12",cy:"4",r:"2"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M12 8v8"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3"}],["path",{d:"m2 2 20 20"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=[["path",{d:"m10 16 1.5 1.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=[["path",{d:"M2 8h20"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 16h12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["path",{d:"M11.25 16.25h1.5L12 17z"}],["path",{d:"M16 14v.5"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"}],["path",{d:"M8 14v.5"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}],["path",{d:"M14 12v.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14"}],["path",{d:"M2 20h3"}],["path",{d:"M13 20h9"}],["path",{d:"M10 12v.01"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=[["circle",{cx:"12.1",cy:"12.1",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=[["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0"}],["path",{d:"m21 21-2.16-3.84"}],["path",{d:"m3 21 8.02-14.26"}],["circle",{cx:"12",cy:"5",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"}],["path",{d:"M18 6h4"}],["path",{d:"m5 10-2 8"}],["path",{d:"m7 18 2-8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["path",{d:"M14.4 14.4 9.6 9.6"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"}],["path",{d:"m21.5 21.5-1.4-1.4"}],["path",{d:"M3.9 3.9 2.5 2.5"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a7 7 0 1 0 10 10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}],["path",{d:"M22 21H7"}],["path",{d:"m5 11 9 9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"}],["path",{d:"M6 8v1"}],["path",{d:"M10 8v1"}],["path",{d:"M14 8v1"}],["path",{d:"M18 8v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=[["path",{d:"m15 15 6 6"}],["path",{d:"m15 9 6-6"}],["path",{d:"M21 16.2V21h-4.8"}],["path",{d:"M21 7.8V3h-4.8"}],["path",{d:"M3 16.2V21h4.8"}],["path",{d:"m3 21 6-6"}],["path",{d:"M3 7.8V3h4.8"}],["path",{d:"M9 9 3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=[["path",{d:"m15 18-.722-3.25"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0"}],["path",{d:"m20 15-1.726-2.05"}],["path",{d:"m4 15 1.726-2.05"}],["path",{d:"m9 18 .722-3.25"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"}],["path",{d:"M16 8 2 22"}],["path",{d:"M17.5 15H9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=[["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}],["path",{d:"M10 7V6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"}],["circle",{cx:"10",cy:"20",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"3",cy:"17",r:"1"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 18 4-4"}],["path",{d:"M8 10v8h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"}],["path",{d:"M7 17v5"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-2"}],["path",{d:"M12 18v-4"}],["path",{d:"M16 18v-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-1"}],["path",{d:"M12 18v-6"}],["path",{d:"M16 18v-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3 15 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"8",cy:"16",r:"6"}],["path",{d:"M9.5 17.5 8 16.25V14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m5 12-3 3 3 3"}],["path",{d:"m9 18 3-3-3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=[["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3.2 12.9-.9-.4"}],["path",{d:"m3.2 15.1-.9.4"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"}],["path",{d:"m4.9 11.2-.4-.9"}],["path",{d:"m4.9 16.8-.4.9"}],["path",{d:"m7.5 10.3-.4.9"}],["path",{d:"m7.5 17.7-.4-.9"}],["path",{d:"m9.7 12.5-.9.4"}],["path",{d:"m9.7 15.5-.9-.4"}],["circle",{cx:"6",cy:"14",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"10",cy:"12",r:"2"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=[["path",{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"}],["path",{d:"M8 18v-7.7L16 9v7"}],["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"}],["path",{d:"m5 11-3 3"}],["path",{d:"m5 17-3-3h10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M8 18h1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=[["path",{d:"M12 17h.01"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.3 16.3 15 18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 18-1.5-1.5"}],["circle",{cx:"5",cy:"14",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 12h8"}],["path",{d:"M10 11v2"}],["path",{d:"M8 17h8"}],["path",{d:"M14 16v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=[["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M5 12v6"}],["path",{d:"M4 18h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M12 12v6"}],["path",{d:"M11 18h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 18a3 3 0 1 0-6 0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["circle",{cx:"12",cy:"13",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 15h.01"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3"}],["path",{d:"M15 12a5 5 0 0 1 0 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=[["path",{d:"M11 11a5 5 0 0 1 0 6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 12.5-5 5"}],["path",{d:"m3 12.5 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14.5 12.5-5 5"}],["path",{d:"m9.5 12.5 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}],["path",{d:"M4 22V4"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=[["path",{d:"M17 22V2L7 7l10 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=[["path",{d:"M7 22V2l10 5-10 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=[["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"}],["path",{d:"M6.453 15H15"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{d:"M6.453 15h11.094"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2"}],["path",{d:"M5 15h14"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"}],["path",{d:"M12 7.5V9"}],["path",{d:"M7.5 12H9"}],["path",{d:"M16.5 12H15"}],["path",{d:"M12 16.5V15"}],["path",{d:"m8 8 1.88 1.88"}],["path",{d:"M14.12 9.88 16 8"}],["path",{d:"m8 16 1.88-1.88"}],["path",{d:"M14.12 14.12 16 16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=[["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["path",{d:"M16 14v2l1 1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=[["path",{d:"M10 10.5 8 13l2 2.5"}],["path",{d:"m14 10.5 2 2.5-2 2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"m20.7 16.8 1-.4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.9-1.9"}],["circle",{cx:"17",cy:"17",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}],["path",{d:"m8 16 3-3-3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=[["polyline",{points:"15 17 20 12 15 7"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}],["path",{d:"M2 12h8.5"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"M16 19h6"}],["path",{d:"M19 22v-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 16 5 5"}],["path",{d:"m16 21 5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"m11.9 12.1 4.514-4.514"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"}],["path",{d:"m6 16 2 2"}],["path",{d:"M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"}],["path",{d:"m8.5 16.5-1-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 16 6 6"}],["circle",{cx:"16",cy:"9",r:"2.9"}],["circle",{cx:"6",cy:"5",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 15 6 6"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 13 6 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"M12 3V2"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2"}],["path",{d:"M4 10h16"}],["path",{d:"M5 10a7 7 0 0 1 14 0"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}],["path",{d:"m21 3 1 11h-2"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}],["path",{d:"M3 4h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["path",{d:"M12 18V6"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3"}],["path",{d:"M21 10v8"}],["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["path",{d:"M21 14h-1.343"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M11 8c2-3-2-3 0-6"}],["path",{d:"M15.5 8c2-3-2-3 0-6"}],["path",{d:"M6 10h.01"}],["path",{d:"M6 14h.01"}],["path",{d:"M10 16v-4"}],["path",{d:"M14 16v-4"}],["path",{d:"M18 16v-4"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}],["path",{d:"M5 20v2"}],["path",{d:"M19 20v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=[["path",{d:"M12 6v4"}],["path",{d:"M14 14h-4"}],["path",{d:"M14 18h-4"}],["path",{d:"M14 8h-4"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M10 22v-6.57"}],["path",{d:"M12 11h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M14 15.43V22"}],["path",{d:"M15 16a5 5 0 0 0-6 0"}],["path",{d:"M16 11h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 7h.01"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"M10 12V8.964"}],["path",{d:"M14 12V8.964"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"}],["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M15 6h6"}],["path",{d:"M18 3v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=[["path",{d:"M9.5 13.866a4 4 0 0 1 5 .01"}],["path",{d:"M12 17h.01"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["path",{d:"M7 10.754a8 8 0 0 1 10 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=[["path",{d:"M16 10h2"}],["path",{d:"M16 14h2"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0"}],["circle",{cx:"9",cy:"11",r:"2"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19 3 3v-5.5"}],["path",{d:"m17 22 3-3"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["path",{d:"m11 16-5 5"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3-3 3 3"}],["path",{d:"M17 22v-5.5"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=[["path",{d:"M16 3h5v5"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2"}],["path",{d:"M21 12v3"}],["path",{d:"m21 3-5 5"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"}],["path",{d:"M9 3h3"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"}],["circle",{cx:"12",cy:"8",r:"2"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m7 8-4 4 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m3 8 4 4-4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}],["polyline",{points:"16 14 20 18 16 22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}],["polyline",{points:"8 22 4 18 8 14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"}],["path",{d:"m14 7 3 3"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["path",{d:"M 20 4 A2 2 0 0 1 22 6"}],["path",{d:"M 22 6 L 22 16.41"}],["path",{d:"M 7 16 L 16 16"}],["path",{d:"M 9.69 4 L 20 4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M6 8h.01"}],["path",{d:"M8 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["path",{d:"M12 2v5"}],["path",{d:"M6 7h12l4 9H2l4-9Z"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z"}],["path",{d:"M9.5 6.5 4 12l3 6"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["path",{d:"M9 2h6l3 7H6l3-7Z"}],["path",{d:"M12 9v13"}],["path",{d:"M9 22h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["path",{d:"M11 13h6l3 7H8l3-7Z"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["path",{d:"M11 4h6l3 7H8l3-7Z"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=[["path",{d:"M8 2h8l4 10H4L8 2Z"}],["path",{d:"M12 12v6"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["path",{d:"M2 20h20"}],["path",{d:"m9 10 2 2 4-4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M15 12h6"}],["path",{d:"M15 6h6"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"}],["path",{d:"M3 18h18"}],["path",{d:"M4 11h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}],["path",{d:"M6 12h4"}],["path",{d:"M14 12h2v8"}],["path",{d:"M6 20h4"}],["path",{d:"M14 20h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=[["path",{d:"M11 18H3"}],["path",{d:"m15 18 2 2 4-4"}],["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=[["path",{d:"m3 10 2.5-2.5L3 5"}],["path",{d:"m3 19 2.5-2.5L3 14"}],["path",{d:"M10 6h11"}],["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=[["path",{d:"M10 18h4"}],["path",{d:"M11 6H3"}],["path",{d:"M15 6h6"}],["path",{d:"M18 9V3"}],["path",{d:"M7 12h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=[["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}],["path",{d:"M10 6h11"}],["path",{d:"M4 10h2"}],["path",{d:"M4 6h1v4"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=[["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}],["path",{d:"M13 6h8"}],["path",{d:"M3 12h1"}],["path",{d:"M3 18h1"}],["path",{d:"M3 6h1"}],["path",{d:"M8 12h1"}],["path",{d:"M8 18h1"}],["path",{d:"M8 6h1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m9 10 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m16 18 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"}],["path",{d:"M18 22v-3"}],["circle",{cx:"10",cy:"10",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}],["path",{d:"M19 15v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m21.5 15.5-5 5"}],["path",{d:"m21.5 20.5-5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=[["path",{d:"m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12"}],["path",{d:"M15 5.764V12"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}],["path",{d:"M9 3.236v15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=[["path",{d:"m14 6 4 4"}],["path",{d:"M17 3h4v4"}],["path",{d:"m21 3-7.75 7.75"}],["circle",{cx:"9",cy:"15",r:"6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=[["path",{d:"M16 3h5v5"}],["path",{d:"m21 3-6.75 6.75"}],["circle",{cx:"10",cy:"14",r:"6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=[["polyline",{points:"15 3 21 3 21 9"}],["polyline",{points:"9 21 3 21 3 15"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14"}],["path",{d:"M21 15.34V6l-7.31 2.03"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=[["path",{d:"M10 7.5 8 10l2 2.5"}],["path",{d:"m14 7.5 2 2.5-2 2.5"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=[["path",{d:"M10 17H7l-4 4v-7"}],["path",{d:"M14 17h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}],["path",{d:"M9 17h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}],["circle",{cx:"18",cy:"6",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=[["path",{d:"M19 15v-2a2 2 0 1 0-4 0v2"}],["path",{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5"}],["rect",{x:"13",y:"15",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M16 10h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 7-3 3 3 3"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}],["path",{d:"M16 3h5v5"}],["path",{d:"m16 8 5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M13 8H7"}],["path",{d:"M17 12H7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"}],["circle",{cx:"16",cy:"7",r:"5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=[["path",{d:"M18 12h2"}],["path",{d:"M18 16h2"}],["path",{d:"M18 20h2"}],["path",{d:"M18 4h2"}],["path",{d:"M18 8h2"}],["path",{d:"M4 12h2"}],["path",{d:"M4 16h2"}],["path",{d:"M4 20h2"}],["path",{d:"M4 4h2"}],["path",{d:"M4 8h2"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=[["polyline",{points:"4 14 10 14 10 20"}],["polyline",{points:"20 10 14 10 14 4"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=[["path",{d:"M5 12h14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=[["path",{d:"M12 17v4"}],["path",{d:"m15.2 4.9-.9-.4"}],["path",{d:"m15.2 7.1-.9.4"}],["path",{d:"m16.9 3.2-.4-.9"}],["path",{d:"m16.9 8.8-.4.9"}],["path",{d:"m19.5 2.3-.4.9"}],["path",{d:"m19.5 9.7-.4-.9"}],["path",{d:"m21.7 4.5-.9.4"}],["path",{d:"m21.7 7.5-.9-.4"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["path",{d:"M8 21h8"}],["circle",{cx:"18",cy:"6",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=[["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=[["path",{d:"M12 6v.343"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902"}],["path",{d:"M22 22 2 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"}],["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"m11.8 11.8 8.4 8.4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=[["path",{d:"M19 13v6h-6"}],["path",{d:"M5 11V5h6"}],["path",{d:"m5 5 14 14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=[["path",{d:"M11 19H5v-6"}],["path",{d:"M13 5h6v6"}],["path",{d:"M19 5 5 19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"M2 12h20"}],["path",{d:"m6 8-4 4 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=[["path",{d:"M12 2v20"}],["path",{d:"m8 18 4 4 4-4"}],["path",{d:"m8 6 4-4 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=[["path",{d:"M12 2v20"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m19 9 3 3-3 3"}],["path",{d:"M2 12h20"}],["path",{d:"m5 9-3 3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=[["path",{d:"M15 18h-5"}],["path",{d:"M18 14h-8"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"}],["rect",{x:"10",y:"6",width:"8",height:"4",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=[["path",{d:"M12 2v10"}],["path",{d:"m9 4 6 4"}],["path",{d:"m9 8 6-4"}],["circle",{cx:"12",cy:"17",r:"5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M15 2v20"}],["path",{d:"M15 7h5"}],["path",{d:"M15 12h5"}],["path",{d:"M15 17h5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"}],["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M9.5 8h5"}],["path",{d:"M9.5 12H16"}],["path",{d:"M9.5 16H14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M16 2v20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{d:"M20 12v2"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1"}],["path",{d:"M13 22h-2"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2"}],["path",{d:"M4 14v-2"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"m15 9-6 6"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=[["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"}],["path",{d:"M12 3v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v4"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=[["path",{d:"m14.622 17.897-10.68-2.913"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m15 8-3 3-3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m9 10 3-3 3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m8 9 3 3-3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m10 15-3-3 3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 16 3-3 3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m15 14-3 3-3-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M9 15h12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h12"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=[["path",{d:"M13.234 20.252 21 12.3"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=[["path",{d:"M11 15h2"}],["path",{d:"M12 12v3"}],["path",{d:"M12 19v3"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"}],["path",{d:"M9 9a3 3 0 1 1 6 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"}],["path",{d:"m2.3 2.3 7.286 7.286"}],["circle",{cx:"11",cy:"11",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}],["path",{d:"m15 5 3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m15 5 4 4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=[["path",{d:"M20 11H4"}],["path",{d:"M20 7H4"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=[["polyline",{points:"18 2 22 6 18 10"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=[["polyline",{points:"16 2 16 8 22 8"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=[["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=[["polyline",{points:"22 8 22 2 16 2"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=[["path",{d:"M2 10h6V4"}],["path",{d:"m2 4 6 6"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1"}],["path",{d:"M16 11h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=[["path",{d:"M14 3v11"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9"}],["path",{d:"M18 3v11"}],["path",{d:"M22 18H2l4-4"}],["path",{d:"m6 22-4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=[["path",{d:"M10 3v11"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8"}],["path",{d:"M14 3v11"}],["path",{d:"m18 14 4 4H2"}],["path",{d:"m22 18-4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=[["path",{d:"M12 17v5"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"}],["path",{d:"m2 2 20 20"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=[["path",{d:"M12 17v5"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=[["path",{d:"m2 22 1-1h3l9-9"}],["path",{d:"M3 21v-3l9-9"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=[["path",{d:"m12 14-1 1"}],["path",{d:"m13.75 18.25-1.25 1.42"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=[["polygon",{points:"6 3 20 12 6 21 6 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}],["polyline",{points:"8 10 12 14 16 10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M12 9v11"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=[["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=[["path",{d:"M12 12h.01"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=[["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M13.236 18a3 3 0 0 0-2.2-5"}],["path",{d:"M16 9h.01"}],["path",{d:"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"}],["path",{d:"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M12 6.5v11"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 12h5"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 7h8"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8"}],["path",{d:"M8 11h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"m12 10 3-3"}],["path",{d:"m9 7 3 3v7.5"}],["path",{d:"M9 11h6"}],["path",{d:"M9 15h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 13h5"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 17h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 15h5"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M10 17V7h5"}],["path",{d:"M10 11h4"}],["path",{d:"M8 15h5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=[["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=[["polyline",{points:"7 17 2 12 7 7"}],["polyline",{points:"12 17 7 12 12 7"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=[["polyline",{points:"9 17 4 12 9 7"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"}],["path",{d:"m12 18 2.57-3.5"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009"}],["path",{d:"M9.35 14.53 12 11.22"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6"}],["path",{d:"m15 2-3 3 3 3"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 8 3-3-3-3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 7.5H3"}],["path",{d:"M21 12H3"}],["path",{d:"M21 16.5H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=[["path",{d:"m20 19.5-5.5 1.2"}],["path",{d:"M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2"}],["path",{d:"m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2"}],["path",{d:"M20 10 4 13.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7"}],["path",{d:"M14 8h1"}],["path",{d:"M17 21v-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"}],["path",{d:"M29.5 11.5s5 5 4 5"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11"}],["path",{d:"M5.293 18.707 11 13"}],["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M14 15H9v-5"}],["path",{d:"M16 3h5v5"}],["path",{d:"M21 3 9 15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=[["path",{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M17 8V7"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 17h.01"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=[["path",{d:"m13 13.5 2-2.5-2-2.5"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M9 8.5 7 11l2 2.5"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"}],["path",{d:"M6 12h16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=[["line",{x1:"12",x2:"12",y1:"3",y2:"21"}],["polyline",{points:"8 8 4 12 8 16"}],["polyline",{points:"16 16 20 12 16 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=[["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["polyline",{points:"8 8 12 4 16 8"}],["polyline",{points:"16 16 12 20 8 16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{points:"16 6 12 2 8 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m4.243 5.21 14.39 12.472"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 22V2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M6.376 18.91a6 6 0 0 1 11.249.003"}],["circle",{cx:"12",cy:"11",r:"4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"m9.5 9.5 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M12 10.189V14"}],["path",{d:"M12 2v3"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M11 12h.01"}],["path",{d:"M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1"}],["path",{d:"M14 2a3.276 3.276 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8"}],["path",{d:"M14 8a8.5 8.5 0 0 1 0 8"}],["path",{d:"M16 16c2 0 4.5-4 4-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M12 22v-7l-2-2"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"}],["path",{d:"m14 14-2 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M2 20h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"}],["path",{d:"M3 21h18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M22 2 2 22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{d:"m3 21 9-9"}],["path",{d:"M9 21H3v-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21 21-9-9"}],["path",{d:"M21 15v6h-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}],["path",{d:"m3 3 9 9"}],["path",{d:"M3 9V3h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"M14 21h1"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["path",{d:"M7 12h2l2 5 2-10h4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["path",{d:"M21 11a8 8 0 0 0-8-8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M18 13h.01"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["path",{d:"M5 22h14"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.9 4.9 1.4 1.4"}],["path",{d:"m17.7 17.7 1.4 1.4"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.3 17.7-1.4 1.4"}],["path",{d:"m19.1 4.9-1.4 1.4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M10 21v-1"}],["path",{d:"M10 4V3"}],["path",{d:"M10 9a3 3 0 0 0 0 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6 1.5-3H22"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h1"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}],["path",{d:"M 7 17h.01"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M12 21v-6"}],["path",{d:"M12 9V3"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"M12 15V9"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M14 14v2"}],["path",{d:"M14 20v2"}],["path",{d:"M14 2v2"}],["path",{d:"M14 8v2"}],["path",{d:"M2 15h8"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}],["path",{d:"M2 9h8"}],["path",{d:"M22 15h-4"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["path",{d:"M22 9h-4"}],["path",{d:"M5 3v18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M16 6H3"}],["path",{d:"M21 12h.01"}],["path",{d:"M21 18h.01"}],["path",{d:"M21 6h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M14 10h2"}],["path",{d:"M15 22v-8"}],["path",{d:"M15 2v4"}],["path",{d:"M2 10h2"}],["path",{d:"M20 10h2"}],["path",{d:"M3 19h18"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"}],["path",{d:"M8 10h2"}],["path",{d:"M9 22v-8"}],["path",{d:"M9 2v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M4 4v16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"}],["path",{d:"m13.56 11.747 4.332-.924"}],["path",{d:"m16 21-3.105-6.21"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"}],["path",{d:"m6.158 8.633 1.114 4.456"}],["path",{d:"m8 21 3.105-6.21"}],["circle",{cx:"12",cy:"13",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M9 7v10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M21 6H3"}],["path",{d:"M10 12H3"}],["path",{d:"M10 18H3"}],["circle",{cx:"17",cy:"15",r:"3"}],["path",{d:"m21 19-1.9-1.9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M17 6.1H3"}],["path",{d:"M21 12.1H3"}],["path",{d:"M15.1 18H3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"M10.585 15H10"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 9h.01"}],["path",{d:"m15 9-6 6"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}],["path",{d:"m9.5 9.5 5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}],["path",{d:"m12 13.5 3.75.5"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"8",cy:"12",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"16",cy:"12",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"}],["path",{d:"M2 14h12"}],["path",{d:"M22 14h-2"}],["path",{d:"M12 20v-6"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"}],["path",{d:"M16 18h-5"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"}],["path",{d:"M4 11V4"}],["path",{d:"M7 15h.01"}],["path",{d:"M8 10.1V4"}],["circle",{cx:"18",cy:"18",r:"2"}],["circle",{cx:"7",cy:"15",r:"5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M12 16v6"}],["path",{d:"M14 20h-4"}],["path",{d:"M18 2h4v4"}],["path",{d:"m2 2 7.17 7.17"}],["path",{d:"M2 5.355V2h3.357"}],["path",{d:"m22 2-7.17 7.17"}],["path",{d:"M8 5 5 8"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{points:"16 17 22 17 22 11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=[["path",{d:"M14.828 14.828 21 21"}],["path",{d:"M21 16v5h-5"}],["path",{d:"m21 3-9 9-4-4-6 6"}],["path",{d:"M21 8V3h-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=[["path",{d:"M10.17 4.193a2 2 0 0 1 3.666.013"}],["path",{d:"M14 21h2"}],["path",{d:"m15.874 7.743 1 1.732"}],["path",{d:"m18.849 12.952 1 1.732"}],["path",{d:"M21.824 18.18a2 2 0 0 1-1.835 2.824"}],["path",{d:"M4.024 21a2 2 0 0 1-1.839-2.839"}],["path",{d:"m5.136 12.952-1 1.732"}],["path",{d:"M8 21h2"}],["path",{d:"m8.102 7.743-1 1.732"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2"}],["polyline",{points:"17 2 12 7 7 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=[["polyline",{points:"4 7 4 4 20 4 20 7"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13"}],["path",{d:"M3 7v6h6"}],["circle",{cx:"12",cy:"17",r:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["circle",{cx:"12",cy:"10",r:"1"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M6 17v.01"}],["path",{d:"M6 13v.01"}],["path",{d:"M18 17v.01"}],["path",{d:"M18 13v.01"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["polyline",{points:"16 11 18 13 22 9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=[["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m21.7 16.4-.9-.3"}],["path",{d:"m15.2 13.9-.9-.3"}],["path",{d:"m16.6 18.7.3-.9"}],["path",{d:"m19.1 12.2.3-.9"}],["path",{d:"m19.6 18.7-.4-1"}],["path",{d:"m16.8 12.3-.4-1"}],["path",{d:"m14.3 16.6 1-.4"}],["path",{d:"m20.7 13.8 1-.4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"7",r:"4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"m16.9 15.2-.4-.9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"8",r:"5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 7.9 2.7 2.7"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 10.6 2.7-2.7"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 16.1 2.7-2.7"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 13.4 2.7 2.7"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=[["path",{d:"M16 8q6 0 6-6-6 0-6 6"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["path",{d:"M18 11c-1.5 0-2.5.5-3 2"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["path",{d:"M10 20h4"}],["path",{d:"M12 16v6"}],["path",{d:"M17 2h4v4"}],["path",{d:"m21 2-5.46 5.46"}],["circle",{cx:"12",cy:"11",r:"5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"M12 15v7"}],["path",{d:"M9 19h6"}],["circle",{cx:"12",cy:"9",r:"6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["path",{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4"}],["path",{d:"M12 12a12.6 12.6 0 0 1-8.7 5"}],["path",{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5"}],["path",{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"}],["path",{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aH=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tH=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hH=[["path",{d:"M16 9a5 5 0 0 1 .95 2.293"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}],["path",{d:"m2 2 20 20"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dH=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pH=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cH=[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eH=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MH=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rH=[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h.01"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oH=[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nH=[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}],["path",{d:"M6 18h12"}],["path",{d:"M6 14h12"}],["rect",{width:"12",height:"12",x:"6",y:"10"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iH=[["path",{d:"M3 6h3"}],["path",{d:"M17 6h.01"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2"}],["circle",{cx:"12",cy:"13",r:"5"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lH=[["circle",{cx:"12",cy:"12",r:"6"}],["polyline",{points:"12 10 12 12 13 13"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sH=[["path",{d:"M19 5a2 2 0 0 0-2 2v11"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M7 13h10"}],["path",{d:"M7 9h10"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vH=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xH=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yH=[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mH=[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414"}],["path",{d:"m12 6 .6 1"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HH=[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gH=[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uH=[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VH=[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wH=[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CH=[["path",{d:"M12 20h.01"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AH=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LH=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SH=[["path",{d:"M12 20h.01"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fH=[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZH=[["path",{d:"M10 2v8"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"m6 6 4 4 4-4"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kH=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zH=[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PH=[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BH=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FH=[["path",{d:"m19 12-1.5 3"}],["path",{d:"M19.63 18.81 22 20"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qH=[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["polyline",{points:"16 16 14 18 16 20"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DH=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TH=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bH=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RH=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UH=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OH=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IH=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KH=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:fa,AArrowUp:Za,ALargeSmall:ka,Accessibility:za,Activity:Pa,ActivitySquare:T2,AirVent:Ba,Airplay:Fa,AlarmCheck:u,AlarmClock:Da,AlarmClockCheck:u,AlarmClockMinus:V,AlarmClockOff:qa,AlarmClockPlus:w,AlarmMinus:V,AlarmPlus:w,AlarmSmoke:Ta,Album:ba,AlertCircle:K,AlertOctagon:l2,AlertTriangle:R0,AlignCenter:Oa,AlignCenterHorizontal:Ra,AlignCenterVertical:Ua,AlignEndHorizontal:Ia,AlignEndVertical:Ea,AlignHorizontalDistributeCenter:Ga,AlignHorizontalDistributeEnd:Na,AlignHorizontalDistributeStart:Wa,AlignHorizontalJustifyCenter:Xa,AlignHorizontalJustifyEnd:_a,AlignHorizontalJustifyStart:$a,AlignHorizontalSpaceAround:Ka,AlignHorizontalSpaceBetween:Ja,AlignJustify:ja,AlignLeft:Qa,AlignRight:Ya,AlignStartHorizontal:at,AlignStartVertical:tt,AlignVerticalDistributeCenter:ht,AlignVerticalDistributeEnd:dt,AlignVerticalDistributeStart:pt,AlignVerticalJustifyCenter:ct,AlignVerticalJustifyEnd:et,AlignVerticalJustifyStart:Mt,AlignVerticalSpaceAround:rt,AlignVerticalSpaceBetween:ot,Ambulance:nt,Ampersand:it,Ampersands:lt,Amphora:st,Anchor:vt,Angry:xt,Annoyed:yt,Antenna:mt,Anvil:Ht,Aperture:ut,AppWindow:Vt,AppWindowMac:gt,Apple:wt,Archive:Lt,ArchiveRestore:Ct,ArchiveX:At,AreaChart:T,Armchair:St,ArrowBigDown:Zt,ArrowBigDownDash:ft,ArrowBigLeft:zt,ArrowBigLeftDash:kt,ArrowBigRight:Bt,ArrowBigRightDash:Pt,ArrowBigUp:qt,ArrowBigUpDash:Ft,ArrowDown:Nt,ArrowDown01:Dt,ArrowDown10:Tt,ArrowDownAZ:C,ArrowDownAz:C,ArrowDownCircle:J,ArrowDownFromLine:bt,ArrowDownLeft:Ut,ArrowDownLeftFromCircle:Q,ArrowDownLeftFromSquare:I2,ArrowDownLeftSquare:b2,ArrowDownNarrowWide:Rt,ArrowDownRight:Ot,ArrowDownRightFromCircle:Y,ArrowDownRightFromSquare:E2,ArrowDownRightSquare:R2,ArrowDownSquare:U2,ArrowDownToDot:It,ArrowDownToLine:Et,ArrowDownUp:Gt,ArrowDownWideNarrow:A,ArrowDownZA:L,ArrowDownZa:L,ArrowLeft:$t,ArrowLeftCircle:j,ArrowLeftFromLine:Wt,ArrowLeftRight:Xt,ArrowLeftSquare:O2,ArrowLeftToLine:_t,ArrowRight:Qt,ArrowRightCircle:h1,ArrowRightFromLine:Kt,ArrowRightLeft:Jt,ArrowRightSquare:W2,ArrowRightToLine:jt,ArrowUp:rh,ArrowUp01:Yt,ArrowUp10:ah,ArrowUpAZ:S,ArrowUpAz:S,ArrowUpCircle:d1,ArrowUpDown:th,ArrowUpFromDot:hh,ArrowUpFromLine:dh,ArrowUpLeft:ph,ArrowUpLeftFromCircle:a1,ArrowUpLeftFromSquare:G2,ArrowUpLeftSquare:X2,ArrowUpNarrowWide:f,ArrowUpRight:ch,ArrowUpRightFromCircle:t1,ArrowUpRightFromSquare:N2,ArrowUpRightSquare:_2,ArrowUpSquare:$2,ArrowUpToLine:eh,ArrowUpWideNarrow:Mh,ArrowUpZA:Z,ArrowUpZa:Z,ArrowsUpFromLine:oh,Asterisk:nh,AsteriskSquare:K2,AtSign:ih,Atom:lh,AudioLines:sh,AudioWaveform:vh,Award:xh,Axe:yh,Axis3D:k,Axis3d:k,Baby:mh,Backpack:Hh,Badge:qh,BadgeAlert:gh,BadgeCent:uh,BadgeCheck:z,BadgeDollarSign:Vh,BadgeEuro:wh,BadgeHelp:Ch,BadgeIndianRupee:Ah,BadgeInfo:Lh,BadgeJapaneseYen:Sh,BadgeMinus:fh,BadgePercent:Zh,BadgePlus:kh,BadgePoundSterling:zh,BadgeRussianRuble:Fh,BadgeSwissFranc:Ph,BadgeX:Bh,BaggageClaim:Dh,Ban:Th,Banana:bh,Bandage:Rh,Banknote:Uh,BarChart:N,BarChart2:W,BarChart3:E,BarChart4:I,BarChartBig:O,BarChartHorizontal:R,BarChartHorizontalBig:b,Barcode:Oh,Baseline:Ih,Bath:Eh,Battery:Kh,BatteryCharging:Gh,BatteryFull:Nh,BatteryLow:Wh,BatteryMedium:Xh,BatteryPlus:_h,BatteryWarning:$h,Beaker:Jh,Bean:Qh,BeanOff:jh,Bed:t4,BedDouble:Yh,BedSingle:a4,Beef:h4,Beer:p4,BeerOff:d4,Bell:i4,BellDot:c4,BellElectric:e4,BellMinus:M4,BellOff:r4,BellPlus:o4,BellRing:n4,BetweenHorizonalEnd:P,BetweenHorizonalStart:B,BetweenHorizontalEnd:P,BetweenHorizontalStart:B,BetweenVerticalEnd:l4,BetweenVerticalStart:s4,BicepsFlexed:v4,Bike:x4,Binary:y4,Binoculars:m4,Biohazard:H4,Bird:g4,Bitcoin:u4,Blend:V4,Blinds:w4,Blocks:C4,Bluetooth:f4,BluetoothConnected:A4,BluetoothOff:L4,BluetoothSearching:S4,Bold:Z4,Bolt:k4,Bomb:P4,Bone:z4,Book:Y4,BookA:B4,BookAudio:F4,BookCheck:q4,BookCopy:D4,BookDashed:F,BookDown:T4,BookHeadphones:R4,BookHeart:b4,BookImage:U4,BookKey:O4,BookLock:I4,BookMarked:E4,BookMinus:G4,BookOpen:X4,BookOpenCheck:N4,BookOpenText:W4,BookPlus:_4,BookTemplate:F,BookText:$4,BookType:K4,BookUp:j4,BookUp2:J4,BookUser:Q4,BookX:a5,Bookmark:c5,BookmarkCheck:t5,BookmarkMinus:h5,BookmarkPlus:d5,BookmarkX:p5,BoomBox:e5,Bot:o5,BotMessageSquare:M5,BotOff:r5,Box:n5,BoxSelect:e0,Boxes:i5,Braces:q,Brackets:l5,Brain:x5,BrainCircuit:s5,BrainCog:v5,BrickWall:y5,Briefcase:u5,BriefcaseBusiness:m5,BriefcaseConveyorBelt:H5,BriefcaseMedical:g5,BringToFront:V5,Brush:w5,Bug:L5,BugOff:C5,BugPlay:A5,Building:f5,Building2:S5,Bus:k5,BusFront:Z5,Cable:P5,CableCar:z5,Cake:F5,CakeSlice:B5,Calculator:q5,Calendar:td,Calendar1:D5,CalendarArrowDown:T5,CalendarArrowUp:b5,CalendarCheck:U5,CalendarCheck2:R5,CalendarClock:O5,CalendarCog:I5,CalendarDays:E5,CalendarFold:G5,CalendarHeart:N5,CalendarMinus:X5,CalendarMinus2:W5,CalendarOff:_5,CalendarPlus:K5,CalendarPlus2:$5,CalendarRange:J5,CalendarSearch:j5,CalendarSync:Q5,CalendarX:ad,CalendarX2:Y5,Camera:dd,CameraOff:hd,CandlestickChart:U,Candy:ed,CandyCane:pd,CandyOff:cd,Cannabis:rd,Captions:D,CaptionsOff:Md,Car:id,CarFront:od,CarTaxiFront:nd,Caravan:ld,Carrot:vd,CaseLower:sd,CaseSensitive:xd,CaseUpper:yd,CassetteTape:md,Cast:Hd,Castle:ud,Cat:gd,Cctv:Vd,ChartArea:T,ChartBar:R,ChartBarBig:b,ChartBarDecreasing:wd,ChartBarIncreasing:Cd,ChartBarStacked:Ad,ChartCandlestick:U,ChartColumn:E,ChartColumnBig:O,ChartColumnDecreasing:Ld,ChartColumnIncreasing:I,ChartColumnStacked:Sd,ChartGantt:fd,ChartLine:G,ChartNetwork:Zd,ChartNoAxesColumn:W,ChartNoAxesColumnDecreasing:kd,ChartNoAxesColumnIncreasing:N,ChartNoAxesCombined:zd,ChartNoAxesGantt:X,ChartPie:_,ChartScatter:$,ChartSpline:Pd,Check:Fd,CheckCheck:Bd,CheckCircle:p1,CheckCircle2:c1,CheckSquare:j2,CheckSquare2:Q2,ChefHat:qd,Cherry:Dd,ChevronDown:Td,ChevronDownCircle:e1,ChevronDownSquare:Y2,ChevronFirst:bd,ChevronLast:Rd,ChevronLeft:Ud,ChevronLeftCircle:M1,ChevronLeftSquare:a0,ChevronRight:Od,ChevronRightCircle:r1,ChevronRightSquare:t0,ChevronUp:Id,ChevronUpCircle:o1,ChevronUpSquare:h0,ChevronsDown:Gd,ChevronsDownUp:Ed,ChevronsLeft:Xd,ChevronsLeftRight:Wd,ChevronsLeftRightEllipsis:Nd,ChevronsRight:$d,ChevronsRightLeft:_d,ChevronsUp:Jd,ChevronsUpDown:Kd,Chrome:jd,Church:Qd,Cigarette:a3,CigaretteOff:Yd,Circle:l3,CircleAlert:K,CircleArrowDown:J,CircleArrowLeft:j,CircleArrowOutDownLeft:Q,CircleArrowOutDownRight:Y,CircleArrowOutUpLeft:a1,CircleArrowOutUpRight:t1,CircleArrowRight:h1,CircleArrowUp:d1,CircleCheck:c1,CircleCheckBig:p1,CircleChevronDown:e1,CircleChevronLeft:M1,CircleChevronRight:r1,CircleChevronUp:o1,CircleDashed:t3,CircleDivide:n1,CircleDollarSign:h3,CircleDot:p3,CircleDotDashed:d3,CircleEllipsis:e3,CircleEqual:c3,CircleFadingArrowUp:r3,CircleFadingPlus:M3,CircleGauge:i1,CircleHelp:l1,CircleMinus:s1,CircleOff:o3,CircleParking:x1,CircleParkingOff:v1,CirclePause:y1,CirclePercent:m1,CirclePlay:H1,CirclePlus:g1,CirclePower:u1,CircleSlash:n3,CircleSlash2:V1,CircleSlashed:V1,CircleSmall:i3,CircleStop:w1,CircleUser:A1,CircleUserRound:C1,CircleX:L1,CircuitBoard:v3,Citrus:s3,Clapperboard:x3,Clipboard:A3,ClipboardCheck:y3,ClipboardCopy:m3,ClipboardEdit:f1,ClipboardList:H3,ClipboardMinus:g3,ClipboardPaste:u3,ClipboardPen:f1,ClipboardPenLine:S1,ClipboardPlus:V3,ClipboardSignature:S1,ClipboardType:w3,ClipboardX:C3,Clock:I3,Clock1:L3,Clock10:S3,Clock11:f3,Clock12:Z3,Clock2:k3,Clock3:z3,Clock4:P3,Clock5:B3,Clock6:F3,Clock7:q3,Clock8:D3,Clock9:T3,ClockAlert:b3,ClockArrowDown:R3,ClockArrowUp:U3,ClockFading:O3,Cloud:hp,CloudAlert:E3,CloudCog:G3,CloudDownload:Z1,CloudDrizzle:N3,CloudFog:W3,CloudHail:X3,CloudLightning:_3,CloudMoon:K3,CloudMoonRain:$3,CloudOff:J3,CloudRain:Q3,CloudRainWind:j3,CloudSnow:Y3,CloudSun:tp,CloudSunRain:ap,CloudUpload:k1,Cloudy:dp,Clover:pp,Club:cp,Code:ep,Code2:z1,CodeSquare:d0,CodeXml:z1,Codepen:Mp,Codesandbox:rp,Coffee:op,Cog:np,Coins:ip,Columns:P1,Columns2:P1,Columns3:B1,Columns4:lp,Combine:sp,Command:vp,Compass:xp,Component:yp,Computer:mp,ConciergeBell:Hp,Cone:gp,Construction:up,Contact:Vp,Contact2:F1,ContactRound:F1,Container:wp,Contrast:Cp,Cookie:Ap,CookingPot:Lp,Copy:Pp,CopyCheck:Sp,CopyMinus:fp,CopyPlus:Zp,CopySlash:kp,CopyX:zp,Copyleft:Bp,Copyright:Fp,CornerDownLeft:qp,CornerDownRight:Dp,CornerLeftDown:Tp,CornerLeftUp:bp,CornerRightDown:Rp,CornerRightUp:Up,CornerUpLeft:Op,CornerUpRight:Ip,Cpu:Ep,CreativeCommons:Gp,CreditCard:Np,Croissant:Wp,Crop:Xp,Cross:_p,Crosshair:$p,Crown:Kp,Cuboid:Jp,CupSoda:Qp,CurlyBraces:q,Currency:jp,Cylinder:Yp,Dam:a6,Database:d6,DatabaseBackup:t6,DatabaseZap:h6,Delete:p6,Dessert:c6,Diameter:e6,Diamond:o6,DiamondMinus:M6,DiamondPercent:q1,DiamondPlus:r6,Dice1:n6,Dice2:i6,Dice3:l6,Dice4:s6,Dice5:v6,Dice6:x6,Dices:y6,Diff:m6,Disc:V6,Disc2:H6,Disc3:g6,DiscAlbum:u6,Divide:w6,DivideCircle:n1,DivideSquare:M0,Dna:A6,DnaOff:C6,Dock:L6,Dog:S6,DollarSign:f6,Donut:Z6,DoorClosed:k6,DoorOpen:z6,Dot:P6,DotSquare:r0,Download:B6,DownloadCloud:Z1,DraftingCompass:q6,Drama:F6,Dribbble:D6,Drill:T6,Droplet:R6,DropletOff:b6,Droplets:U6,Drum:O6,Drumstick:I6,Dumbbell:E6,Ear:N6,EarOff:G6,Earth:D1,EarthLock:W6,Eclipse:X6,Edit:i,Edit2:L2,Edit3:A2,Egg:K6,EggFried:_6,EggOff:$6,Ellipsis:b1,EllipsisVertical:T1,Equal:Q6,EqualApproximately:J6,EqualNot:j6,EqualSquare:o0,Eraser:Y6,EthernetPort:ac,Euro:tc,Expand:hc,ExternalLink:dc,Eye:ec,EyeClosed:pc,EyeOff:cc,Facebook:Mc,Factory:rc,Fan:oc,FastForward:nc,Feather:ic,Fence:lc,FerrisWheel:sc,Figma:vc,File:i8,FileArchive:xc,FileAudio:mc,FileAudio2:yc,FileAxis3D:R1,FileAxis3d:R1,FileBadge:gc,FileBadge2:Hc,FileBarChart:U1,FileBarChart2:O1,FileBox:uc,FileChartColumn:O1,FileChartColumnIncreasing:U1,FileChartLine:I1,FileChartPie:E1,FileCheck:wc,FileCheck2:Vc,FileClock:Cc,FileCode:Lc,FileCode2:Ac,FileCog:G1,FileCog2:G1,FileDiff:Sc,FileDigit:fc,FileDown:Zc,FileEdit:W1,FileHeart:kc,FileImage:zc,FileInput:Pc,FileJson:Fc,FileJson2:Bc,FileKey:Dc,FileKey2:qc,FileLineChart:I1,FileLock:bc,FileLock2:Tc,FileMinus:Uc,FileMinus2:Rc,FileMusic:Oc,FileOutput:Ic,FilePen:W1,FilePenLine:N1,FilePieChart:E1,FilePlus:Nc,FilePlus2:Ec,FileQuestion:Gc,FileScan:Wc,FileSearch:_c,FileSearch2:Xc,FileSignature:N1,FileSliders:$c,FileSpreadsheet:Kc,FileStack:Jc,FileSymlink:jc,FileTerminal:Qc,FileText:Yc,FileType:t8,FileType2:a8,FileUp:h8,FileUser:d8,FileVideo:c8,FileVideo2:p8,FileVolume:M8,FileVolume2:e8,FileWarning:r8,FileX:n8,FileX2:o8,Files:l8,Film:s8,Filter:x8,FilterX:v8,Fingerprint:y8,FireExtinguisher:m8,Fish:u8,FishOff:g8,FishSymbol:H8,Flag:C8,FlagOff:V8,FlagTriangleLeft:w8,FlagTriangleRight:A8,Flame:S8,FlameKindling:L8,Flashlight:k8,FlashlightOff:f8,FlaskConical:z8,FlaskConicalOff:Z8,FlaskRound:P8,FlipHorizontal:F8,FlipHorizontal2:B8,FlipVertical:D8,FlipVertical2:q8,Flower:b8,Flower2:T8,Focus:R8,FoldHorizontal:U8,FoldVertical:O8,Folder:s7,FolderArchive:I8,FolderCheck:E8,FolderClock:G8,FolderClosed:N8,FolderCode:W8,FolderCog:X1,FolderCog2:X1,FolderDot:X8,FolderDown:_8,FolderEdit:_1,FolderGit:$8,FolderGit2:K8,FolderHeart:J8,FolderInput:j8,FolderKanban:Q8,FolderKey:Y8,FolderLock:a7,FolderMinus:t7,FolderOpen:h7,FolderOpenDot:p7,FolderOutput:d7,FolderPen:_1,FolderPlus:c7,FolderRoot:e7,FolderSearch:r7,FolderSearch2:M7,FolderSymlink:o7,FolderSync:n7,FolderTree:i7,FolderUp:l7,FolderX:x7,Folders:v7,Footprints:y7,ForkKnife:K0,ForkKnifeCrossed:$0,Forklift:m7,FormInput:f2,Forward:H7,Frame:g7,Framer:u7,Frown:V7,Fuel:w7,Fullscreen:C7,FunctionSquare:n0,GalleryHorizontal:L7,GalleryHorizontalEnd:A7,GalleryThumbnails:S7,GalleryVertical:Z7,GalleryVerticalEnd:f7,Gamepad:P7,Gamepad2:k7,GanttChart:X,GanttChartSquare:x,Gauge:z7,GaugeCircle:i1,Gavel:B7,Gem:q7,Ghost:F7,Gift:D7,GitBranch:T7,GitBranchPlus:b7,GitCommit:$1,GitCommitHorizontal:$1,GitCommitVertical:R7,GitCompare:O7,GitCompareArrows:U7,GitFork:I7,GitGraph:G7,GitMerge:E7,GitPullRequest:K7,GitPullRequestArrow:N7,GitPullRequestClosed:W7,GitPullRequestCreate:X7,GitPullRequestCreateArrow:_7,GitPullRequestDraft:$7,Github:J7,Gitlab:j7,GlassWater:Q7,Glasses:ae,Globe:te,Globe2:D1,GlobeLock:Y7,Goal:he,Grab:de,GraduationCap:pe,Grape:ce,Grid:v,Grid2X2:Q1,Grid2X2Check:K1,Grid2X2Plus:J1,Grid2X2X:j1,Grid2x2:Q1,Grid2x2Check:K1,Grid2x2Plus:J1,Grid2x2X:j1,Grid3X3:v,Grid3x3:v,Grip:re,GripHorizontal:ee,GripVertical:Me,Group:oe,Guitar:ne,Ham:ie,Hammer:le,Hand:me,HandCoins:se,HandHeart:ve,HandHelping:Y1,HandMetal:xe,HandPlatter:ye,Handshake:He,HardDrive:we,HardDriveDownload:ge,HardDriveUpload:ue,HardHat:Ve,Hash:Ce,Haze:Ae,HdmiPort:Le,Heading:Be,Heading1:Se,Heading2:fe,Heading3:Ze,Heading4:ke,Heading5:ze,Heading6:Pe,HeadphoneOff:Fe,Headphones:qe,Headset:De,Heart:Oe,HeartCrack:Te,HeartHandshake:Re,HeartOff:be,HeartPulse:Ue,Heater:Ie,HelpCircle:l1,HelpingHand:Y1,Hexagon:Ge,Highlighter:Ee,History:Ne,Home:a2,Hop:Xe,HopOff:We,Hospital:_e,Hotel:$e,Hourglass:Ke,House:a2,HousePlug:Je,HousePlus:je,HouseWifi:Qe,IceCream:h2,IceCream2:t2,IceCreamBowl:t2,IceCreamCone:h2,IdCard:Ye,Image:MM,ImageDown:aM,ImageMinus:tM,ImageOff:hM,ImagePlay:dM,ImagePlus:pM,ImageUp:cM,ImageUpscale:eM,Images:rM,Import:oM,Inbox:nM,Indent:p2,IndentDecrease:d2,IndentIncrease:p2,IndianRupee:iM,Infinity:lM,Info:sM,Inspect:y0,InspectionPanel:vM,Instagram:xM,Italic:yM,IterationCcw:mM,IterationCw:HM,JapaneseYen:gM,Joystick:uM,Kanban:VM,KanbanSquare:i0,KanbanSquareDashed:p0,Key:AM,KeyRound:wM,KeySquare:CM,Keyboard:fM,KeyboardMusic:LM,KeyboardOff:SM,Lamp:FM,LampCeiling:ZM,LampDesk:kM,LampFloor:zM,LampWallDown:PM,LampWallUp:BM,LandPlot:qM,Landmark:DM,Languages:TM,Laptop:RM,Laptop2:c2,LaptopMinimal:c2,LaptopMinimalCheck:bM,Lasso:OM,LassoSelect:UM,Laugh:IM,Layers:e2,Layers2:EM,Layers3:e2,Layout:C2,LayoutDashboard:GM,LayoutGrid:NM,LayoutList:WM,LayoutPanelLeft:XM,LayoutPanelTop:_M,LayoutTemplate:$M,Leaf:KM,LeafyGreen:JM,Lectern:jM,LetterText:QM,Library:a9,LibraryBig:YM,LibrarySquare:l0,LifeBuoy:t9,Ligature:h9,Lightbulb:p9,LightbulbOff:d9,LineChart:G,Link:M9,Link2:e9,Link2Off:c9,Linkedin:r9,List:L9,ListCheck:o9,ListChecks:n9,ListCollapse:i9,ListEnd:s9,ListFilter:v9,ListFilterPlus:l9,ListMinus:x9,ListMusic:y9,ListOrdered:m9,ListPlus:H9,ListRestart:g9,ListStart:u9,ListTodo:V9,ListTree:w9,ListVideo:C9,ListX:A9,Loader:f9,Loader2:M2,LoaderCircle:M2,LoaderPinwheel:S9,Locate:z9,LocateFixed:Z9,LocateOff:k9,Lock:B9,LockKeyhole:P9,LockKeyholeOpen:r2,LockOpen:o2,LogIn:F9,LogOut:q9,Logs:D9,Lollipop:T9,Luggage:b9,MSquare:s0,Magnet:R9,Mail:_9,MailCheck:U9,MailMinus:O9,MailOpen:I9,MailPlus:E9,MailQuestion:G9,MailSearch:N9,MailWarning:W9,MailX:X9,Mailbox:$9,Mails:K9,Map:or,MapPin:er,MapPinCheck:j9,MapPinCheckInside:J9,MapPinHouse:Q9,MapPinMinus:ar,MapPinMinusInside:Y9,MapPinOff:tr,MapPinPlus:dr,MapPinPlusInside:hr,MapPinX:cr,MapPinXInside:pr,MapPinned:Mr,MapPlus:rr,Mars:ir,MarsStroke:nr,Martini:lr,Maximize:sr,Maximize2:xr,Medal:vr,Megaphone:mr,MegaphoneOff:yr,Meh:gr,MemoryStick:Hr,Menu:ur,MenuSquare:v0,Merge:wr,MessageCircle:Br,MessageCircleCode:Vr,MessageCircleDashed:Cr,MessageCircleHeart:Ar,MessageCircleMore:Lr,MessageCircleOff:Sr,MessageCirclePlus:fr,MessageCircleQuestion:Zr,MessageCircleReply:kr,MessageCircleWarning:Pr,MessageCircleX:zr,MessageSquare:Kr,MessageSquareCode:Fr,MessageSquareDashed:qr,MessageSquareDiff:Dr,MessageSquareDot:Tr,MessageSquareHeart:Ur,MessageSquareLock:br,MessageSquareMore:Rr,MessageSquareOff:Or,MessageSquarePlus:Ir,MessageSquareQuote:Er,MessageSquareReply:Gr,MessageSquareShare:Nr,MessageSquareText:Xr,MessageSquareWarning:Wr,MessageSquareX:_r,MessagesSquare:$r,Mic:jr,Mic2:n2,MicOff:Jr,MicVocal:n2,Microchip:Qr,Microscope:Yr,Microwave:ao,Milestone:to,Milk:po,MilkOff:ho,Minimize:eo,Minimize2:co,Minus:Mo,MinusCircle:s1,MinusSquare:x0,Monitor:uo,MonitorCheck:ro,MonitorCog:oo,MonitorDot:no,MonitorDown:io,MonitorOff:lo,MonitorPause:so,MonitorPlay:vo,MonitorSmartphone:xo,MonitorSpeaker:yo,MonitorStop:mo,MonitorUp:Ho,MonitorX:go,Moon:wo,MoonStar:Vo,MoreHorizontal:b1,MoreVertical:T1,Mountain:Ao,MountainSnow:Co,Mouse:zo,MouseOff:Lo,MousePointer:ko,MousePointer2:So,MousePointerBan:fo,MousePointerClick:Zo,MousePointerSquareDashed:c0,Move:Go,Move3D:i2,Move3d:i2,MoveDiagonal:Fo,MoveDiagonal2:Po,MoveDown:Do,MoveDownLeft:Bo,MoveDownRight:qo,MoveHorizontal:To,MoveLeft:bo,MoveRight:Ro,MoveUp:Io,MoveUpLeft:Uo,MoveUpRight:Oo,MoveVertical:Eo,Music:_o,Music2:No,Music3:Wo,Music4:Xo,Navigation:jo,Navigation2:Ko,Navigation2Off:$o,NavigationOff:Jo,Network:Qo,Newspaper:Yo,Nfc:an,NonBinary:tn,Notebook:cn,NotebookPen:dn,NotebookTabs:hn,NotebookText:pn,NotepadText:Mn,NotepadTextDashed:en,Nut:on,NutOff:rn,Octagon:ln,OctagonAlert:l2,OctagonMinus:nn,OctagonPause:s2,OctagonX:v2,Omega:sn,Option:vn,Orbit:xn,Origami:yn,Outdent:d2,Package:An,Package2:mn,PackageCheck:Hn,PackageMinus:gn,PackageOpen:un,PackagePlus:Vn,PackageSearch:wn,PackageX:Cn,PaintBucket:Ln,PaintRoller:Sn,Paintbrush:fn,Paintbrush2:x2,PaintbrushVertical:x2,Palette:Zn,Palmtree:b0,PanelBottom:Pn,PanelBottomClose:kn,PanelBottomDashed:y2,PanelBottomInactive:y2,PanelBottomOpen:zn,PanelLeft:u2,PanelLeftClose:m2,PanelLeftDashed:H2,PanelLeftInactive:H2,PanelLeftOpen:g2,PanelRight:Fn,PanelRightClose:Bn,PanelRightDashed:V2,PanelRightInactive:V2,PanelRightOpen:qn,PanelTop:bn,PanelTopClose:Dn,PanelTopDashed:w2,PanelTopInactive:w2,PanelTopOpen:Tn,PanelsLeftBottom:Rn,PanelsLeftRight:B1,PanelsRightBottom:Un,PanelsTopBottom:z2,PanelsTopLeft:C2,Paperclip:On,Parentheses:In,ParkingCircle:x1,ParkingCircleOff:v1,ParkingMeter:En,ParkingSquare:H0,ParkingSquareOff:m0,PartyPopper:Gn,Pause:Nn,PauseCircle:y1,PauseOctagon:s2,PawPrint:Wn,PcCase:Xn,Pen:L2,PenBox:i,PenLine:A2,PenOff:_n,PenSquare:i,PenTool:$n,Pencil:Qn,PencilLine:Kn,PencilOff:Jn,PencilRuler:jn,Pentagon:Yn,Percent:ai,PercentCircle:m1,PercentDiamond:q1,PercentSquare:g0,PersonStanding:ti,PhilippinePeso:hi,Phone:ri,PhoneCall:di,PhoneForwarded:pi,PhoneIncoming:ci,PhoneMissed:ei,PhoneOff:Mi,PhoneOutgoing:oi,Pi:ni,PiSquare:u0,Piano:ii,Pickaxe:li,PictureInPicture:vi,PictureInPicture2:si,PieChart:_,PiggyBank:xi,Pilcrow:Hi,PilcrowLeft:yi,PilcrowRight:mi,PilcrowSquare:V0,Pill:ui,PillBottle:gi,Pin:wi,PinOff:Vi,Pipette:Ci,Pizza:Ai,Plane:fi,PlaneLanding:Si,PlaneTakeoff:Li,Play:Zi,PlayCircle:H1,PlaySquare:w0,Plug:zi,Plug2:ki,PlugZap:S2,PlugZap2:S2,Plus:Pi,PlusCircle:g1,PlusSquare:C0,Pocket:Fi,PocketKnife:Bi,Podcast:qi,Pointer:Ti,PointerOff:Di,Popcorn:bi,Popsicle:Oi,PoundSterling:Ri,Power:Ii,PowerCircle:u1,PowerOff:Ui,PowerSquare:A0,Presentation:Ei,Printer:Wi,PrinterCheck:Gi,Projector:Ni,Proportions:Xi,Puzzle:_i,Pyramid:$i,QrCode:Ji,Quote:ji,Rabbit:Ki,Radar:Qi,Radiation:Yi,Radical:al,Radio:dl,RadioReceiver:tl,RadioTower:hl,Radius:pl,RailSymbol:cl,Rainbow:el,Rat:Ml,Ratio:rl,Receipt:ml,ReceiptCent:ol,ReceiptEuro:nl,ReceiptIndianRupee:il,ReceiptJapaneseYen:ll,ReceiptPoundSterling:sl,ReceiptRussianRuble:vl,ReceiptSwissFranc:xl,ReceiptText:yl,RectangleEllipsis:f2,RectangleHorizontal:Hl,RectangleVertical:gl,Recycle:wl,Redo:Cl,Redo2:ul,RedoDot:Vl,RefreshCcw:Ll,RefreshCcwDot:Al,RefreshCw:fl,RefreshCwOff:Sl,Refrigerator:Zl,Regex:kl,RemoveFormatting:zl,Repeat:Fl,Repeat1:Pl,Repeat2:Bl,Replace:Dl,ReplaceAll:ql,Reply:bl,ReplyAll:Tl,Rewind:Ul,Ribbon:Rl,Rocket:Ol,RockingChair:Il,RollerCoaster:El,Rotate3D:Z2,Rotate3d:Z2,RotateCcw:Nl,RotateCcwSquare:Gl,RotateCw:Xl,RotateCwSquare:Wl,Route:$l,RouteOff:_l,Router:Kl,Rows:k2,Rows2:k2,Rows3:z2,Rows4:Jl,Rss:jl,Ruler:Ql,RussianRuble:Yl,Sailboat:as,Salad:ts,Sandwich:hs,Satellite:ps,SatelliteDish:ds,SaudiRiyal:cs,Save:rs,SaveAll:Ms,SaveOff:es,Scale:os,Scale3D:P2,Scale3d:P2,Scaling:ns,Scan:gs,ScanBarcode:is,ScanEye:ls,ScanFace:ss,ScanHeart:vs,ScanLine:xs,ScanQrCode:ys,ScanSearch:ms,ScanText:Hs,ScatterChart:$,School:us,School2:O0,Scissors:ws,ScissorsLineDashed:Vs,ScissorsSquare:L0,ScissorsSquareDashedBottom:J2,ScreenShare:As,ScreenShareOff:Cs,Scroll:Ss,ScrollText:Ls,Search:Ps,SearchCheck:fs,SearchCode:Zs,SearchSlash:ks,SearchX:zs,Section:Bs,Send:qs,SendHorizonal:B2,SendHorizontal:B2,SendToBack:Fs,SeparatorHorizontal:bs,SeparatorVertical:Ds,Server:Os,ServerCog:Ts,ServerCrash:Rs,ServerOff:Us,Settings:Es,Settings2:Is,Shapes:Gs,Share:Ws,Share2:Ns,Sheet:Xs,Shell:_s,Shield:pv,ShieldAlert:$s,ShieldBan:Ks,ShieldCheck:Js,ShieldClose:F2,ShieldEllipsis:js,ShieldHalf:Qs,ShieldMinus:Ys,ShieldOff:av,ShieldPlus:tv,ShieldQuestion:hv,ShieldUser:dv,ShieldX:F2,Ship:ev,ShipWheel:cv,Shirt:Mv,ShoppingBag:rv,ShoppingBasket:ov,ShoppingCart:nv,Shovel:iv,ShowerHead:lv,Shrimp:sv,Shrink:vv,Shrub:xv,Shuffle:yv,Sidebar:u2,SidebarClose:m2,SidebarOpen:g2,Sigma:mv,SigmaSquare:S0,Signal:Cv,SignalHigh:Hv,SignalLow:uv,SignalMedium:gv,SignalZero:Vv,Signature:wv,Signpost:Lv,SignpostBig:Av,Siren:Sv,SkipBack:fv,SkipForward:Zv,Skull:kv,Slack:zv,Slash:Pv,SlashSquare:f0,Slice:Bv,Sliders:q2,SlidersHorizontal:Fv,SlidersVertical:q2,Smartphone:Tv,SmartphoneCharging:qv,SmartphoneNfc:Dv,Smile:Rv,SmilePlus:bv,Snail:Uv,Snowflake:Ov,Sofa:Iv,SortAsc:f,SortDesc:A,Soup:Ev,Space:Gv,Spade:Nv,Sparkle:Wv,Sparkles:D2,Speaker:Xv,Speech:_v,SpellCheck:Kv,SpellCheck2:$v,Spline:Jv,Split:jv,SplitSquareHorizontal:Z0,SplitSquareVertical:k0,SprayCan:Qv,Sprout:Yv,Square:ex,SquareActivity:T2,SquareArrowDown:U2,SquareArrowDownLeft:b2,SquareArrowDownRight:R2,SquareArrowLeft:O2,SquareArrowOutDownLeft:I2,SquareArrowOutDownRight:E2,SquareArrowOutUpLeft:G2,SquareArrowOutUpRight:N2,SquareArrowRight:W2,SquareArrowUp:$2,SquareArrowUpLeft:X2,SquareArrowUpRight:_2,SquareAsterisk:K2,SquareBottomDashedScissors:J2,SquareChartGantt:x,SquareCheck:Q2,SquareCheckBig:j2,SquareChevronDown:Y2,SquareChevronLeft:a0,SquareChevronRight:t0,SquareChevronUp:h0,SquareCode:d0,SquareDashed:e0,SquareDashedBottom:tx,SquareDashedBottomCode:ax,SquareDashedKanban:p0,SquareDashedMousePointer:c0,SquareDivide:M0,SquareDot:r0,SquareEqual:o0,SquareFunction:n0,SquareGanttChart:x,SquareKanban:i0,SquareLibrary:l0,SquareM:s0,SquareMenu:v0,SquareMinus:x0,SquareMousePointer:y0,SquareParking:H0,SquareParkingOff:m0,SquarePen:i,SquarePercent:g0,SquarePi:u0,SquarePilcrow:V0,SquarePlay:w0,SquarePlus:C0,SquarePower:A0,SquareRadical:hx,SquareRoundCorner:dx,SquareScissors:L0,SquareSigma:S0,SquareSlash:f0,SquareSplitHorizontal:Z0,SquareSplitVertical:k0,SquareSquare:px,SquareStack:cx,SquareTerminal:z0,SquareUser:B0,SquareUserRound:P0,SquareX:F0,Squircle:Mx,Squirrel:rx,Stamp:ox,Star:lx,StarHalf:nx,StarOff:ix,Stars:D2,StepBack:sx,StepForward:vx,Stethoscope:xx,Sticker:mx,StickyNote:yx,StopCircle:w1,Store:Hx,StretchHorizontal:gx,StretchVertical:ux,Strikethrough:Vx,Subscript:Ax,Subtitles:D,Sun:fx,SunDim:wx,SunMedium:Cx,SunMoon:Lx,SunSnow:Sx,Sunrise:Zx,Sunset:kx,Superscript:zx,SwatchBook:Px,SwissFranc:Bx,SwitchCamera:Fx,Sword:qx,Swords:Dx,Syringe:Tx,Table:Nx,Table2:bx,TableCellsMerge:Rx,TableCellsSplit:Ux,TableColumnsSplit:Ox,TableOfContents:Ix,TableProperties:Ex,TableRowsSplit:Gx,Tablet:Xx,TabletSmartphone:Wx,Tablets:_x,Tag:$x,Tags:Kx,Tally1:jx,Tally2:Jx,Tally3:Qx,Tally4:Yx,Tally5:ay,Tangent:ty,Target:hy,Telescope:dy,Tent:cy,TentTree:py,Terminal:ey,TerminalSquare:z0,TestTube:My,TestTube2:q0,TestTubeDiagonal:q0,TestTubes:ry,Text:sy,TextCursor:ny,TextCursorInput:oy,TextQuote:iy,TextSearch:ly,TextSelect:D0,TextSelection:D0,Theater:vy,Thermometer:my,ThermometerSnowflake:xy,ThermometerSun:yy,ThumbsDown:Hy,ThumbsUp:gy,Ticket:Sy,TicketCheck:uy,TicketMinus:Vy,TicketPercent:wy,TicketPlus:Cy,TicketSlash:Ay,TicketX:Ly,Tickets:Zy,TicketsPlane:fy,Timer:Py,TimerOff:ky,TimerReset:zy,ToggleLeft:By,ToggleRight:Fy,Toilet:qy,Tornado:Dy,Torus:Ty,Touchpad:Ry,TouchpadOff:by,TowerControl:Uy,ToyBrick:Oy,Tractor:Iy,TrafficCone:Ey,Train:T0,TrainFront:Ny,TrainFrontTunnel:Gy,TrainTrack:Wy,TramFront:T0,Transgender:Xy,Trash:Ky,Trash2:_y,TreeDeciduous:$y,TreePalm:b0,TreePine:Jy,Trees:jy,Trello:Qy,TrendingDown:Yy,TrendingUp:tm,TrendingUpDown:am,Triangle:pm,TriangleAlert:R0,TriangleDashed:dm,TriangleRight:hm,Trophy:cm,Truck:em,Turtle:Mm,Tv:om,Tv2:U0,TvMinimal:U0,TvMinimalPlay:rm,Twitch:nm,Twitter:im,Type:sm,TypeOutline:lm,Umbrella:xm,UmbrellaOff:vm,Underline:ym,Undo:um,Undo2:mm,UndoDot:Hm,UnfoldHorizontal:gm,UnfoldVertical:Vm,Ungroup:wm,University:O0,Unlink:Am,Unlink2:Cm,Unlock:o2,UnlockKeyhole:r2,Unplug:Lm,Upload:Sm,UploadCloud:k1,Usb:fm,User:bm,User2:X0,UserCheck:Zm,UserCheck2:I0,UserCircle:A1,UserCircle2:C1,UserCog:km,UserCog2:E0,UserMinus:zm,UserMinus2:G0,UserPen:Pm,UserPlus:Bm,UserPlus2:N0,UserRound:X0,UserRoundCheck:I0,UserRoundCog:E0,UserRoundMinus:G0,UserRoundPen:Fm,UserRoundPlus:N0,UserRoundSearch:qm,UserRoundX:W0,UserSearch:Dm,UserSquare:B0,UserSquare2:P0,UserX:Tm,UserX2:W0,Users:Rm,Users2:_0,UsersRound:_0,Utensils:K0,UtensilsCrossed:$0,UtilityPole:Um,Variable:Om,Vault:Im,Vegan:Em,VenetianMask:Gm,Venus:Xm,VenusAndMars:Nm,Verified:z,Vibrate:_m,VibrateOff:Wm,Video:Km,VideoOff:$m,Videotape:Jm,View:jm,Voicemail:Qm,Volleyball:Ym,Volume:pH,Volume1:aH,Volume2:tH,VolumeOff:hH,VolumeX:dH,Vote:cH,Wallet:MH,Wallet2:J0,WalletCards:eH,WalletMinimal:J0,Wallpaper:oH,Wand:rH,Wand2:j0,WandSparkles:j0,Warehouse:nH,WashingMachine:iH,Watch:lH,Waves:vH,WavesLadder:sH,Waypoints:yH,Webcam:xH,Webhook:gH,WebhookOff:mH,Weight:HH,Wheat:VH,WheatOff:uH,WholeWord:wH,Wifi:fH,WifiHigh:CH,WifiLow:AH,WifiOff:LH,WifiZero:SH,Wind:kH,WindArrowDown:ZH,Wine:PH,WineOff:zH,Workflow:BH,Worm:FH,WrapText:qH,Wrench:DH,X:TH,XCircle:L1,XOctagon:v2,XSquare:F0,Youtube:bH,Zap:UH,ZapOff:RH,ZoomIn:OH,ZoomOut:IH},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JH=({icons:a={},nameAttr:d="data-lucide",attrs:h={}}={})=>{if(!Object.values(a).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const p=document.querySelectorAll(`[${d}]`);if(Array.from(p).forEach(t=>g(t,{nameAttr:d,icons:a,attrs:h})),d==="data-lucide"){const t=document.querySelectorAll("[icon-name]");t.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(t).forEach(c=>g(c,{nameAttr:"icon-name",icons:a,attrs:h})))}};function jH(){let a=document.getElementById("header"),d=document.querySelector("#go_to_top");window.addEventListener("scroll",()=>{window.scrollY>=100?(a.classList.add("active"),d.classList.add("active")):(a.classList.remove("active"),d.classList.remove("active"))})}function QH(){document.querySelector("#go_to_top").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})}function YH(){let a=document.querySelector(".search-input"),d=document.querySelector(".close-search"),h=document.getElementById("section-search");a.addEventListener("click",()=>{h.classList.add("active")}),d.addEventListener("click",()=>{h.classList.remove("active")})}async function ag(){let h=(await(await fetch("https://api.jsonbin.io/v3/b/685196d38a456b7966afc4c8")).json()).record.dishesList;EH(h)}function EH(a){let d=document.getElementById("section-search"),h=d.querySelector(".search"),p=d.querySelector("p"),t=d.querySelector(".product-list");h.addEventListener("input",()=>{let c=h.value.toLowerCase(),e=a.filter(M=>M.title.toLowerCase().includes(c));e.length>0&&(t.innerHTML=e.map(M=>{let{id:r,title:o,img:s,price:n}=M;return`
          <li id="product-${r}" class="flex gap-[10px]">
            <figure class="max-w-[58px]">
              <img class="w-full h-full" src="${s}" />
            </figure>
            <div class="w-full">
              <div class="flex flex-row-reverse items-center justify-between w-full">
                <img src="./image/rating_starts.png" class="max-w-[76px] md:max-w-[69px]" alt="">
                <a href="show-details.html?id=${r}">
                  <h3 class="title text-[17px] font-semibold md:text-[15px] xl:text-[17px]">${o}</h3>
                </a>
              </div>
                <p class="text-[14px]">Price: <span class="text-[#fd5c38] font-medium">$${n}</span></p>
            </div>
          </li>
        `}).join("")),h.value===""?(p.classList.remove("active"),t.innerHTML=""):p.classList.add("active"),e.length===0&&p.classList.add("active")})}export{NH as a,$H as b,JH as c,YH as d,QH as e,GH as f,ag as g,_H as h,KH as i,WH as j,jH as s,XH as t};
