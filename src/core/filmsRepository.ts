import Repository from './repository';

export default class FilmsRepository extends Repository {
  public requestURL: string = '';

  // i'm not sure where should i call this
  public setRequestURL(requestURL: string): void {
    this.requestURL = requestURL;
  }

  public async getData(): Promise<any> {
    this.setRequestURL('https://www.omdbapi.com/?s=dream&apikey=9b67fc54'); // did this just to check if everything works
    try {
      const response = await fetch(this.requestURL);
      return await response.json();
    } catch (err: Error | unknown) {
      if (err instanceof Error) {
        return {
          error: err.message,
        };
      }
    }
    return {
      error: 'somehow getData didn\'t return anything',
    };
  }
}
