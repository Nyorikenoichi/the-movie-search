import i18next from 'i18next';
import View from '../core/view';
import FilmListComponent from '../core/components/filmListComponent';
import Divs from '../core/constants/Divs';
import FilmModel from '../models/filmModel';
import FilmsManagement from '../core/interfaces/filmsManagement';

export default class FavoritesView extends View<{ films: FilmModel[], filmsManagement: FilmsManagement }> {
  public render({ films, filmsManagement }): void {
    const favoritesDiv = this.root.querySelector(Divs.favorites);
    favoritesDiv.innerHTML = '';

    const favoritesTitle = document.createElement('h2');
    favoritesTitle.innerText = i18next.t('keyFavorites');
    const favoritesList = new FilmListComponent().render({ films, filmsManagement });

    favoritesDiv.append(favoritesTitle);
    favoritesDiv.append(favoritesList);
  }

  public hide(): void {
    const favoritesDiv = this.root.querySelector(Divs.favorites);
    favoritesDiv.innerHTML = '';
  }
}
