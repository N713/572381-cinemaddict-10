import {utils} from "./components/site-utils";
import {getProfileTemplate} from "./components/site-profile";
import {getSearchTemplate} from "./components/site-search";
import {getNavigationTemplate} from "./components/site-navigation";
import {getSortingTemplate} from "./components/site-sorting";
import {getFilmsSectionTemplate} from "./components/site-films-section";
import {getFilmsListTemplate} from "./components/site-films-list";
import {getTopRatedTemplate} from "./components/site-films-top";
import {getMostCommentedTemplate} from "./components/site-most-commented";
import {getFilmCardTemplate} from "./components/site-film-card";
import {getPopupTemplate} from "./components/site-film-popup";
import {filters} from "./mock/filters";
import {cards} from "./mock/card";

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

const NUMBER_OF_CARDS = 5;
const SHOW_BY_BUTTON = 5;
const NUMBER_OF_EXTRA_CARDS = 2;
const NUMBER_TO_SHOW = 20;

const renderElements = (elementsArray, elementsParent) => {
  elementsArray.forEach((element) => {
    utils.render(elementsParent, element, utils.Position.BEFOREEND);
  });
};

const renderCards = (array, from, to, parent) => {
  array.slice(from, to).forEach((element) => {
    utils.render(parent, utils.makeElement(getFilmCardTemplate(element)), utils.Position.BEFOREEND);
  });
};

const headerElements = [utils.makeElement(getSearchTemplate()), utils.makeElement(getProfileTemplate())];
renderElements(headerElements, header);

const mainElements = [utils.makeElement(getNavigationTemplate(filters)), utils.makeElement(getSortingTemplate()),
  utils.makeElement(getFilmsSectionTemplate())];
renderElements(mainElements, main);

const filmsSection = main.querySelector(`.films`);
const filmsSectionElements = [utils.makeElement(getFilmsListTemplate()), utils.makeElement(getTopRatedTemplate()),
  utils.makeElement(getMostCommentedTemplate())];
renderElements(filmsSectionElements, filmsSection);

const filmsList = filmsSection.querySelector(`.films-list .films-list__container`);
renderCards(cards, 0, NUMBER_OF_CARDS, filmsList);

let counter = NUMBER_OF_CARDS;

const showMoreButton = filmsSection.querySelector(`.films-list__show-more`);
showMoreButton.addEventListener(`click`, () => {
  const showedCards = counter;
  const cardsToShow = counter + SHOW_BY_BUTTON;
  counter += SHOW_BY_BUTTON;

  renderCards(cards, showedCards, cardsToShow, filmsList);

  if (counter >= NUMBER_TO_SHOW) {
    showMoreButton.remove();
  }
});

const extras = filmsSection.querySelectorAll(`.films-list--extra .films-list__container`);
const [topRated, mostCommented] = extras;
renderCards(cards, NUMBER_TO_SHOW, NUMBER_TO_SHOW + NUMBER_OF_EXTRA_CARDS, topRated);
renderCards(cards, NUMBER_TO_SHOW + NUMBER_OF_EXTRA_CARDS, NUMBER_TO_SHOW + 2 * NUMBER_OF_EXTRA_CARDS, mostCommented);

const body = document.querySelector(`body`);
utils.render(body, utils.makeElement(getPopupTemplate()), utils.Position.BEFOREEND);
const popup = body.querySelector(`.film-details`);
popup.classList.add(`visually-hidden`);
