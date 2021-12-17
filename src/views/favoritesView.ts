import i18next from 'i18next';
import View from '../core/view';
import FilmListComponent from '../core/components/filmListComponent';
import FilmModel from '../models/filmModel';
import FilmsManagement from '../core/interfaces/filmsManagement';

export default class FavoritesView extends View<{
  films: FilmModel[];
  filmsManagement: FilmsManagement;
}> {
  public render({ films, filmsManagement }): void {
    this.clear();
    const overlay = document.querySelector('.overlay') as HTMLElement;
    overlay.classList.add('overlay-show');

    const favoritesTitle = document.createElement('h2');
    favoritesTitle.setAttribute('class', 'favorites-label');
    favoritesTitle.textContent = i18next.t('Favorites');

    const favoritesList = new FilmListComponent().render({
      films,
      filmsManagement,
      containerClass: 'favorites-list',
    });

    this.container.append(favoritesTitle, favoritesList);
  }

  public clear(): void {
    this.container.innerHTML = '';
    const overlay = document.querySelector('.overlay') as HTMLElement;
    overlay.classList.remove('overlay-show');
  }
}
