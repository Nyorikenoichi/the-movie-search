import View from '../core/view';
import FilmListComponent from '../core/components/filmListComponent';
import FilmsManagement from '../core/interfaces/filmsManagement';

export default class FavoritesView extends View {
  public render(filmsManagement: FilmsManagement): void {
    const favoritesDiv = this.root.querySelector('#favoritesDiv');
    favoritesDiv.innerHTML = '';

    const favoritesTitle = document.createElement('h2');
    favoritesTitle.innerText = 'Favorites:';
    const favoritesList = FilmListComponent.render(filmsManagement.getFavorites(), filmsManagement);

    favoritesDiv.append(favoritesTitle);
    favoritesDiv.append(favoritesList);
  }

  public hide(): void {
    const favoritesDiv = this.root.querySelector('#favoritesDiv');
    favoritesDiv.innerHTML = '';
  }
}
