import FilmsRepository from '../repos/filmsRepository';
import Service from './service';
import FilmModel from '../../models/filmModel';

export default class FilmsService extends Service {
  protected repository: FilmsRepository;

  constructor() {
    super();
    this.repository = new FilmsRepository();
  }

  public async getData(page: number): Promise<FilmModel[]> {
    const data = await this.repository.getData(page);
    if (data.error) {
      // will modify this later
    }
    // eslint-disable-next-line max-len
    return data.Search.map((item) => new FilmModel(item.Title, item.Year, item.ImdbID, item.Poster));
  }
}
