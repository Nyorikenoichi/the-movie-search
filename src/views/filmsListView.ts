import View from '../core/view';
import FilmListComponent from '../core/components/filmListComponent';
import FilmsManagement from '../core/interfaces/filmsManagement';

export default class FilmsListView extends View {
  public render(filmsManagement: FilmsManagement): void {
    const filmsListDiv = this.root.querySelector('#filmsListDiv');
    filmsListDiv.innerHTML = '';

    const filmsList = FilmListComponent.render(filmsManagement.getFilms(), filmsManagement);

    const loadMoreButton = document.createElement('button');
    loadMoreButton.innerText = 'load more';
    loadMoreButton.addEventListener('mousedown', (event: MouseEvent) => {
      event.preventDefault();
      filmsManagement.addFilms();
    });

    filmsListDiv.append(filmsList);
    filmsListDiv.append(loadMoreButton);
  }

  public hide(): void {
    const filmsListDiv = this.root.querySelector('#filmsListDiv');
    filmsListDiv.innerHTML = '';
  }
}
