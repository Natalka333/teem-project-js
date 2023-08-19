(() => {
  const refs = {
    openOrderBtn: document.querySelector('[data-order-open]'),
    closeOrgerBtn: document.querySelector('[data-order-close]'),
    order: document.querySelector('[data-order]'),
  };

  refs.openOrgerBtn.addEventListener('click', toggleOrder);
  refs.closeOrgerBtn.addEventListener('click', toggleOrder);

  function toggleOrger() {
    refs.order.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();