export default abstract class Repository {
  protected abstract getUrl(searchRequest: string, page: number): string;

  public abstract getData(searchRequest: string, page: number): Promise<any>;
}
