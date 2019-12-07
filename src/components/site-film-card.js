import {utils} from "./site-utils";

const getFilmCardTemplate = (card) => {
  const {id, comments, filmInfo} = card;

  return `<article class="film-card" data-id="${id}">
          <h3 class="film-card__title">${filmInfo.title}</h3>
          <p class="film-card__rating">${filmInfo.totalRating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${filmInfo.release.date}</span>
            <span class="film-card__duration">${filmInfo.runtime}</span>
            <span class="film-card__genre">${filmInfo.genre}</span>
          </p>
          <img src="${filmInfo.poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${filmInfo.description}</p>
          <a class="film-card__comments">${comments.length} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`;
};

// export {getFilmCardTemplate};

export default class Card {
  constructor(card) {
    this._card = card;
    this._element = null;
  }

  getTemplate() {
    return getFilmCardTemplate(this._card);
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
