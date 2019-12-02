import {utils} from "../components/site-utils";

const integer = 20;

const filtersValues = [
  {filter: `All movies`, value: utils.getRandomIntegerUnder(integer)},
  {filter: `Watchlist`, value: utils.getRandomIntegerUnder(integer)},
  {filter: `History`, value: utils.getRandomIntegerUnder(integer)},
  {filter: `Favorites`, value: utils.getRandomIntegerUnder(integer)},
];

export const filtersArray = Array.from(filtersValues);
