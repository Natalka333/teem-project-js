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

async function fetchMasterClass() {
  const response = await axios.get();

  console.log(response.data);

  return response.data;
}

export { fetchMasterClass };
