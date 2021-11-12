import GetFilmsResults from '../interfaces/GetFilmsResults';

export default abstract class Repository {
  protected static Urls = {
    MainUrl: (searchRequest: string, page: number) => `https://www.omdbapi.com/?s=${searchRequest}&apikey=9b67fc54&page=${page}`,
  };

  public abstract getData(searchRequest: string, page: number): Promise<GetFilmsResults>;
}
