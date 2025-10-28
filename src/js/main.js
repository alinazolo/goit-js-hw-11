// fetch('https://jsonplaceholder.typicode.com/todos/1').
// then((response) => {
//     if (!response.ok) {
//         throw new Error(response.status);
//     }

// const { stringify } = require("postcss");

// return response.json()
// })
// .then((data) => console.log(data))
// .catch(console.log);
// const list = document.querySelector(".todo-list");
// const createLi = ({ title, completed }) => `<li class="${completed ? "done" : "in-progress"}">${title}</li>`;
// const createListMarkup = (listArr) => listArr.map(createLi).join("");

// const fetchTodos = () => {
//     return fetch('https://jsonplaceholder.typicode.com/todos').then(
//         (response) => {
//             if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json()
//         }
//     );
// };

// fetchTodos()
// .then((data) => {
//     console.log(data);
//     const markup = createListMarkup(data);
//     list.innerHTML = markup;
// })
// .catch(console.log);

// function searchImagesByQuery(query) {
//     const URL = "https://pixabay.com/api";
//     const API_KEY = "52901164-552010a54c9c54893e8a3cd4c";

//     const params = new URLSearchParams({
//         key: API_KEY,
//         q: query,
//     })
// fetch(`${URL}?key=${API_KEY}&q=${query}`)

//     return fetch(`${URL}?${params}`).then(
//         (response) => {
//             if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json()
//         }
//     );
// }

// searchImagesByQuery("green house")
// .then((data) => {
//     console.log(data);
// })
// .catch(console.log);

//3

// function fetchPokemonId(pokemonId) {
//     const URL = "https://pokeapi.co/api/v2";
//     const ENDPOINT = "pokemon";
// return fetch(`${URL}/${ENDPOINT}/${pokemonId}`).then(
//         (response) => {
//             if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json()
//         }
//     );
// }



// const cardContainer = document.querySelector(".card-container");
// const searchForm = document.querySelector(".search-form");

// searchForm.addEventListener("submit", handleSearch);

// function handleSearch(event) {
//     event.preventDefault()
//     const form = event.currentTarget;
//     const queryValue = form.elements.query.value.trim().toLowerCase();

//     fetchPokemonId(queryValue) // робимо запит на пошук покемона 
//     .then(renderPokemonCard) // відмальовка карточки покемона
// .catch(onFetchError) // оброблюємл помилку 
// .finally(() => form.reset());
// }

// function renderPokemonCard({ name, sprites, weight, height, abilities }) {
//     const abilityListItems = abilities
//     .map(({ ability }) => `<li class="list-group-item">${ability.name}</li>`)
//     .join("");

//     const markup = `<div class="card">
//     <div class="card-img-top">
//     <img src="${sprites.front_default}" alt="${name}">
//     </div>
//     <div class="card-body">
//     <h2 class="card-title">Name: ${name}</h2>
//     <p class="card-text">Weight: ${weight}</p>
    
//     <p class="card-text">Skills</p>
//     <ul class="list-group">${abilityListItems}</ul>
// </div>
// </div>`;
// cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//     cardContainer.innerHTML = "";
//     alert("Oooppss... We haven't found a pockemon!");
// }

// const URLBOOK = "https://68fbd67594ec960660274fff.mockapi.io/books";

// function fetchBooks() {
// return fetch(URLBOOK).then(
//         (response) => {
//             if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json()
//         }
//     );
// }

// fetchBooks().then(console.log).catch(console.log);

// function fetchBookById(bookId) {
//     return fetch(`${URLBOOK}/${bookId}`).then((response) => {
//             if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json()
//         }
//     );
// }


// fetchBookById(2).then(console.log).catch(console.log);
// fetchBookById(4).then(console.log).catch(console.log);
// fetchBookById(400).then(console.log).catch(console.log);

// const options = {
//     method: "POST",
//     body: JSON.stringify(book), 
//     header: {
//         "Content-Type": "application/json", 
//     }
// };

// function addBook(book) {
//  const options = {
//     method: "POST",
//     body: JSON.stringify(book), 
//     headers: {
//         "Content-Type": "application/json", 
//     }
// };
//  return fetch(URLBOOK, options).then((response) => {
//             if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json()
//         }
//     );
// }

   

   
// addBook({
//     title: "Test book",
//     author: "I",
//     genres: ["CSS", "HTML"],
//     rating: 9,
// })
// .then((book) => {
//     console.log("We got an answear from backend");
//     console.log(book);
// })
// .catch((error) => console.log(error));

// addBook({
//     title: "Test book JS",
//     author: "JS",
//     genres: ["JS", "React"],
//     rating: 9,
// })
// .then((book) => {
//     console.log("We got an answear from backend");
//     console.log(book);
// })
// .catch((error) => console.log(error));


// function updateBookById(update, bookId) {
// const options = {
//     method: "PATCH",
//     body: JSON.stringify(update), 
//     headers: {
//         "Content-Type": "application/json", 
//     }
// };
//  return fetch(`${URLBOOK}/${bookId}`, options).then((response) => {
//             if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json()
//         }
//     );
// }

// updateBookById({ title: "New Book NODEJS" }, 5)
// .then((data) => {
//     console.log("Success update");
//     console.log(data);
// })
// .catch(console.log);

// updateBookById({ rating: 1 }, 8)
// .then((data) => {
//     console.log("Success update");
//     console.log(data);
// })
// .catch(console.log);

// updateBookById({ rating: 4, author: "Mango" }, 16)
// .then((data) => {
//     console.log("Success update");
//     console.log(data);
// })
// .catch(console.log);

// function removeBook(bookId) {
//     const options = {
//         method: "DELETE",
//     };

//     return fetch(`${URLBOOK}/${bookId}`, options).then((response) => {
//             if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json()
//         }
//     );
// }

// removeBook(14)
// .then((data) => {
//     console.log("it's success deleted");
//     console.log(data);
// })
// .catch((err) => {
//     console.log("There is no this data");
//     console.log(err);
// });

// removeBook(10)
// .then((data) => {
//     console.log("it's success deleted");
//     console.log(data);
// })
// .catch((err) => {
//     console.log("There is no this data");
//     console.log(err);
// });

// --- Импорт библиотек ---

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// --- Импорт функций проекта ---

import getImagesByQuery from "./pixabay-api.js"

import { createGallery, hideLoader, showLoader, clearGallery } from './render-functions.js';


const form = document.querySelector(".form");
const galleryList = document.querySelector(".gallery-list");
// const loader = document.querySelector('.loader');

// --- Инициализация SimpleLightbox ---
let gallery = new SimpleLightbox('.gallery-list a', {
  captions: true,
  captionDelay: 250,
});

// --- Слушатель формы ---
form.addEventListener("submit", handleSearch);

// --- Функция обработки запроса ---
function handleSearch(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const queryValue = form.elements.search.value.trim().toLowerCase();

      if (!queryValue) {
iziToast.warning({
      title: "Warning",
      message: "Введите запрос!",
      position: "topRight",
    });
    return;
  }

clearGallery();
showLoader();

getImagesByQuery(queryValue)
.then(response => {
const images = response.data.hits;
if (images.length === 0) {
    iziToast.error({
         title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight', // опционально
      });
      return; // прерываем выполнение
}

createGallery(images);
gallery.refresh();
}) 

.catch(error => console.log("Ошибка запроса:", error))
.finally(() => {
     hideLoader(); // ← здесь!  скрываем лоадер в любом случа
    form.reset(); // ← и сбрасываем форму
})
}