import FilmsRepository from './filmsRepository';
import Service from './service';

export default class FilmsService extends Service {
  protected repository: FilmsRepository;

  constructor() {
    super();
    this.repository = new FilmsRepository();
  }

  public async getData(): Promise<any> {
    const data = await this.repository.getData();
    if (data.error) {
      // will modify this later
      throw new Error(data.error); // wrote just so that eslint would not swear
    }
    return data.Search;
  }
}
