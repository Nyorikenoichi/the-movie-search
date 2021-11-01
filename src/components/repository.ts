export default class Repository{
  constructor() {
  }

  public async getFilms(requestURL: string): Promise<any>{
    try{
      let response = await fetch(requestURL);
      let data = await response.json();
      return data;
    }
    catch (err: Error | unknown){
      if (err instanceof Error) {
        return {
          error: err.message,
        }
      }
    }
  }
}

