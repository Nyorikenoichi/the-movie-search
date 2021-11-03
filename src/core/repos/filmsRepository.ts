import Repository from './repository';
import Film from '../interfaces/film';

export default class FilmsRepository extends Repository {
  protected getUrlPage(page: number): string {
    return `https://www.omdbapi.com/?s=dream&apikey=9b67fc54&page=${page}`;
  }

  public async getData(page: number): Promise<{ error?: string, Search?: Film[] }> {
    try {
      const response = await fetch(this.getUrlPage(page));
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
