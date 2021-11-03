import FavoritesView from '../views/favoritesView';
import FilmsListView from '../views/filmsListView';
import UrlHash from './constants/UrlHash';

export default class Router {
  public filmsListView: FilmsListView;

  public favoritesView: FavoritesView;

  constructor(filmsListView: FilmsListView, favoritesView: FavoritesView) {
    this.filmsListView = filmsListView;
    this.favoritesView = favoritesView;
    window.addEventListener('hashchange', this.handleHash.bind(this));
  }

  public handleHash(): void {
    const hash : UrlHash = window.location.hash.slice(1) === 'favorites' ? UrlHash.favorites : UrlHash.main;
    if (hash === UrlHash.main) {
      this.filmsListView.render();
      return;
    }
    if (hash === 'favorites') {
      this.favoritesView.render();
    }
  }
}
