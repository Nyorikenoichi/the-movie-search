import Repository from  "./repository"

export default class Service{
  private repository: Repository;

  constructor() {
    this.repository = new Repository();
  }

  public async getFilms(requestURL : string): Promise<any>{
    const data = await this.repository.getFilms(requestURL);
    if (data.error) {

    }

    return  data.Search;
  }
}