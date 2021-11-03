export default abstract class Repository {
  protected abstract getUrlPage(page: number): string;

  public abstract getData(page: number): Promise<any>;
}
