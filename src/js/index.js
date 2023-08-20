import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper';
import { fetchMasterClass } from './tastyApi';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min.mjs';
// import Swiper, { Pagination, Navigation } from 'swiper';

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
          `<div class="hero_swiper-slide">
                <div class=" hero_slider-images">
                    <div class="hero_image-container-1"><img class="image-1" src=${cook.imgUrl} alt=${cook.name}></div>
                    <div class="hero_image-container-2">
                        <img class="hero_image-2" src=${topic.previewUrl} alt=${cook.name}>
                        <h2 class="hero_image-title">${topic.name}</h2>
                        <p class="hero_image-descraption">${topic.area}</p>
                    </div>
                    <div class="hero_image-container-3"><img class="image-3" src=${topic.imgUrl} alt=${cook.name}></div>
                </div>
            </div>`
      )

      .join('')
  );
}

// const swiper = new Swiper('.image-slider', {
//   modules: [Pagination, Navigation, Autoplay],
//   allowSlideNext: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   autoplay: {
//     delay: 1500,
//   },
//   speed: 800,
//   loop: true,
// });

const swiper = new Swiper('hero', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
