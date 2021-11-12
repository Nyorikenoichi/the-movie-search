import FilmModel from '../models/filmModel';
import Router from '../core/router';
import Service from '../core/services/service';
import Repository from '../core/repos/repository';
import FilmsService from '../core/services/filmsService';
import FilmsRepository from '../core/repos/filmsRepository';

export default class Controller {
  private films: FilmModel[];

  private favorites: FilmModel[];

  private service: Service;

  private repository: Repository;

  private router: Router;

  private currentFilmsPage: number;

  private currentSearchRequest: string;

  constructor(router: Router) {
    this.init(router);
  }

  private async init(router: Router): Promise<void> {
    this.films = [];
    this.favorites = [];
    this.currentFilmsPage = 1;
    this.currentSearchRequest = 'dream';

    this.repository = new FilmsRepository();
    this.service = new FilmsService(this.repository);
    this.router = router;
    this.router.setController(this);
    this.router.renderStaticComponents();

    await this.addFilms();
  }

  public getFilms(): FilmModel[] {
    return this.films;
  }

  public getFavorites(): FilmModel[] {
    return this.favorites;
  }

  public async setSearchRequest(searchRequest: string): Promise<void> {
    this.currentSearchRequest = searchRequest;
    this.currentFilmsPage = 1;
    this.films = [];
    await this.addFilms();
  }

  public async addFilms(): Promise<void> {
    const filmsToAdd = await this.service.getData(this.currentSearchRequest, this.currentFilmsPage);
    this.films = this.films.concat(filmsToAdd);
    this.currentFilmsPage += 1;
    this.router.handleHash();
  }

  public addToFavorites(filmToAdd: FilmModel): void {
    this.favorites = [...this.favorites, filmToAdd];
  }

  public removeFromFavorites(film: FilmModel): void {
    this.favorites = this.favorites.filter((item) => item.getImdbID() !== film.getImdbID());
  }
}
