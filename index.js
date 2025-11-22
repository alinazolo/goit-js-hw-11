import{a as p,S as f,i as l}from"./assets/vendor-xwsNXkQR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g=p.create({baseURL:"https://pixabay.com/api/",params:{key:"52901164-552010a54c9c54893e8a3cd4c",image_type:"photo",orientation:"horizontal",safesearch:!0}});function y(i){return g.get("/",{params:{q:i}})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function h(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}let n=null;function b(){n?n.refresh():n=new f(".gallery a",{captions:!0,captionDelay:250})}function q(i){const t=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:a,comments:m,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img 
              class="gallery-image" 
              src="${o}" 
              alt="${e}" 
            />
          </a>
          
          <ul class="image-description">
          <li class="image-description-item">Likes <span class="description-numbers">${r}</span></li>
          <li class="image-description-item">Views <span class="description-numbers">${a}</span></li>
          <li class="image-description-item">Comments <span class="description-numbers">${m}</span></li>
          <li class="image-description-item">Download <span class="description-numbers">${d}</span></li>
          </ul>
        </li>`).join("");c.insertAdjacentHTML("beforeend",t),queueMicrotask(b)}function S(){c.innerHTML="",n&&(n.destroy(),n=null)}const w=document.querySelector(".form");w.addEventListener("submit",$);function $(i){i.preventDefault(),S();const t=i.currentTarget,o=t.elements.search.value.trim().toLowerCase();if(!o){l.warning({title:"Warning",message:"Write your request",position:"topRight"}),t.reset();return}h(),y(o).then(s=>{const e=s.data.hits;if(e.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}q(e)}).catch(s=>console.log("Ошибка запроса:",s)).finally(()=>{L(),t.reset()})}
//# sourceMappingURL=index.js.map
