import {} from './order';
// import 'swiper/swiper-bundle.min.css';
// import Swiper from 'swiper';
import { fetchMasterClass } from './apitasty';

const swiperContainerEl = document.querySelector('.swiper-container');
// const swiperWrapperEl = document.querySelector('.swiper-wrapper');

function renderGallery(masterClasses) {
  const markup = masterClasses
    .map(masterClass => {
      return `<div class="swiper-slide" id="crutch">
  <div class="event">
    <div class="cook" style="background-image: url({{cook.imgUrl}});">
    </div>
    <div class="preview-deash-card" >
      <div class="preview-deash" style="background-image: url({{topic.previewUrl}});"></div>
      <p class="deash-name">
        {{topic.name}}
      </p>
      <p class="deash-area">
        {{topic.area}}
      </p>
    </div>
    <div class="deash" style="background-image: url({{topic.previewUrl}});">
    </div>
  </div>
  </div>
  `;
    })
    .join('');
  swiperContainerEl.insertAdjacentHTML('beforeend', markup);
}

async function main() {
  const masterClassData = await fetchMasterClass();
}

main();
