import axios from 'axios';
import Notiflix from 'notiflix';

import axios from 'axios';

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
  const response = await axios.get('');
  const masterClass = response.data;
  console.log(masterClass);

  return masterClass;
}

export { fetchMasterClass };
