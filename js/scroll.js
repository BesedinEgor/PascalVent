//фиксирование шапки при скролле лендинга
const headerNav = document.querySelector('.header__container');
const first = document.querySelector('.main');

const headerHeight = headerNav.offsetHeight;
const firstHeight = first.offsetHeight;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  console.log(scrollDistance)

  if(scrollDistance >= 918) {
    headerNav.classList.add('header--fixed');
  } else {
    headerNav.classList.remove('header--fixed');
  }
});
