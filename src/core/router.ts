import FavoritesView from '../views/favoritesView';
import FilmsListView from '../views/filmsListView';
import UrlHash from './constants/UrlHash';
import SearchLineComponent from './components/searchLineComponent';
import Controller from '../controller/controller';
import FilmsManagement from './interfaces/filmsManagement';
import FilmModel from '../models/filmModel';
import ResponseErrorView from '../views/responseErrorView';

export default class Router {
  private controller: Controller;

  private filmsListView: FilmsListView;

  private favoritesView: FavoritesView;

  private responseErrorView: ResponseErrorView;

  private root: HTMLElement;

  constructor(
    filmsListView: FilmsListView,
    favoritesView: FavoritesView,
    responseErrorView: ResponseErrorView,
    root: HTMLElement,
  ) {
    this.root = root;
    this.filmsListView = filmsListView;
    this.favoritesView = favoritesView;
    this.responseErrorView = responseErrorView;
  }

  public setController(controller: Controller) {
    this.controller = controller;
  }

  public static getHash(): string {
    return window.location.hash.slice(1) as UrlHash;
  }

  public renderMainPage(films: FilmModel[], filmsManagement: FilmsManagement) {
    this.filmsListView.render({ films, filmsManagement });
    this.favoritesView.hide();
    this.responseErrorView.hide();
  }

  public renderResponseError(error: string) {
    this.responseErrorView.render({ error });
  }

  public renderFavorites(films: FilmModel[], filmsManagement: FilmsManagement) {
    this.favoritesView.render({ films, filmsManagement });
  }

  public renderStaticComponents() {
    const searchDiv: HTMLElement = document.createElement('div');
    const responseErrorDiv: HTMLElement = document.createElement('div');
    const filmsListDiv: HTMLElement = document.createElement('div');
    const favoritesDiv: HTMLElement = document.createElement('div');

    searchDiv.setAttribute('id', 'searchDiv');
    responseErrorDiv.setAttribute('id', 'responseErrorDiv');
    filmsListDiv.setAttribute('id', 'filmsListDiv');
    favoritesDiv.setAttribute('id', 'favoritesDiv');

    this.root.appendChild(searchDiv);
    this.root.appendChild(responseErrorDiv);
    this.root.appendChild(filmsListDiv);
    this.root.appendChild(favoritesDiv);

    const setSearchRequest = this.controller.setSearchRequest.bind(this.controller);
    const searchLine: HTMLElement = new SearchLineComponent().render({ setSearchRequest });
    searchDiv.append(searchLine);
  }
}
