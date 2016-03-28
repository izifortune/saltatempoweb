export default class Modal {
  constructor () {
  }

  init () {
    this.modalDiv = document.createElement('div')
    this.modalDivWrapper = document.createElement('div')
    this.modalDivWrapper.classList.add('modal__wrapper')
    this.modalDiv.appendChild(this.modalDivWrapper)
    this.modalDiv.classList.add('modal')
    this.modalDiv.style.display = 'none'
    document.body.appendChild(this.modalDiv);
  }

  offClick (event) {
    this.close()
  }

  onClick (event) {
    event.stopPropagation()
  }

  cleanup () {
    let el = document.getElementsByClassName('modal')[0]
    if (el) {
      el.parentNode.removeChild(el)
    }
  }

  openPhoto (url) {
    this.cleanup()
    this.init()
    let content = new Image();
    content.src = url;
    document.body.classList.add('modal-open')
    this.modalDivWrapper.appendChild(content)
    this.modalDiv.style.display = 'block'
    this.modalDivWrapper.classList.add('animated', 'fadeIn')
    this.modalDivWrapper.addEventListener('click', this.onClick.bind(this))
    this.modalDivWrapper.classList.add('modal__wrapper--photo')
    document.addEventListener('click', this.offClick.bind(this))
  }

  open (selector, clone = true) {
    this.cleanup()
    let content = document.querySelectorAll(selector)[0].cloneNode(true)
    document.body.classList.add('modal-open')
    this.modalDivWrapper.appendChild(content)
    this.modalDiv.style.display = 'block'
    this.modalDivWrapper.classList.add('animated', 'fadeIn')
    document.addEventListener('click', this.offClick.bind(this))
    this.modalDivWrapper.addEventListener('click', this.onClick.bind(this))
  }

  close () {
    this.modalDiv.style.display = 'none'
    document.body.classList.remove('modal-open')
    document.removeEventListener('click', this.offClick)
    this.modalDivWrapper.removeEventListener('click', this.onClick)
  }
}
