const makeFiltersMarkup = (filter) => {
  return `
    <a href="#${filter.filter}" class="main-navigation__item main-navigation__item--active">${filter.filter}
      <span class="main-navigation__item-count">${filter.value}</span>
    </a>
  `;
};

const getNavigationTemplate = (filters) => {
  const markup = filters.map((filter) => makeFiltersMarkup(filter)).join(``);

  return (
    `<nav class="main-navigation">
      ${markup}
      <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
    </nav>`);
};

export {getNavigationTemplate};
