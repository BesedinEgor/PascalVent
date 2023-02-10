//открытие/закрытие меню
const burgerBtn = document.querySelector(".header__burger-btn");
const nav = document.querySelector(".nav");
const hundlerClick = (event) => {
  nav.classList.toggle("nav-open");
  event.preventDefault();
};

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

burgerBtn.addEventListener("click", hundlerClick);

//переключение табов

const tabButton = document.querySelectorAll(".services__btn");
const tabContent = document.querySelectorAll(".services__options-content");

tabButton.forEach(function (element) {
  element.addEventListener("click", openContent);
});

function openContent(evt) {
  const tabTarget = evt.currentTarget; //элемент по которому нажали
  const button = tabTarget.dataset.button; //кнопка с дата-атрибутом

  tabButton.forEach(function (item) {
    item.classList.remove("services__btn--active");
  });

  tabContent.forEach(function (item) {
    item.classList.remove("services__options-content--active");
  });

  tabTarget.classList.add("services__btn--active");

  document
    .querySelector(`#${button}`)
    .classList.add("services__options-content--active");
}
