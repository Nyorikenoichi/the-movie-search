import GetFilmsResults from '../interfaces/GetFilmsResults';
import Storage from '../storages/storage';
import FilmModel from '../../models/filmModel';

export default abstract class Repository {
  protected static Urls = {
    MainUrl: (searchRequest: string, page: number) => `https://www.omdbapi.com/?s=${searchRequest}&apikey=9b67fc54&page=${page}`,
  };

  protected storage: Storage;

  setStorage(storage: Storage) {
    this.storage = storage;
  }

  public abstract getFilmsPage(searchRequest: string, page: number): Promise<GetFilmsResults>;

  public abstract getFavorites(): FilmModel[];

  public abstract saveFilm(favorites: FilmModel): void;

  public abstract removeFilm(film: FilmModel): void;
}
