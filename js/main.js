import Siema from 'siema';

const siema = new Siema({
  duration: 200,
  easing: 'ease-out',
  loop: true
});

document.querySelector('.content__home-slider--left').addEventListener('click', () => siema.prev())
document.querySelector('.content__home-slider--right').addEventListener('click', () => siema.next())

const animationTime = 400
const welcomeButton = document.querySelector('a.welcome__button')

welcomeButton.addEventListener('click', () => {
  const header = document.querySelector('header.welcome__header')
  const container = document.querySelector('div.welcome__container')
  const body = document.querySelector('body')

  header.animate([{
      height: '100vh'
    },
    {
      height: '0vh'
    }
  ], {
    duration: animationTime
  })

  container.animate([{
      opacity: 1
    },
    {
      opacity: 0
    }
  ], {
    duration: animationTime
  })

  window.setTimeout(() => {
    header.style.height = '0vh'
    container.style.display = 'none'
    body.style.overflow = 'auto'
  }, animationTime)
})

const nav = document.querySelector('.navbar__main')

window.addEventListener('load', () => {
  if (window.location.hash) {
    welcomeButton.click()

    // if (window.location.hash !== '#home') {
      setTimeout(() => {
        window.scroll({
          top: document.querySelector(window.location.hash).offsetTop - nav.offsetHeight,
          behavior: 'smooth'
        })
      }, 1000);
    // }
  }
})

const home = document.querySelector('#home')
const sobre = document.querySelector('#about')

document.querySelector('.navbar__item-link[href="#home"]').addEventListener('click', event => {
  event.preventDefault()
  window.scroll({
    top: home.offsetTop - nav.offsetHeight,
    behavior: 'smooth'
  })
})

document.querySelector('.navbar__item-link[href="#about"]').addEventListener('click', event => {
  event.preventDefault()
  window.scroll({
    top: sobre.offsetTop - nav.offsetHeight,
    behavior: 'smooth'
  })
})
