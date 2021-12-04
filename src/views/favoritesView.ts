import i18next from 'i18next';
import View from '../core/view';
import FilmListComponent from '../core/components/filmListComponent';
import SectionID from '../core/constants/SectionID';
import FilmModel from '../models/filmModel';
import FilmsManagement from '../core/interfaces/filmsManagement';

export default class FavoritesView extends View<{
  films: FilmModel[];
  filmsManagement: FilmsManagement;
}> {
  public render({ films, filmsManagement }): void {
    if (!this.container) {
      this.container = this.root.querySelector(SectionID.favorites);
    }
    this.clear();

    const favoritesTitle = document.createElement('h2');
    favoritesTitle.innerText = i18next.t('Favorites');
    const favoritesList = new FilmListComponent().render({
      films,
      filmsManagement,
    });

    this.container.append(favoritesTitle, favoritesList);
    const overlay = document.querySelector(".overlay") as HTMLElement;
    overlay.style.width = '50%';
  }

  public clear(): void {
    this.container.innerHTML = '';
    const overlay = document.querySelector(".overlay") as HTMLElement;
    overlay.style.width = '0%';
  }
}
