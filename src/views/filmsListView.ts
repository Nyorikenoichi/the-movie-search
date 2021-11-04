/* eslint-disable no-param-reassign */
import View from '../core/view';
import Controller from '../controller/controller';
import FilmListComponent from '../core/components/filmListComponent';

export default class FilmsListView extends View {
  protected controller: Controller;

  public render(root: Element): void {
    root.innerHTML = '';
    const filmsList = FilmListComponent.render(this.controller.films, this.controller);

    const loadMoreButton = document.createElement('button');
    loadMoreButton.innerText = 'load more';
    loadMoreButton.addEventListener('mousedown', (event) => {
      this.controller.addFilms();
      event.preventDefault();
    });

    root.appendChild(filmsList);
    root.appendChild(loadMoreButton);
  }
}
