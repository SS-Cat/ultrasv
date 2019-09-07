import Siema from 'siema';

const siema = new Siema({
  duration: 200,
  easing: 'ease-out',
  loop: true
});

document.querySelector('.content__home-slider--left').addEventListener('click', () => siema.prev())
document.querySelector('.content__home-slider--right').addEventListener('click', () => siema.next())

const animationTime = 400

document.querySelector('a.welcome__button').addEventListener('click', () => {
  const header = document.querySelector('header.welcome__header')
  const container = document.querySelector('div.welcome__container')
  const body = document.querySelector('body')

  header.animate([
    { height: '100vh' },
    { height: '0vh' }
  ], { duration: animationTime })

  container.animate([
    { opacity: 1 },
    { opacity: 0 }
  ], { duration: animationTime })

  window.setTimeout(() => {
    header.style.height = '0vh'
    container.style.display = 'none'
    body.style.overflow = 'auto'
  },animationTime)
})
