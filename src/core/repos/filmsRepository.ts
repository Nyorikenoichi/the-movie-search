import Repository from './repository';
import GetFilmsResults from '../interfaces/GetFilmsResults';
import FilmModel from '../../models/filmModel';
import Film from '../interfaces/film';

export default class FilmsRepository extends Repository {
  public async getFilmsPage(searchRequest: string, page: number): Promise<GetFilmsResults<Film[]>> {
    try {
      const response = await fetch(Repository.Urls.MainUrl(searchRequest, page));
      return await response.json();
    } catch (err: Error | unknown) {
      if (err instanceof Error) {
        return {
          Error: err.message,
        };
      }
      return {
        Error: 'Unknown error',
      };
    }
  }

  public async getFavorites(): Promise<FilmModel[]> {
    return this.storage.getFavorites();
  }

  public saveFilm(film: FilmModel): Promise<void> {
    return this.storage.saveFilm(film);
  }

  public removeFilm(film: FilmModel): Promise<void> {
    return this.storage.removeFilm(film);
  }
}
