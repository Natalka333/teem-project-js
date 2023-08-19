import axios from 'axios';
import Notiflix from 'notiflix';

import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get(
      'https://tasty-treats-backend.p.goit.global/api/events'
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong. Please try again later.');
    return Promise.reject(error);
  }
}

// // Вызов функции для получения данных
// async function main() {
//   const eventsData = await fetchData();

//   if (eventsData) {
//     console.log('Полученные данные:', eventsData);
//     // Дальше вы можете обрабатывать данные, например, создавать слайды для слайдера
//     // ...
//   }
// }

// main();

// axios.defaults.baseURL =
//   'https://tasty-treats-backend.p.goit.global/api/events';
// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     Notiflix.Notify.failure('Something went wrong. Please try again later.');
//     return Promise.reject(error);
//   }
// );

// async function fetchMasterClasses() {
//   const response = await axios.get(`baseURL`);

//   return response.data;
// }

// export { fetchMasterClasses };
