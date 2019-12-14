import AbstractComponent from "./site-abstract-component";

const getFilmsSectionTemplate = () => {
  return `<section class="films"></section>`;
};

export default class FilmsSectionComponent extends AbstractComponent {
  getTemplate() {
    return getFilmsSectionTemplate();
  }
}
