import {utils} from "./site-utils";

const getShowMoreButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class ShowMoreButtonComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return getShowMoreButtonTemplate();
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

