import Repository from './repository';
import Film from '../interfaces/film';

export default class FilmsRepository extends Repository {
  protected getUrl(searchRequest: string, page: number): string {
    return `https://www.omdbapi.com/?s=${searchRequest}&apikey=9b67fc54&page=${page}`;
  }

  // eslint-disable-next-line consistent-return
  public async getData(searchRequest: string, page: number): Promise<{ error?: string; Search?: Film[] }> {
    try {
      const response = await fetch(this.getUrl(searchRequest, page));
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
