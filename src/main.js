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

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

const NUMBER_OF_CARDS = 5;
const NUMBER_OF_EXTRA_CARDS = 2;

const renderElements = (elementsArray, elementsParent) => {
  elementsArray.forEach((element) => {
    utils.render(elementsParent, element, utils.Position.BEFOREEND);
  });
};

const headerElements = [utils.makeElement(getSearchTemplate()), utils.makeElement(getProfileTemplate())];
renderElements(headerElements, header);

const mainElements = [utils.makeElement(getNavigationTemplate()), utils.makeElement(getSortingTemplate()),
  utils.makeElement(getFilmsSectionTemplate())];
renderElements(mainElements, main);


const filmsSection = main.querySelector(`.films`);
const filmsSectionElements = [utils.makeElement(getFilmsListTemplate()), utils.makeElement(getTopRatedTemplate()),
  utils.makeElement(getMostCommentedTemplate())];
renderElements(filmsSectionElements, filmsSection);

const filmsList = filmsSection.querySelector(`.films-list .films-list__container`);

for (let i = 0; i < NUMBER_OF_CARDS; i++) {
  utils.render(filmsList, utils.makeElement(getFilmCardTemplate()), utils.Position.BEFOREEND);
}

const extras = filmsSection.querySelectorAll(`.films-list--extra .films-list__container`);
const [topRated, mostCommented] = extras;

for (let i = 0; i < NUMBER_OF_EXTRA_CARDS; i++) {
  utils.render(topRated, utils.makeElement(getFilmCardTemplate()), utils.Position.BEFOREEND);
  utils.render(mostCommented, utils.makeElement(getFilmCardTemplate()), utils.Position.BEFOREEND);
}

const body = document.querySelector(`body`);

utils.render(body, utils.makeElement(getPopupTemplate()), utils.Position.BEFOREEND);

const popup = body.querySelector(`.film-details`);
popup.classList.add(`visually-hidden`);
