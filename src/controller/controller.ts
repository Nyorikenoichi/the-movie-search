import FilmModel from '../models/filmModel';
import Router from '../core/router';
import Service from '../core/services/service';
import FilmsManagement from '../core/interfaces/filmsManagement';
import UrlHash from '../core/constants/UrlHash';
import { eraseFilm, findFilm } from '../core/helpers/films';

export default class Controller {
  private films: FilmModel[];

  public favorites: FilmModel[];

  private service: Service;

  private router: Router;

  private currentFilmsPage: number;

  private currentSearchRequest: string;

  constructor(router: Router, service: Service) {
    this.init(router, service);
  }

  private async init(router: Router, service: Service): Promise<void> {
    this.films = [];
    this.currentFilmsPage = 1;
    this.currentSearchRequest = 'dream';

    this.service = service;
    this.favorites = this.service.getFavorites();

    this.router = router;
    this.router.setController(this);
    this.router.renderStaticComponents();
    window.addEventListener('hashchange', this.handleHash.bind(this));
    await this.addFilms();
  }

  public handleHash(): void {
    const hash = Router.getHash();
    const filmsManagement: FilmsManagement = {
      addToFavorites: this.addToFavorites.bind(this),
      removeFromFavorites: this.removeFromFavorites.bind(this),
      addFilms: this.addFilms.bind(this),
      findInFavorites: this.findInFavorites.bind(this),
    };

    if (hash === UrlHash.main) {
      this.router.renderMainPage(this.films, filmsManagement);
    } else if (hash === UrlHash.favorites) {
      this.router.renderFavorites(this.favorites, filmsManagement);
    }
  }

  public async setSearchRequest(searchRequest: string): Promise<void> {
    this.currentSearchRequest = searchRequest;
    this.currentFilmsPage = 1;
    this.films = [];
    await this.addFilms();
  }

  public async addFilms(): Promise<void> {
    const filmsToAdd = await this.service.getFilmsPage(this.currentSearchRequest, this.currentFilmsPage);
    if (filmsToAdd.Error) {
      this.router.renderResponseError(filmsToAdd.Error);
    } else {
      this.films = this.films.concat(filmsToAdd.Search as FilmModel[]);
      this.currentFilmsPage += 1;
      this.handleHash();
    }
  }

  public addToFavorites(film: FilmModel): void {
    this.service.saveFilm(film);
    this.favorites = [...this.favorites, film];
  }

  public removeFromFavorites(film: FilmModel): void {
    this.service.removeFilm(film);
    this.favorites = eraseFilm(film, this.favorites);
  }

  public findInFavorites(film: FilmModel): boolean {
    return findFilm(film, this.favorites);
  }
}
