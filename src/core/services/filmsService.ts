import Service from './service';
import FilmModel from '../../models/filmModel';
import Repository from '../repos/repository';
import GetFilmsResults from '../interfaces/GetFilmsResults';

export default class FilmsService extends Service {
  public setRepository(repository: Repository): void {
    this.repository = repository;
  }

  public async getFilmsPage(
    searchRequest: string,
    page: number,
  ): Promise<GetFilmsResults<FilmModel[]>> {
    const data = await this.repository.getFilmsPage(searchRequest, page);
    if (data.Error) {
      return {
        Error: data.Error,
      };
    }
    return {
      Search: data.Search.map((item) => new FilmModel(item.Title, item.Year, item.imdbID, item.Poster)),
    };
  }

  public async getFavorites(): Promise<FilmModel[]> {
    const favorites = await this.repository.getFavorites();
    return favorites.map(
      (film) => new FilmModel(film.title, film.year, film.imdbID, film.imgSrc),
    );
  }

  public saveFilm(film: FilmModel): Promise<void> {
    return this.repository.saveFilm(film);
  }

  public removeFilm(film: FilmModel): Promise<void> {
    return this.repository.removeFilm(film);
  }
}
