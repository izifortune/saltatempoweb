import { closest } from './utils'

let f = document.querySelectorAll('.first-triangle');

[...f].forEach((el) => {
  el.addEventListener('click', (event) => {
    let parent = event.target.parentElement;
    if (parent.classList.contains('.full-second')) {
      parent.classList.remove('full-second');
    }
    parent.classList.toggle('full-first');
  }, true);
});

let s = document.querySelectorAll('.second-triangle');

[...s].forEach((el) => {
  el.addEventListener('click', (event) => {
    let parent = event.target.parentElement;
    if (parent.classList.contains('.full-first')) {
      parent.classList.remove('full-first');
    }
    parent.classList.toggle('full-second');
  }, true);
});

let btns = document.querySelectorAll('.btn-close');

[...btns].forEach((el) => {
  el.addEventListener('click', (event) => {
    let parent = closest(el, '.lineup-singolo');
    parent.classList.remove('full-first');
    parent.classList.remove('full-second');
  }, true);
});

