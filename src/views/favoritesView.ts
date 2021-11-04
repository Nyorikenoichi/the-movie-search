/* eslint-disable no-param-reassign */
import View from '../core/view';
import Controller from '../controller/controller';
import FilmListComponent from '../core/components/filmListComponent';

export default class FavoritesView extends View {
  protected controller: Controller;

  public render(root: Element): void {
    root.innerHTML = '';

    const favoritesTitle = document.createElement('h2');
    favoritesTitle.innerText = 'Favorites:';
    const favoritesList = FilmListComponent.render(this.controller.favorites, this.controller);

    root.appendChild(favoritesTitle);
    root.appendChild(favoritesList);
  }

  public hide(root: Element): void {
    root.innerHTML = '';
  }
}
