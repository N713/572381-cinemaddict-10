import {utils} from "./site-utils";

const getFilmsSectionTemplate = () => {
  return `<section class="films"></section>`;
};

export default class FilmsSectionComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return getFilmsSectionTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = utils.makeElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
