import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL =
  'https://tasty-treats-backend.p.goit.global/api/events';
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Notiflix.Notify.failure('Something went wrong. Please try again later.');
    return Promise.reject(error);
  }
);

async function fetchImages(query, page, perPage) {
  const response = await axios.get(`baseURL`);

  return response.data;
}

export { fetchImages };
