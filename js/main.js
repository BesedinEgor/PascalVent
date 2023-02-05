//открытие/закрытие меню
const burgerBtn = document.querySelector(".header__burger-btn");
const nav = document.querySelector('.nav')
const hundlerClick = (event) => {
    nav.classList.toggle('nav-open')
    event.preventDefault();
}

//закрытие меню при клике вне меню 
document.addEventListener("click", function (event) {
  const target = event.target;
  const its_menu = target == nav || nav.contains(target);
  const its_burgerBtn = target == burgerBtn;
  const menu_is_active = nav.classList.contains("nav-open");

  if (!its_menu && !its_burgerBtn && menu_is_active) {
    hundlerClick();
  }
});

burgerBtn.addEventListener('click', hundlerClick)
