import View from '../core/view';
import FilmListComponent from '../core/components/filmListComponent';
import Divs from '../core/constants/Divs';
import FilmModel from '../models/filmModel';
import FilmsManagement from '../core/interfaces/filmsManagement';

export default class FilmsListView extends View<{ films: FilmModel[], filmsManagement: FilmsManagement }> {
  public render({ films, filmsManagement }): void {
    const filmsListDiv = this.root.querySelector(Divs.filmsList);
    filmsListDiv.innerHTML = '';

    const filmsList = new FilmListComponent().render({ films, filmsManagement });

    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'load more'; // тут не использую i18next потому что этой кнопки не будет на сайте
    loadMoreButton.addEventListener('mousedown', (event: MouseEvent) => {
      event.preventDefault();
      filmsManagement.addFilms();
    });

    filmsListDiv.append(filmsList);
    filmsListDiv.append(loadMoreButton);
  }

  public hide(): void {
    const filmsListDiv = this.root.querySelector(Divs.filmsList);
    filmsListDiv.innerHTML = '';
  }
}
