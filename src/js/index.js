import {} from './modal';
import 'swiper/swiper-bundle.min.css'; // Импорт стилей Swiper.js
import Swiper from 'swiper'; // Импорт Swiper.js без бандла
import { fetchImages } from './apitasty';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    // Опции Swiper
  });
});
// const masterClasses = [
//   {
//     title: 'Мастер-класс 1',
//     imageUrl: 'ссылка_на_изображение_1',
//     link: 'ссылка_на_мастер_класс_1',
//   },
//   {
//     title: 'Мастер-класс 2',
//     imageUrl: 'ссылка_на_изображение_2',
//     link: 'ссылка_на_мастер_класс_2',
//   },
//   // ...
// ];

// // Создание слайдов с данными о мастер-классах
// const slideHTML = masterClasses
//   .map(
//     masterClass => `
//    <div class="swiper-slide" id="crutch">
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
// </div>
//   `
//   )
//   .join('');

// // Инициализация Swiper
// document.addEventListener('DOMContentLoaded', function () {
//   const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });

//   // Добавление слайдов в контейнер
//   swiper.insertAdjacentHTML(slideHTML);
// });
