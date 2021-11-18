import Service from './service';
import FilmModel from '../../models/filmModel';
import Repository from '../repos/repository';
import GetFilmsResults from '../interfaces/GetFilmsResults';

export default class FilmsService extends Service {
  public setRepository(repository: Repository): void {
    this.repository = repository;
  }

  public async getFilmsPage(searchRequest: string, page: number): Promise<GetFilmsResults> {
    const data = await this.repository.getFilmsPage(searchRequest, page);
    if (data.Error) {
      return data;
    }
    return {
      Search: data.Search.map((item) => new FilmModel(
        item.Title,
        item.Year,
        item.imdbID,
        item.Poster,
      )),
    };
  }

  public getFavorites(): FilmModel[] {
    return this.repository.getFavorites();
  }

  public saveFilm(film: FilmModel) {
    this.repository.saveFilm(film);
  }

  public removeFilm(film: FilmModel) {
    this.repository.removeFilm(film);
  }
}
