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
import PageController from "./controllers/page-controller";
import MovieController from "./controllers/site-movie-controller";

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

const filmsController = new PageController(filmsListContainer, cards, 0, NUMBER_OF_CARDS);
filmsController.init();

const extras = filmsSection.querySelectorAll(`.films-list--extra .films-list__container`);
const [topRated, mostCommented] = extras;

const topController = new PageController(topRated, cards, NUMBER_TO_SHOW, NUMBER_TO_SHOW + NUMBER_OF_EXTRA_CARDS);
topController.init();

const mostCommentedController = new PageController(mostCommented, cards
  , NUMBER_TO_SHOW + NUMBER_OF_EXTRA_CARDS, NUMBER_TO_SHOW + 2 * NUMBER_OF_EXTRA_CARDS);
mostCommentedController.init();

const body = document.querySelector(`body`);
const movieController = new MovieController(cards, filmsController._onDataChange.bind(filmsController));
movieController.init();

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

export {body};
