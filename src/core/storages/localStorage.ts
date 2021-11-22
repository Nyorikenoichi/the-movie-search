import Storage from './storage';
import FilmModel from '../../models/filmModel';
import { deleteFilm } from '../helpers/films';

export default class LocalStorage extends Storage {
  public getFavorites(): Promise<FilmModel[]> {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites) {
      favorites = favorites.map((film) => new FilmModel(film.title, film.year, film.imdbID, film.imgSrc));
      return new Promise((resolve) => resolve(favorites));
    }
    return new Promise((resole) => resole([]));
  }

  public async saveFilm(film: FilmModel): Promise<void> {
    let favorites = await this.getFavorites();
    favorites = [...favorites, film];
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  public async removeFilm(film:FilmModel): Promise<void> {
    let favorites = await this.getFavorites();
    favorites = deleteFilm(film, favorites);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
