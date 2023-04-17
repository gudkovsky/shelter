const toggleButton = document.querySelector('.header__nav button')
const toggleNavList = document.querySelector('.nav__list')

const toggleActiveButton = function () {
  toggleButton.classList.toggle('active')
  toggleNavList.classList.toggle('active')
  document.body.classList.toggle('body__modal-open')
}

toggleButton.addEventListener('click', toggleActiveButton)

document.addEventListener('click', (evt) => {
  if (evt.target !== toggleNavList && evt.target !== toggleButton) {
    toggleButton.classList.remove('active')
    toggleNavList.classList.remove('active')
    document.body.classList.remove('body__modal-open')
  }
})
