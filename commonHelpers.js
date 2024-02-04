import{i as a,S as f}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";u.addEventListener("submit",p);function p(s){s.preventDefault();const o=s.target.elements.searchQuery.value;if(!o){a.warning({position:"topRight",message:"Please enter a search query."});return}c.innerHTML="",l.style.display="block",d(o).then(n=>g(n)).catch(n=>a.error({position:"topRight",message:`Error: ${n}`})).finally(()=>{s.target.reset(),l.style.display="none"})}function d(s){const o="https://pixabay.com/api/",n=new URLSearchParams({key:"42192602-d8808410d4367b6455b886704",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=o+"?"+n;return fetch(r).then(e=>e.json())}function h(s){const{webformatURL:o,largeImageURL:n,tags:r,likes:e,views:t,comments:i,downloads:m}=s;return`
    <div class="photo-card">
      <a class="photo-card-link" href="${o}">
        <img
          class="photo-card__img"
          src="${n}" 
          alt="${r}" 
        />
      </a>
      <div class="info">
        <p class="info-item">
          <b class="info-item-title">Likes</b>
          <span class="info-item-value">${e}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Views</b>
          <span class="info-item-value">${t}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Comments</b>
          <span class="info-item-value">${i}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${m}</span>
        </p>
      </div>
    </div>
    `}function g({hits:s}){if(s.length>0){const o=s.map(h).join("");c.insertAdjacentHTML("beforeend",o),new f(".photo-card-link",{captionDelay:250,captionsData:"alt"}).refresh()}else a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
