import i18next from 'i18next';
import Repository from './repository';
import GetFilmsResults from '../interfaces/GetFilmsResults';
import FilmModel from '../../models/filmModel';
import Film from '../interfaces/film';
import SerializedFilmModel from '../interfaces/serializedFilmModel';

export default class FilmsRepository extends Repository {
  public async getFilmsPage(
    searchRequest: string,
    page: number,
  ): Promise<GetFilmsResults<Film[]>> {
    try {
      const response = await fetch(
        Repository.Urls.filmsPage(searchRequest, page),
      );
      const films: GetFilmsResults<Film[]> = await response.json();

      const additionalPromises = films.Search.map((film) => fetch(Repository.Urls.filmInfo(film.imdbID)));

      const detailInfoResponse = await Promise.all(additionalPromises);

      const filmsDetailInfo = await Promise.all(detailInfoResponse.map((film) => film.json()));
      films.Search.map((film, index) => {
        const filmWithRating = Object.assign(film);
        const rating = filmsDetailInfo[index].Ratings[0].Value;
        [filmWithRating.Rating] = rating.split('/');
        return filmWithRating;
      });

      return films;
    } catch (err: Error | unknown) {
      if (err instanceof Error) {
        return {
          Error: err.message,
        };
      }
      return {
        Error: i18next.t('Unknown error'),
      };
    }
  }

  public async getFavorites(): Promise<SerializedFilmModel[]> {
    return this.storage.getFavorites();
  }

  public saveFilm(film: FilmModel): Promise<void> {
    return this.storage.saveFilm(film);
  }

  public removeFilm(film: FilmModel): Promise<void> {
    return this.storage.removeFilm(film);
  }
}
