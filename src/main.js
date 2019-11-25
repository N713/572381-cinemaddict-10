import {utils} from "./components/site-utils";
import {getProfileTemplate} from "./components/site-profile";

const header = document.querySelector(`.header`);

utils.render(header, utils.makeElement(getProfileTemplate()), utils.Position.BEFOREEND);
