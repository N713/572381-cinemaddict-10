import {utils} from "../components/site-utils";

const COMMENTS_NUMBER = 4;
const NUMBER_OF_TITLES = 7;
const STRINGS_TO_DESCRIPTION = 3;
const NUMBER_OF_CARDS = 20;
const NUMBER_OF_EXTRAS = 2;
const NUMBER_OF_POPUPS = 1;

const getPoster = () => {
  return [
    `./images/posters/made-for-each-other.png`,
    `./images/posters/popeye-meets-sinbad.png`,
    `./images/posters/sagebrush-trail.jpg`,
    `./images/posters/santa-claus-conquers-the-martians.jpg`,
    `./images/posters/the-dance-of-life.jpg`,
    `./images/posters/the-great-flamarion.jpg`,
    `./images/posters/the-man-with-the-golden-arm.jpg`
  ][utils.getRandomIntegerUnder(NUMBER_OF_TITLES)];
};

const getTitle = () => {
  return [
    `Made For Each Other`,
    `Popeye Meets Sindbad`,
    `Sagebrush Trail`,
    `Santa Claus Conquers The Martians`,
    `The Dance Of Life`,
    `The Great Flamarion`,
    `The Man With The Golden Arm`
  ][utils.getRandomIntegerUnder(NUMBER_OF_TITLES)];
};

const getRating = () => {
  return [8.1, 7.5, 6.8, 7.7, 9.0, 1.2, 5.5][utils.getRandomIntegerUnder(NUMBER_OF_TITLES)];
};

const getYear = () => {
  return [1929, 1956, 1977, 2002, 1993, 1961, 1985][utils.getRandomIntegerUnder(NUMBER_OF_TITLES)];
};

const getDuration = () => {
  return utils.minutesToHours([124, 136, 142, 112, 137, 141, 55][utils.getRandomIntegerUnder(NUMBER_OF_TITLES)]);
};

const getGenre = () => {
  return [`comedy`, `musical`, `action`, `drama`, `thriller`, `horror`, `documental`][utils.getRandomIntegerUnder(NUMBER_OF_TITLES)];
};

const getDescription = () => {
  return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
  Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.
  Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.
  `.split(`.`, utils.avoidZero(utils.getRandomIntegerUnder(STRINGS_TO_DESCRIPTION)));
};

const getCommentsData = () => ({
  author: [
    `Tim Macoveev`,
    `John Doe`,
    `Don Joe`,
    `Bon Boe`,
    `Ron Chloe`][utils.getRandomIntegerUnder(COMMENTS_NUMBER)],
  text: [
    `Interesting setting and a good cast`,
    `Booooooooooring`,
    `Very very old. Meh`,
    `Almost two hours? Seriously?`
  ][utils.getRandomIntegerUnder(COMMENTS_NUMBER)],
  date: Date.now() - (1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000),
  emoji: [
    `./images/emoji/smile.png`,
    `./images/emoji/sleeping.png`,
    `./images/emoji/puke.png`,
    `./images/emoji/angry.png`,
  ][utils.getRandomIntegerUnder(COMMENTS_NUMBER)],
});

const getCard = (index) => ({
  id: index,
  comments: new Array(NUMBER_OF_TITLES).fill(``).map(getCommentsData),
  filmInfo: {
    title: getTitle(),
    alternativeTitle: getTitle(),
    totalRating: getRating(),
    poster: getPoster(),
    ageRating: [12, 14, 16, 18][utils.getRandomIntegerUnder(COMMENTS_NUMBER)],
    director: [`Anthony Mann`, `Anthony Wann`, `Anthony Zann`][utils.getRandomIntegerUnder(STRINGS_TO_DESCRIPTION)],
    writers: [`Anne Wigton`, `Heinz Herald`, `Richard Weil`][utils.getRandomIntegerUnder(STRINGS_TO_DESCRIPTION)],
    actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`][utils.getRandomIntegerUnder(STRINGS_TO_DESCRIPTION)],
    release: {
      date: getYear(),
      releaseCountry: [`USA`, `Canada`, `France`, `Germany`, `Italy`, `Spain`, `Norway`][utils.getRandomIntegerUnder(NUMBER_OF_TITLES)],
    },
    runtime: getDuration(),
    genre: getGenre(),
    description: getDescription(),
  },
  userDetails: {
    personalRating: getRating(),
    watchlist: false,
    alreadyWatched: true,
    watchingDate: `2019-05-11T16:12:32.554Z`,
    favorite: false
  }
});

const getCards = () => {
  const data = [];
  for (let i = 0; i < NUMBER_OF_CARDS + 2 * NUMBER_OF_EXTRAS + NUMBER_OF_POPUPS; i++) {
    data.push(getCard(i));
  }

  return data;
};

export const cards = getCards();
