import AbstractComponent from "./site-abstract-component";

const getMostCommentedTemplate = () => {
  return `<section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
    </section>`;
};

export default class MostCommentedFilmsComponent extends AbstractComponent {
  getTemplate() {
    return getMostCommentedTemplate();
  }
}
