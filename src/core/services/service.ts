import Repository from '../repos/repository';

export default abstract class Service {
  protected repository: Repository;

  public abstract getData(searchRequest: string, page: number): Promise<any>;
}
