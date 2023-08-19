import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { fetchMasterClass } from './apiTasty';

const swiperContainerEl = document.querySelector('.swiper-container');

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

    swiperContainerEl.innerHTML = markup;
  }

  // const allInContainer = document.querySelector('.event');

  // fetchMasterClass().then(data => {
  //   allInContainer.insertAdjacentHTML('beforeend', renderGallery);
  // });
  const swiper = new Swiper('.swiper-container', {
    modules: [Pagination, Navigation, Autoplay],
    allowSlideNext: true,
    pagination: {
      el: '.page',
      clickable: true,
    },
    autoplay: {
      delay: 1500,
    },
    speed: 800,
    loop: true,
  });
}
// renderGallery();
