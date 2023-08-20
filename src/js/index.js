import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper';
import { fetchMasterClass } from './apiTasty';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min.mjs';
// import Swiper, { Pagination, Navigation } from 'swiper';

// const swiperContainerEl = document.querySelector('.swiper');
const swiperWrapperEl = document.querySelector('.swiper-wrapper');

async function renderGallery() {
  const masterClassData = await fetchMasterClass();

  if (masterClassData && masterClassData.length > 0) {
    const markup = masterClassData
      .map(item => {
        return `
          <div class="swiper-slide" id=""twist">
            <div class="hero">
              <div class="cook" style="background-image: url(${item.cook.imgUrl});">
							</div>
              <div class="preview-dish-card">
                <div class="preview-dish" style="background-image: url(${item.topic.previewUrl});"></div>
                <p class="dish-name">${item.topic.name}</p>
                <p class="dish-area">${item.topic.area}</p>
              </div>
              <div class="dish" style="background-image: url(${item.topic.previewUrl});"></div>
            </div>
          </div>
        `;
      })
      .join('');

    swiperWrapperEl.insertAdjacentHTML('beforeend', markup);
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

  const swiper = new Swiper('image-slider', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
renderGallery();
