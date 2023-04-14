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

//активация/деактивация кнопки формы при заполненных полях ввода c проверкой на пустоту и валидность
const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  const nameInput = form.querySelector('input[type="text"]');
  const phoneInput = form.querySelector('input[type="tel"]');
  const submitButton = form.querySelector('button[type="submit"]');

  nameInput.addEventListener("input", checkFormValidity);
  phoneInput.addEventListener("input", checkFormValidity);

  function checkFormValidity() {
    if (nameInput.validity.valid && isValidPhone(phoneInput.value)) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }
});

function isValidPhone(phone) {
  // проверяем, что номер телефона соответствует заданному формату
  const phoneRegex = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
  return phoneRegex.test(phone);
}

//закрытие/открытие поп-ап "Связаться"
const openPopUp = document.getElementById("popup-open");
const closePopUp = document.getElementById("pop-up-close");
const popUp = document.getElementById("pop-up");
const body = document.querySelector("body");

openPopUp.addEventListener("click", (e) => {
  e.preventDefault();
  popUp.classList.add("popup--active");
  body.style.overflowY = "hidden";
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("popup--active");
  body.style.overflowY = "visible";
});

//закрытие/открытие поп-ап "Оставить заявку"
const openPopupFeedback = document.querySelectorAll(
  ".header__application, .skills__feedback"
);
const closePopupFeedback = document.querySelector(".popup-feedback__close");
const popup = document.querySelector(".popup-feedback");

openPopupFeedback.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("popup-feedback--active");
    body.style.overflowY = "hidden";
  });
});

closePopupFeedback.addEventListener("click", () => {
  popup.classList.remove("popup-feedback--active");
  body.style.overflowY = "visible";
});
