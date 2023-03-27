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

//активация кнопки формы при заполненных полях ввода
const inputs = [].slice.call(document.querySelectorAll('input[type="text"], input[type="tel"]')),
button = document.querySelector('.feedback__submit'), footerButton = document.querySelector('.footer-feedback__submit') ;

inputs.forEach(function(el){
  el.addEventListener('input', checkInputs, false);
});

function checkInputs(){
	const empty = inputs.filter(function(el){
    return el.value.trim() === '';
  }).length; 

  button.disabled = empty !==2;
  footerButton.disabled = empty !==2;
}
checkInputs();

//закрытие/открытие поп-ап "Связаться"
const openPopUp = document.getElementById('popup-open');
const closePopUp = document.getElementById('pop-up-close');
const popUp = document.getElementById('pop-up');
const body = document.querySelector('body');

openPopUp.addEventListener('click', (e) => {
  e.preventDefault();
  popUp.classList.add('popup--active')
  body.style.overflowY = 'hidden';
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('popup--active')
  body.style.overflowY = 'visible';
})

//закрытие/открытие поп-ап "Оставить заявку"

const openPopupFeedback = document.querySelector('.header__application');
const closePopupFeedback  = document.querySelector('.popup-feedback__close');
const popup = document.querySelector('.popup-feedback');

openPopupFeedback.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('popup-feedback--active')
  body.style.overflowY = 'hidden';
})

closePopupFeedback.addEventListener('click', () => {
  popup.classList.remove('popup-feedback--active')
  body.style.overflowY = 'visible';
})