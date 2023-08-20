import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper';
import { fetchMasterClass } from './apiTasty';

// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper-bundle.min.mjs';
// import Swiper, { Pagination, Navigation } from 'swiper';

const swiperContainerEl = document.querySelector('.swiper');
const swiperWrapperEl = document.querySelector('.swiper-wrapper');

async function renderGallery() {
  const masterClassData = await fetchMasterClass();

  if (masterClassData && masterClassData.length > 0) {
    const markup = masterClassData
      .map(item => {
        return `
          <div class="swiper-slide">
            <div class="event">
              <div class="cook" style="background-image: url(${item.cook.imgUrl});"></div>
              <div class="preview-deash-card">
                <div class="preview-deash" style="background-image: url(${item.topic.previewUrl});"></div>
                <p class="deash-name">${item.topic.name}</p>
                <p class="deash-area">${item.topic.area}</p>
              </div>
              <div class="deash" style="background-image: url(${item.topic.previewUrl});"></div>
            </div>
          </div>
        `;
      })
      .join('');

    swiperContainerEl.insertAdjacentHTML('beforeend', markup);
  }

  const swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
}
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

renderGallery();
