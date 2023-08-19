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

// async function main() {
//   const masterClassData = await fetchMasterClass();
// }

// main();

// const swiperContainerEl = document.querySelector('.swiper-container');
// // const swiperWrapperEl = document.querySelector('.swiper-wrapper');

// function renderGallery(masterClasses) {
//   const markup = masterClasses
//     .map(masterClass => {
//       return `<div class="swiper-slide" id="crutch">
//   <div class="event">
//     <div class="cook" style="background-image: url({{cook.imgUrl}});">
//     </div>
//     <div class="preview-deash-card" >
//       <div class="preview-deash" style="background-image: url({{topic.previewUrl}});"></div>
//       <p class="deash-name">
//         {{topic.name}}
//       </p>
//       <p class="deash-area">
//         {{topic.area}}
//       </p>
//     </div>
//     <div class="deash" style="background-image: url({{topic.previewUrl}});">
//     </div>
//   </div>
//   </div>
//   `;
//     })
//     .join('');
//   swiperContainerEl.insertAdjacentHTML('beforeend', markup);
// }
