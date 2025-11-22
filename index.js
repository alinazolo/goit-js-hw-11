import{a as p,S as f,i as c}from"./assets/vendor-xwsNXkQR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(n){const r="https://pixabay.com/api/",i="52901164-552010a54c9c54893e8a3cd4c",s=new URLSearchParams({key:i,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return p.get(`${r}?${s}`)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");function y(){u.classList.remove("hidden")}function h(){u.classList.add("hidden")}let o=null;function L(){o?o.refresh():o=new f(".gallery a",{captions:!0,captionDelay:250})}function b(n){const r=n.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:a,comments:m,downloads:d})=>`<li class="gallery-item">
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
          <li class="image-description-item">Comments <span class="description-numbers">${m}</span></li>
          <li class="image-description-item">Download <span class="description-numbers">${d}</span></li>
          </ul>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),queueMicrotask(L)}function q(){l.innerHTML="",o&&(o.destroy(),o=null)}const S=document.querySelector(".form");S.addEventListener("submit",$);function $(n){n.preventDefault(),q();const r=n.currentTarget,i=r.elements.search.value.trim().toLowerCase();if(!i){c.warning({title:"Warning",message:"Write your request",position:"topRight"}),r.reset();return}y(),g(i).then(s=>{const e=s.data.hits;if(e.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(e)}).catch(s=>console.log("Ошибка запроса:",s)).finally(()=>{h(),r.reset()})}
//# sourceMappingURL=index.js.map
