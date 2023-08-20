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

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

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
  },
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
