import FavoritesView from '../views/favoritesView';
import FilmsListView from '../views/filmsListView';
import UrlHash from './constants/UrlHash';
import SearchLineComponent from './components/searchLineComponent';
import Controller from '../controller/controller';
import FilmsManagement from './interfaces/filmsManagement';

export default class Router {
  private controller: Controller;

  private filmsListView: FilmsListView;

  private favoritesView: FavoritesView;

  private root: HTMLElement;

  constructor(filmsListView: FilmsListView, favoritesView: FavoritesView, root: HTMLElement) {
    this.root = root;
    this.filmsListView = filmsListView;
    this.favoritesView = favoritesView;
    window.addEventListener('hashchange', this.handleHash.bind(this));
  }

  public setController(controller: Controller) {
    this.controller = controller;
  }

  public handleHash(): void {
    const hash = window.location.hash.slice(1) as UrlHash;
    const filmsManagement: FilmsManagement = {
      addToFavorites: this.controller.addToFavorites.bind(this.controller),
      removeFromFavorites: this.controller.removeFromFavorites.bind(this.controller),
      getFavorites: this.controller.getFavorites.bind(this.controller),
      addFilms: this.controller.addFilms.bind(this.controller),
      getFilms: this.controller.getFilms.bind(this.controller),
    };

    if (hash === UrlHash.main) {
      this.filmsListView.render(filmsManagement);
      this.favoritesView.hide();
      return;
    }
    if (hash === UrlHash.favorites) {
      this.favoritesView.render(filmsManagement);
      // return;
    }
    // this.errorView.render()
  }

  public renderStaticComponents() {
    const searchDiv: HTMLElement = document.createElement('div');
    const errorDiv: HTMLElement = document.createElement('div');
    const filmsListDiv: HTMLElement = document.createElement('div');
    const favoritesDiv: HTMLElement = document.createElement('div');

    searchDiv.setAttribute('id', 'searchDiv');
    errorDiv.setAttribute('id', 'errorDiv');
    filmsListDiv.setAttribute('id', 'filmsListDiv');
    favoritesDiv.setAttribute('id', 'favoritesDiv');

    this.root.appendChild(searchDiv);
    this.root.appendChild(errorDiv);
    this.root.appendChild(filmsListDiv);
    this.root.appendChild(favoritesDiv);

    const setSearchRequest: Function = this.controller.setSearchRequest.bind(this.controller);
    const searchLine: HTMLElement = SearchLineComponent.render(setSearchRequest);
    searchDiv.append(searchLine);
  }
}
