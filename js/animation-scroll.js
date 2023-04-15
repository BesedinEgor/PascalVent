function onEntry(entry) {
  entry.forEach((change) =>
    change.target.classList.toggle("element-show", change.isIntersecting)
  );
}

const options = { threshold: 0.3 };
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll(
  ".header__box-title, .header__description, .header__contacts, .header__application, .services__text, .services__options-wrapper, .application__title-box, .steps__title-box, .steps__offer, .feedback, .about__wrapper, .about__items, .skills, .schematic, .portfolio__title-box, .portfolio__content, .customers"
);

elements.forEach((elm) => observer.observe(elm));
