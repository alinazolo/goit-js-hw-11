import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

// Показать лоадер
function showLoader() {
    loader.classList.remove("hidden");
}

// Скрыть лоадер
function hideLoader() {
    loader.classList.add('hidden');
}

// --- Инициализация SimpleLightbox ---
let galleryInstance = null;
function ensureLightbox() {
  if(!galleryInstance) {
    galleryInstance = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});
  } else {
        galleryInstance.refresh();
  }
}

// Создать разметку галереи
function createGallery(images) {
  const markup = images
      .map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
            `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img 
              class="gallery-image" 
              src="${webformatURL}" 
              alt="${tags}" 
            />
          </a>
          
          <ul class="image-description">
          <li class="image-description-item">Likes <span class="description-numbers">${likes}</span></li>
          <li class="image-description-item">Views <span class="description-numbers">${views}</span></li>
          <li class="image-description-item">Comments <span class="description-numbers">${comments}</span></li>
          <li class="image-description-item">Download <span class="description-numbers">${downloads}</span></li>
          </ul>
        </li>`
      )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);
  queueMicrotask(ensureLightbox);
}

function clearGallery() {
  galleryList.innerHTML = '';
    if (galleryInstance) {
    galleryInstance.destroy();
    galleryInstance = null;
    }
}

// Экспорт функций
export { hideLoader, showLoader, createGallery, clearGallery };
