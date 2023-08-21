import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import Swiper from 'swiper';

import { fetchMasterClass } from './tastyApi';

fetchMasterClass()
  .then(data => {
    createMarkupSwiper(data);
  })
  .catch(error => console.log(error));

function createMarkupSwiper(arrSliders) {
  const swiperWrapperEl = document.querySelector('.swiper-wrapper');

  swiperWrapperEl.insertAdjacentHTML(
    'beforeend',
    arrSliders
      .map(
        ({ cook, topic }) =>
          `<div class="swiper-slide" id="twist">
            <div class="hero">
              <div class="cook" style="background-image: url(${cook.imgUrl});"></div>
              <div class="preview-dish-card">
                <div class="preview-dish" style="background-image: url(${topic.previewUrl});"></div>
                <p class="dish-name">${topic.name}</p>
                <p class="dish-area">${topic.area}</p>
              </div>
              <div class="dish" style="background-image: url(${topic.previewUrl});"></div>
            </div>
          </div>`
      )

      .join('')
  );
}

const swiper = new Swiper('.image-slider', {
  modules: [Pagination, Navigation],
  allowSlideNext: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 1500,
  },
  speed: 800,
  loop: true,
});

// fetchMasterClass()
//   .then(data => {
//     createMarkupSwiper(data);
//   })
//   .catch(error => console.log(error));

// function createMarkupSwiper(arrSliders) {
//   const swiperWrapperEl = document.querySelector('.swiper-wrapper');

//   swiperWrapperEl.insertAdjacentHTML(
//     'beforeend',
//     arrSliders
//       .map(
//         ({ cook, topic }) =>
//           `<div class="swiper-slide" id="twist">
//             <div class="hero">
//               <div class="cook" style="background-image: url(${cook.imgUrl});"></div>
//               <div class="preview-dish-card">
//                 <div class="preview-dish" style="background-image: url(${topic.previewUrl});"></div>
//                 <p class="dish-name">${topic.name}</p>
//                 <p class="dish-area">${topic.area}</p>
//               </div>
//               <div class="dish" style="background-image: url(${topic.previewUrl});"></div>
//             </div>
//           </div>`
//       )

//       .join('')
//   );
// }
