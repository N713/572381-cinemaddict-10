import Card from "./site-film-card";

export const utils = {
  Position: {
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`,
  },

  makeElement: (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;
    return newElement.firstElementChild;
  },

  render: (container, element, place) => {
    switch (place) {
      case utils.Position.AFTERBEGIN:
        container.prepend(element);
        break;
      case utils.Position.BEFOREEND:
        container.append(element);
        break;
    }
  },

  remove: (element) => {
    if (element) {
      element.remove();
    }
  },

  getRandomIntegerUnder: (under = 1) => {
    return Math.floor(Math.random() * under);
  },

  minutesToHours: (minutes) => {
    let hours = Math.floor(minutes / 60);
    let lastMinutes = minutes - (hours * 60);

    if (lastMinutes < 10) {
      return `${hours}h 0${lastMinutes}m`;
    }

    return `${hours}h ${lastMinutes}m`;
  },

  avoidZero: (number) => {
    if (number === 0) {
      number = 1;
    }

    return number;
  },

  renderElements: (elementsArray, elementsParent) => {
    elementsArray.forEach((element) => {
      utils.render(elementsParent, element, utils.Position.BEFOREEND);
    });
  },

  renderCards: (array, from, to, parent) => {
    array.slice(from, to).forEach((element) => {
      utils.render(parent, new Card(element).getElement(), utils.Position.BEFOREEND);
    });
  },
};
