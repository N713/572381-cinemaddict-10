import {utils} from "../components/site-utils";

export default class MovieController {
  constructor(data, onDataChange) {
    this._data = data;
    this._onDataChange = onDataChange;
  }

  init() {
    utils.renderPopup(this._data[this._data.length - 1]);
  }
}
