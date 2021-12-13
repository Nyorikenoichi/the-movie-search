import i18next from 'i18next';
import FavoritesView from '../views/favoritesView';
import FilmsListView from '../views/filmsListView';
import UrlHash from './constants/UrlHash';
import SearchLineComponent from './components/searchLineComponent';
import FilmCardComponent from './components/filmCardComponent';
import Controller from '../controller/controller';
import FilmsManagement from './interfaces/filmsManagement';
import FilmModel from '../models/filmModel';
import ResponseErrorView from '../views/responseErrorView';
import SectionSelectors from './constants/SectionSelectors';
import heartIcon from '../assets/icons/heart.png';
import githubIcon from '../assets/icons/github.png';
import aboutDev from './other/aboutDev';

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
    window.addEventListener(
      'hashchange',
      this.controller.handleHash.bind(this.controller),
    );
  }

  public static getHash(): string {
    return window.location.hash.slice(1) as UrlHash;
  }

  public static getUrlWithoutHash(): string {
    return window.location.href.split('#')[0];
  }

  public switchFavorites(): void {
    const hash = Router.getHash();
    const urlWithoutHash = Router.getUrlWithoutHash();
    if (hash === UrlHash.main) {
      window.location.replace(`${urlWithoutHash}#${UrlHash.favorites}`);
    } else {
      window.location.replace(`${urlWithoutHash}#${UrlHash.main}`);
    }
  }

  public addFilmsToSlider(films: FilmModel[], filmsManagement: FilmsManagement): void {
    const sliderWrapper = this.root.querySelector('.swiper-wrapper');
    films.forEach((film) => {
      const filmCard = new FilmCardComponent().render({ film, filmsManagement });
      sliderWrapper.append(filmCard);
    });
  }

  public renderMainPage(films: FilmModel[], filmsManagement: FilmsManagement) {
    this.filmsListView.render({ films, filmsManagement });
    if (this.favoritesView.isRendered()) {
      this.favoritesView.clear();
    }
    if (this.responseErrorView.isRendered()) {
      this.responseErrorView.clear();
    }
  }

  public renderResponseError(error: string) {
    this.responseErrorView.render({ error });
  }

  public renderFavorites(films: FilmModel[], filmsManagement: FilmsManagement) {
    this.favoritesView.render({ films, filmsManagement });
  }

  private renderHeader(): HTMLElement {
    const container: HTMLElement = document.createElement('div');

    const invisibleDiv: HTMLElement = document.createElement('div');
    invisibleDiv.setAttribute('class', 'invisibleDiv');

    const title: HTMLElement = document.createElement('h1');
    title.setAttribute('class', 'title');
    title.textContent = i18next.t('ProjectTitle');

    const openFavorites = document.createElement('img');
    openFavorites.addEventListener('mousedown', this.switchFavorites.bind(this));
    openFavorites.setAttribute('class', 'switchFavorites');
    openFavorites.src = heartIcon;

    container.append(invisibleDiv, title, openFavorites);
    return container;
  }

  private renderSearchLine(): HTMLElement {
    const container: HTMLElement = document.createElement('div');

    const setSearchRequest = this.controller.setSearchRequest.bind(
      this.controller,
    );
    const searchLine: HTMLElement = new SearchLineComponent().render({
      setSearchRequest,
    });

    container.append(searchLine);
    return container;
  }

  private renderFooter(): HTMLElement {
    const container = document.createElement('div');

    const innowiseLabel = document.createTextNode(i18next.t('CompanyName'));

    const gitIcon = document.createElement('img');
    gitIcon.src = githubIcon;
    gitIcon.setAttribute('class', 'git-icon');

    const gitLabel = document.createElement('a');
    gitLabel.textContent = aboutDev.nickname;
    gitLabel.href = aboutDev.github;
    gitLabel.setAttribute('class', 'git-label');

    const gitWrapper = document.createElement('div');
    gitWrapper.setAttribute('class', 'git-wrapper');
    gitWrapper.append(gitIcon, gitLabel);

    container.append(innowiseLabel, gitWrapper);
    return container;
  }

  private hashWithoutPoundSign(hash: string): string {
    return hash.slice(1);
  }

  public renderStaticComponents() {
    const headerDiv: HTMLElement = this.renderHeader();
    const overlayDiv: HTMLElement = document.createElement('div');
    const contentDiv: HTMLElement = document.createElement('div');
    const footerDiv: HTMLElement = this.renderFooter();
    const searchDiv: HTMLElement = this.renderSearchLine();
    const responseErrorDiv: HTMLElement = document.createElement('div');
    const filmsListDiv: HTMLElement = document.createElement('div');
    const favoritesDiv: HTMLElement = document.createElement('div');

    headerDiv.setAttribute('id', this.hashWithoutPoundSign(SectionSelectors.header));
    overlayDiv.setAttribute('class', this.hashWithoutPoundSign(SectionSelectors.overlay));
    contentDiv.setAttribute('id', this.hashWithoutPoundSign(SectionSelectors.content));
    footerDiv.setAttribute('id', this.hashWithoutPoundSign(SectionSelectors.footer));
    searchDiv.setAttribute('class', this.hashWithoutPoundSign(SectionSelectors.search));
    responseErrorDiv.setAttribute(
      'class',
      this.hashWithoutPoundSign(SectionSelectors.responseError),
    );
    filmsListDiv.setAttribute(
      'class',
      this.hashWithoutPoundSign(SectionSelectors.filmsList),
    );
    favoritesDiv.setAttribute(
      'id',
      this.hashWithoutPoundSign(SectionSelectors.favorites),
    );

    overlayDiv.append(favoritesDiv);
    contentDiv.append(overlayDiv, searchDiv, responseErrorDiv, filmsListDiv);
    this.root.append(headerDiv, contentDiv, footerDiv);
  }
}
