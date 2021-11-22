import View from '../core/view';
import FilmListComponent from '../core/components/filmListComponent';
import SectionID from '../core/constants/SectionID';
import FilmModel from '../models/filmModel';
import FilmsManagement from '../core/interfaces/filmsManagement';

export default class FilmsListView extends View<{ films: FilmModel[], filmsManagement: FilmsManagement }> {
  public render({ films, filmsManagement }): void {
    if (!this.viewDiv) {
      this.viewDiv = this.root.querySelector(SectionID.filmsList);
    }
    this.clear();

    const filmsList = new FilmListComponent().render({ films, filmsManagement });

    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'load more'; // тут не использую i18next потому что этой кнопки не будет на сайте
    loadMoreButton.addEventListener('mousedown', (event: MouseEvent) => {
      event.preventDefault();
      filmsManagement.addFilms();
    });

    this.viewDiv.append(filmsList);
    this.viewDiv.append(loadMoreButton);
  }
}
