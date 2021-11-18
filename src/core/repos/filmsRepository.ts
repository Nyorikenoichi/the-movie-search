import Repository from './repository';
import GetFilmsResults from '../interfaces/GetFilmsResults';
import FilmModel from '../../models/filmModel';

export default class FilmsRepository extends Repository {
  public async getFilmsPage(searchRequest: string, page: number): Promise<GetFilmsResults> {
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

  public getFavorites(): FilmModel[] {
    return this.storage.getFavorites();
  }

  public saveFilm(film: FilmModel) {
    this.storage.saveFilm(film);
  }

  public removeFilm(film: FilmModel) {
    this.storage.removeFilm(film);
  }
}
