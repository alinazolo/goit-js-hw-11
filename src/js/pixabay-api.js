import axios from 'axios';

function getImagesByQuery(query) {
    const URL = "https://pixabay.com/api/";
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

export default getImagesByQuery;


