import FilmModel from '../models/filmModel';
import FilmsService from '../core/filmsService';
import Router from "../core/router";
import FavoritesView from "../views/favoritesView";
import FilmsListView from "../views/filmsListView";

export default class Controller {
  public films: FilmModel[];
  public favorites: FilmModel[];
  private service: FilmsService;
  private router: Router;
  public favoritesView: FavoritesView;
  public filmsListView: FilmsListView;

  constructor(favoritesView: FavoritesView, filmsListView: FilmsListView) {
    this.films = [];
    this.favorites = [];
    this.favoritesView = favoritesView;
    this.filmsListView = filmsListView;
    this.service = new FilmsService();
    this.router = new Router(this, favoritesView, filmsListView);
  }

  public async getFilms(): Promise<any> {
    this.films = await this.service.getData();
  }
}
