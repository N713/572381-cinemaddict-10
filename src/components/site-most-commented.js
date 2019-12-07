import {utils} from "./site-utils";

const getMostCommentedTemplate = () => {
  return `<section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
    </section>`;
};

export default class MostCommentedFilmsComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return getMostCommentedTemplate();
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
