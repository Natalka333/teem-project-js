(() => {
  const refs = {
    openOrgerBtn: document.querySelector('[data-order-open]'),
    closeOrgerBtn: document.querySelector('[data-order-close]'),
    order: document.querySelector('[data-order]'),
  };

  refs.openOrgerBtn.addEventListener('click', toggleOrger);
  refs.closeOrgerBtn.addEventListener('click', toggleOrger);

  function toggleOrger() {
    refs.order.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
