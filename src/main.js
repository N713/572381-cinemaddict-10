import {utils} from "./components/site-utils";
import {filters} from "./mock/filters";
import {cards} from "./mock/card";

import FilmsSectionComponent from "./components/site-films-section";
import TopRatedFilmsComponent from "./components/site-films-top";
import MostCommentedFilmsComponent from "./components/site-most-commented";
import NavigationComponent from "./components/site-navigation";
import SearchComponent from "./components/site-search";
import ProfileComponent from "./components/site-profile";
import SortingComponent from "./components/site-sorting";
import FilmsListComponent from "./components/site-films-list";
import ShowMoreButtonComponent from "./components/site-show-more-button";
import PopupComponent from "./components/site-film-popup";

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

const NUMBER_OF_CARDS = 5;
const SHOW_BY_BUTTON = 5;
const NUMBER_OF_EXTRA_CARDS = 2;
const NUMBER_TO_SHOW = 20;

const headerElements = [new SearchComponent().getElement(), new ProfileComponent().getElement()];
utils.renderElements(headerElements, header);

const mainElements = [new NavigationComponent(filters).getElement(), new SortingComponent().getElement(),
  new FilmsSectionComponent().getElement()];
utils.renderElements(mainElements, main);

const filmsSection = main.querySelector(`.films`);
const filmsSectionElements = [new FilmsListComponent().getElement(), new TopRatedFilmsComponent().getElement(),
  new MostCommentedFilmsComponent().getElement()];
utils.renderElements(filmsSectionElements, filmsSection);

const filmsList = filmsSection.querySelector(`.films-list`);
const filmsListContainer = filmsSection.querySelector(`.films-list .films-list__container`);
utils.render(filmsList, new ShowMoreButtonComponent().getElement(), utils.Position.BEFOREEND);
utils.renderCards(cards, 0, NUMBER_OF_CARDS, filmsListContainer);

const extras = filmsSection.querySelectorAll(`.films-list--extra .films-list__container`);
const [topRated, mostCommented] = extras;
utils.renderCards(cards, NUMBER_TO_SHOW, NUMBER_TO_SHOW + NUMBER_OF_EXTRA_CARDS, topRated);
utils.renderCards(cards, NUMBER_TO_SHOW + NUMBER_OF_EXTRA_CARDS, NUMBER_TO_SHOW + 2 * NUMBER_OF_EXTRA_CARDS, mostCommented);

const body = document.querySelector(`body`);
utils.render(body, new PopupComponent(cards[cards.length - 1]).getElement(), utils.Position.BEFOREEND);
const popup = body.querySelector(`.film-details`);
popup.classList.add(`visually-hidden`);

const allCards = document.querySelectorAll(`.film-card`);
allCards.forEach((card) => {
  card.addEventListener(`click`, (evt) => {
    popup.classList.remove(`visually-hidden`);
  });
});

body.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Escape` || evt.key === `Esc` && !popup.classList.contains(`visually-hidden`)) {
    popup.classList.add(`visually-hidden`);
  }
});

const closePopupButton = popup.querySelector(`.film-details__close-btn`);
closePopupButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  popup.classList.add(`visually-hidden`);
});

let counter = NUMBER_OF_CARDS;

const showMoreCards = () => {
  const showedCards = counter;
  const cardsToShow = counter + SHOW_BY_BUTTON;
  counter += SHOW_BY_BUTTON;

  utils.renderCards(cards, showedCards, cardsToShow, filmsListContainer);

  if (counter >= NUMBER_TO_SHOW) {
    showMoreButton.remove();
  }
};

const showMoreButton = filmsSection.querySelector(`.films-list__show-more`);
showMoreButton.addEventListener(`click`, showMoreCards);
