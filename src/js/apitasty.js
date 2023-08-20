import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL =
  'https://tasty-treats-backend.p.goit.global/api/events';

// axios.defaults.baseURL =
//   'https://tasty-treats-backend.p.goit.global/HestonChan.png';

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
  // const masterClass = response.data;
  console.log(response.data);

  return response.data;
}

export { fetchMasterClass };

// const INITIAL_REQUEST = `https://tasty-treats-backend.p.goit.global/api/events`;

// export async function fetchMasterClass() {
//   try {
//     const response = await axios.get(INITIAL_REQUEST);

//     if (response.status === 404) {
//       throw new Error(response.status);
//     }

//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export { fetchMasterClass };
