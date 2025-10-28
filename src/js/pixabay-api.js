import axios from 'axios';


function getImagesByQuery(query) {
    const URL = "https://pixabay.com/api";
    const API_KEY = "52901164-552010a54c9c54893e8a3cd4c";

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

      // Возвращаем Promise — .then и .catch будут в main.js
return axios.get(`${URL}?${params}`)
}

// ⬇️ добавляем экспорт по умолчанию
export default getImagesByQuery;


// form.addEventListener("submit", handleSearch);

// function handleSearch(event) {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const queryValue = form.elements.search.value.trim().toLowerCase();

//       if (!queryValue) {
//     alert("Введите запрос!");
//     return;
//   }

// getImagesByQuery(queryValue)
// .then(response => {
// console.log(response.data.hits);
//       const images = response.data.hits;
//     console.log(images);
//     createGallery(images);
// if (images.length === 0) {
//     iziToast.error({
//          title: 'Error',
//         message: 'Sorry, there are no images matching your search query. Please try again!',
//         position: 'topRight', // опционально
//       });
//       return; // прерываем выполнение
// }
// clearGallery();
// createGallery(images); /// ? 

// }) 
// .catch(error => console.log("Ошибка запроса:", error))
// .finally(() => form.reset());
// }




// ✅ Функция для очистки галереи
// function clearGallery() {
//   galleryList.innerHTML = '';
// }

// let gallery = new SimpleLightbox('.gallery-list a', {
//   captions: true,
//   captionDelay: 250,
// });


// const gallery = $('.gallery a').simpleLightbox();

// gallery.next(); // Next Image

// gallery.refresh(); // Next Image




