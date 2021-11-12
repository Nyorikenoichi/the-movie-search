import Repository from './repository';
import GetFilmsResults from '../interfaces/GetFilmsResults';

export default class FilmsRepository extends Repository {
  public async getData(searchRequest: string, page: number): Promise<GetFilmsResults> {
    try {
      const response = await fetch(Repository.Urls.MainUrl(searchRequest, page));
      return await response.json();
    } catch (err: Error | unknown) {
      if (err instanceof Error) {
        return {
          error: err.message,
        };
      }
    }
  }
}
