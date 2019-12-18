import {utils} from "../components/site-utils";

const mainElement = document.querySelector(`.main`);

export default class PageController {
  constructor(container, cards, start, end) {
    this._container = container;
    this._cards = cards;
    this._start = start;
    this._end = end;
  }

  init() {
    utils.renderCards(this._cards, this._start, this._end, this._container);

    const filters = mainElement.querySelectorAll(`.sort__button`);
    const dataAtributes = [`default`, `by-date`, `by-rating`];

    for (let i = 0; i < filters.length; i++) {
      filters[i].setAttribute(`data-sorting`, dataAtributes[i]);
    }

    mainElement.querySelector(`.sort`)
      .addEventListener(`click`, (evt) => this._onSortingClick(evt));
  }

  _onDataChange(newData, oldData) {
    this._cards[this._cards.findIndex((index) => index === oldData)] = newData;
    this._container.querySelectorAll(`.film-card`).forEach((card) => {
      card.remove();
    });
    this._container.querySelector(`.films-list__show-more`).remove();
  }

  _onSortingClick(evt) {
    evt.preventDefault();

    if (evt.target.tagName !== `A`) {
      return;
    }

    this._container.innerHTML = ``;

    if (!evt.target.classList.contains(`sort__button--active`)) {
      let currentFilter = mainElement.querySelector(`.sort__button--active`);
      currentFilter.classList.remove(`sort__button--active`);
      evt.target.classList.add(`sort__button--active`);
    }

    switch (evt.target.dataset.sorting) {
      case `default`:
        const defaultData = this._cards.slice();
        utils.renderCards(defaultData, this._start, this._end, this._container);
        break;
      case `by-date`:
        const sortedByDate = this._cards.slice().sort((a, b) => b.filmInfo.release.date - a.filmInfo.release.date);
        utils.renderCards(sortedByDate, this._start, this._end, this._container);
        break;
      case `by-rating`:
        const sortedByRating = this._cards.slice().sort((a, b) => b.filmInfo.totalRating - a.filmInfo.totalRating);
        utils.renderCards(sortedByRating, this._start, this._end, this._container);
        break;
    }
  }
}

