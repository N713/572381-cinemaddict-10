import {utils} from "./site-utils";

const getTopRatedTemplate = () => {
  return `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>`;
};

export default class TopRatedFilmsComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return getTopRatedTemplate();
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
