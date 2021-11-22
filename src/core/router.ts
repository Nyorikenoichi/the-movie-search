import FavoritesView from '../views/favoritesView';
import FilmsListView from '../views/filmsListView';
import UrlHash from './constants/UrlHash';
import SearchLineComponent from './components/searchLineComponent';
import Controller from '../controller/controller';
import FilmsManagement from './interfaces/filmsManagement';
import FilmModel from '../models/filmModel';
import ResponseErrorView from '../views/responseErrorView';
import SectionID from './constants/SectionID';

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

  public createHashChangeListener() {
    window.location.href = `${Router.getUrlWithoutHash()}#`;
    window.addEventListener('hashchange', this.controller.handleHash.bind(this.controller));
  }

  public static getHash(): string {
    return window.location.hash.slice(1) as UrlHash;
  }

  public static getUrlWithoutHash(): string {
    return window.location.href.split('#')[0];
  }

  public renderMainPage(films: FilmModel[], filmsManagement: FilmsManagement) {
    this.filmsListView.render({ films, filmsManagement });
    this.favoritesView.clear();
    this.responseErrorView.clear();
  }

  public renderResponseError(error: string) {
    this.responseErrorView.render({ error });
  }

  public renderFavorites(films: FilmModel[], filmsManagement: FilmsManagement) {
    this.favoritesView.render({ films, filmsManagement });
  }

  public renderStaticComponents() {
    const headerDiv: HTMLElement = document.createElement('div');
    const contentDiv: HTMLElement = document.createElement('div');
    const searchDiv: HTMLElement = document.createElement('div');
    const responseErrorDiv: HTMLElement = document.createElement('div');
    const filmsListDiv: HTMLElement = document.createElement('div');
    const favoritesDiv: HTMLElement = document.createElement('div');

    headerDiv.setAttribute('id', SectionID.header.slice(1));
    contentDiv.setAttribute('id', SectionID.content.slice(1));
    searchDiv.setAttribute('id', SectionID.search.slice(1));
    responseErrorDiv.setAttribute('id', SectionID.responseError.slice(1));
    filmsListDiv.setAttribute('id', SectionID.filmsList.slice(1));
    favoritesDiv.setAttribute('id', SectionID.favorites.slice(1));

    // header
    const invisibleDiv: HTMLElement = document.createElement('div');
    invisibleDiv.setAttribute('id', 'invisibleDiv');
    const title: HTMLElement = document.createElement('h1');
    title.setAttribute('id', 'title');
    title.textContent = 'MovieSearch';
    const openFavoritesButton = document.createElement('button');
    openFavoritesButton.addEventListener('mousedown', this.controller.switchFavorites.bind(this.controller));
    openFavoritesButton.setAttribute('id', 'switchFavorites');
    openFavoritesButton.textContent = '<3';
    headerDiv.append(invisibleDiv, title, openFavoritesButton);

    // search line
    const setSearchRequest = this.controller.setSearchRequest.bind(this.controller);
    const searchLine: HTMLElement = new SearchLineComponent().render({ setSearchRequest });
    searchDiv.append(searchLine);

    contentDiv.append(searchDiv, responseErrorDiv, filmsListDiv, favoritesDiv);

    this.root.append(headerDiv, contentDiv);
  }
}
