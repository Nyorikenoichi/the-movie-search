import FavoritesView from '../views/favoritesView';
import FilmsListView from '../views/filmsListView';

export default class Router {
  public filmsListView: FilmsListView;

  public favoritesView: FavoritesView;

  constructor(filmsListView: FilmsListView, favoritesView: FavoritesView) {
    this.filmsListView = filmsListView;
    this.favoritesView = favoritesView;
    addEventListener('hashchange', this.handleHash.bind(this));
  }

  public handleHash(): void {
    const hash = location.hash.slice(1);
    if (hash === ''){
      this.filmsListView.render();
      return;
    }
    if (hash === 'favorites') {
      this.favoritesView.render();
      return;
    }
    console.log('unknown hash');
  }
}
