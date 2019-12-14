import AbstractComponent from "./site-abstract-component";

const getShowMoreButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class ShowMoreButtonComponent extends AbstractComponent {
  getTemplate() {
    return getShowMoreButtonTemplate();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`submit`, handler);
  }
}

