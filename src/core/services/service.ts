import Repository from '../repos/repository';
import FilmModel from '../../models/filmModel';

export default abstract class Service {
  protected repository: Repository;

  public abstract getData(searchRequest: string, page: number): Promise<FilmModel[]>;
}
