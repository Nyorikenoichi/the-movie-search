import Repository from './repository';

export default abstract class Service {
  protected repository: Repository;

  public abstract getData(): Promise<any>;
}
