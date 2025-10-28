import{a as d,S as p,i as n}from"./assets/vendor-BCVp9CTC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(o){const r="https://pixabay.com/api",i="52901164-552010a54c9c54893e8a3cd4c",s=new URLSearchParams({key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get(`${r}?${s}`)}const l=document.querySelector(".gallery-list"),c=document.querySelector(".loader");function g(){c.classList.remove("hidden")}function y(){c.classList.add("hidden")}function h(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:a,comments:u,downloads:m})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img 
              class="gallery-image" 
              src="${i}" 
              alt="${e}" 
            />
          </a>
          
          <ul class="image-description">
          <li class="image-description-item">Likes <span class="description-numbers">${t}</span></li>
          <li class="image-description-item">Views <span class="description-numbers">${a}</span></li>
          <li class="image-description-item">Comments <span class="description-numbers">${u}</span></li>
          <li class="image-description-item">Download <span class="description-numbers">${m}</span></li>
          </ul>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r)}function L(){l.innerHTML=""}const b=document.querySelector(".form");document.querySelector(".gallery-list");let S=new p(".gallery-list a",{captions:!0,captionDelay:250});b.addEventListener("submit",$);function $(o){o.preventDefault();const r=o.currentTarget,i=r.elements.search.value.trim().toLowerCase();if(!i){n.warning({title:"Warning",message:"Введите запрос!",position:"topRight"});return}L(),g(),f(i).then(s=>{const e=s.data.hits;if(e.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e),S.refresh()}).catch(s=>console.log("Ошибка запроса:",s)).finally(()=>{y(),r.reset()})}
//# sourceMappingURL=index.js.map
