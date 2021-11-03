import FilmModel from '../models/filmModel';
import FilmsService from '../core/services/filmsService';
import Router from '../core/router';

export default class Controller {
  public films: FilmModel[];

  public favorites: FilmModel[];

  private service: FilmsService;

  private router: Router;

  private currentPage: number;

  constructor(router: Router) {
    this.films = [];
    this.favorites = [];
    this.currentPage = 1;
    this.service = new FilmsService();
    this.router = router;
    this.addFilms().then();
  }

  public async addFilms(): Promise<void> {
    this.films = this.films.concat(await this.service.getData(this.currentPage));
    this.currentPage += 1;
    this.router.handleHash();
  }

  public addToFavorites(filmToAdd: FilmModel): void {
    this.favorites = this.favorites.concat(filmToAdd);
  }

  public removeFromFavorites(film: FilmModel): void {
    this.favorites.splice(this.favorites.indexOf(film), 1);
  }
}
