import Repository from '../repos/repository';
import GetFilmsResults from '../interfaces/GetFilmsResults';
import FilmModel from '../../models/filmModel';

export default abstract class Service {
  protected repository: Repository;

  public abstract setRepository(repository: Repository): void;

  public abstract getFilmsPage(searchRequest: string, page: number): Promise<GetFilmsResults>;

  public abstract getFavorites(): FilmModel[];

  public abstract saveFilm(film: FilmModel): void;

  public abstract removeFilm(film: FilmModel): void;
}
