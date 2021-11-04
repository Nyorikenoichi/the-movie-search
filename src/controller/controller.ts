import FilmModel from '../models/filmModel';
import FilmsService from '../core/services/filmsService';
import Router from '../core/router';

export default class Controller {
  public films: FilmModel[];

  public favorites: FilmModel[];

  private service: FilmsService;

  private router: Router;

  private currentFilmsPage: number;

  private currentSearchRequest: string = 'dream';

  constructor(router: Router) {
    this.films = [];
    this.favorites = [];
    this.currentFilmsPage = 1;
    this.service = new FilmsService();
    this.router = router;
    this.addFilms();
  }

  public setSearchRequest(searchRequest: string): void {
    this.currentSearchRequest = searchRequest;
    this.currentFilmsPage = 1;
    this.films = [];
    this.addFilms();
  }

  public async addFilms(): Promise<void> {
    this.films = this.films.concat(await this.service.getData(this.currentSearchRequest, this.currentFilmsPage));
    this.currentFilmsPage += 1;
    this.router.handleHash();
  }

  public addToFavorites(filmToAdd: FilmModel): void {
    this.favorites = [...this.favorites, filmToAdd];
  }

  public removeFromFavorites(film: FilmModel): void {
    this.favorites = this.favorites.filter((item) =>
      item.getTitle() !== film.getTitle() && item.getYear() !== film.getYear());

  }
}
