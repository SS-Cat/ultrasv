import Siema from 'siema';

const siema = new Siema({
  duration: 200,
  easing: 'ease-out',
  loop: true
});

const siema2 = new Siema({
  selector: '.siema2',
  duration: 300,
  easing: 'cubic-bezier(1, -0.015, 1, -0.025)',
  loop: true,
  onChange() {
    setTimeout(() => {
      document.querySelectorAll('.content__products-item').forEach(e => e.style.opacity = 1)
    }, 500)
  }
});

document.querySelector('.content__home-slider--left').addEventListener('click', () => siema.prev())
document.querySelector('.content__home-slider--right').addEventListener('click', () => siema.next())

document.querySelectorAll('.content__products-slider-button--left').forEach(e => {

  e.addEventListener('click', () => {
    document.querySelectorAll('.content__products-item').forEach(e => e.style.opacity = 0)
    siema2.prev()
  })
})
document.querySelectorAll('.content__products-slider-button--right').forEach(e => {
  e.addEventListener('click', () => {
    document.querySelectorAll('.content__products-item').forEach(e => e.style.opacity = 0)
    siema2.next()
  })
})

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
  if ('scrollRestoration' in history) {
    // Back off, browser, I got this...
    history.scrollRestoration = 'manual';
  }

  if (window.location.hash) {
    welcomeButton.click()

    setTimeout(() => {
      window.scroll({
        top: document.querySelector(window.location.hash).offsetTop - nav.offsetHeight,
        behavior: 'smooth'
      })
    }, 1000);
  }
})

const navItems = [
  '#home',
  '#about',
  '#partners',
  '#products',
  '#contact',
]

navItems.forEach(item => {

  const itemNode = document.querySelector(item)

  document.querySelector(`.navbar__item-link[href="${item}"]`).addEventListener('click', event => {
    event.preventDefault()
    window.location.hash = item
    window.scroll({
      top: itemNode.offsetTop - nav.offsetHeight,
      behavior: 'smooth'
    })
  })
})
