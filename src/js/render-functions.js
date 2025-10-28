const galleryList = document.querySelector(".gallery-list");
const loader = document.querySelector(".loader");

// Показать лоадер
function showLoader() {
    loader.classList.remove("hidden");
}

// Скрыть лоадер
function hideLoader() {
    loader.classList.add('hidden');
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
}

function clearGallery() {
  galleryList.innerHTML = '';
}

// Экспорт функций
export { createGallery, hideLoader, showLoader, clearGallery };
