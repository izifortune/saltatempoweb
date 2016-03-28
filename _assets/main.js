import Headroom from 'headroom.js'
import picturefill from 'picturefill'

import './scss/main.scss'

import iframe from './src/iframe'
import './src/lineup'
import './src/locandine'

//HEADROOM
let myElement = document.querySelector('header');
// construct an instance of Headroom, passing the element
let headroom  = new Headroom(myElement, {
  "offset": 62,
  "classes": {
    "initial": "headroom",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});
// initialise
headroom.init(); 

//Animation off on page load
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
}, false);
