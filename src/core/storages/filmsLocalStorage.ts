import Storage from './storage';
import FilmModel from '../../models/filmModel';

export default class LocalStorage extends Storage {
  public getFavorites(): FilmModel[] {
    return Object.values(localStorage).map((item) => {
      const film = JSON.parse(item);
      return new FilmModel(film.title, film.year, film.imdbID, film.imgSrc);
    });
  }

  public saveFilm(film: FilmModel): void {
    const index: string = (localStorage.length).toString();
    localStorage.setItem(index, JSON.stringify(film));
  }

  public removeFilm(film:FilmModel) {
    const index = Object.values(localStorage).findIndex((item) => item === JSON.stringify(film));
    localStorage.removeItem(index.toString());
  }

  public clear() {
    localStorage.clear();
  }
}
