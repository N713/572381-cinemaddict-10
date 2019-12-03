import {utils} from "../components/site-utils";

const integer = 20;

export const filters = [
  {filter: `All movies`, value: utils.getRandomIntegerUnder(integer)},
  {filter: `Watchlist`, value: utils.getRandomIntegerUnder(integer)},
  {filter: `History`, value: utils.getRandomIntegerUnder(integer)},
  {filter: `Favorites`, value: utils.getRandomIntegerUnder(integer)},
];
