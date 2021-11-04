import FavoritesView from '../views/favoritesView';
import FilmsListView from '../views/filmsListView';
import UrlHash from './constants/UrlHash';

export default class Router {
  private filmsListView: FilmsListView;

  private favoritesView: FavoritesView;

  private filmsListDiv: Element;

  private favoritesDiv: Element;

  constructor(
    filmsListView: FilmsListView,
    favoritesView: FavoritesView,
    filmsListDiv: Element,
    favoritesDiv: Element,
  ) {
    this.filmsListView = filmsListView;
    this.favoritesView = favoritesView;
    this.filmsListDiv = filmsListDiv;
    this.favoritesDiv = favoritesDiv;
    window.addEventListener('hashchange', this.handleHash.bind(this));
  }

  public handleHash(): void {
    const hash = window.location.hash.slice(1) as UrlHash;
    if (hash === UrlHash.main) {
      this.filmsListView.render(this.filmsListDiv);
      this.favoritesView.hide(this.favoritesDiv);
      return;
    }
    if (hash === UrlHash.favorites) {
      this.favoritesView.render(this.favoritesDiv);
      // return;
    }
    // this.errorView.render()
  }
}
