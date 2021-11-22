import GetFilmsResults from '../interfaces/GetFilmsResults';
import Storage from '../storages/storage';
import FilmModel from '../../models/filmModel';
import Film from '../interfaces/film';

export default abstract class Repository {
  protected static Urls = {
    // eslint-disable-next-line max-len
    MainUrl: (searchRequest: string, page: number) => `https://www.omdbapi.com/?s=${searchRequest}&apikey=${process.env.APIKEY}&page=${page}`,
  };

  protected storage: Storage;

  setStorage(storage: Storage) {
    this.storage = storage;
  }

  public abstract getFilmsPage(searchRequest: string, page: number): Promise<GetFilmsResults<Film[]>>;

  public abstract getFavorites(): Promise<FilmModel[]>;

  public abstract saveFilm(favorites: FilmModel): Promise<void>;

  public abstract removeFilm(film: FilmModel): Promise<void>;
}
