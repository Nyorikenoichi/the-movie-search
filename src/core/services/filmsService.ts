import Service from './service';
import FilmModel from '../../models/filmModel';
import Repository from '../repos/repository';

export default class FilmsService extends Service {
  constructor(repository: Repository) {
    super();
    this.repository = repository;
  }

  public async getData(searchRequest: string, page: number): Promise<FilmModel[]> {
    const data = await this.repository.getData(searchRequest, page);
    if (data.error) {
      //
    }
    return data.Search.map((item) => new FilmModel(
      item.Title,
      item.Year,
      item.imdbID,
      item.Poster,
    ));
  }
}
