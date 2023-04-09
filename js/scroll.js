//фиксирование шапки при скролле лендинга
const headerNav = document.querySelector('.header__container');
const first = document.querySelector('.services');
const header = document.querySelector('header')

const headerHeight = headerNav.offsetHeight;
const firstHeight = first.offsetHeight;
console.log(headerHeight);

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= firstHeight + headerHeight) {
    headerNav.classList.add("header--fixed");
    header.classList.add('header--fix');
  } else {
    headerNav.classList.remove("header--fixed");
    header.classList.remove("header--fix");
  }
});
