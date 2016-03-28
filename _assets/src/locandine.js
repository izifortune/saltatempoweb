import Modal from './modal'

//Modal setup
window.addEventListener('DOMContentLoaded', () => {
  let sel = document.querySelectorAll('.locandina');
  [...sel].forEach((el, index) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      new Modal().openPhoto(event.currentTarget.href);
      // function checkKey(e) {

      //   e = e || window.event;

      //   if (e.keyCode == '37') {
      //     // left arrow
      //   }
      //   else if (e.keyCode == '39') {
      //     // right arrow
      //   }
      // }
    }, true);
  });
});
