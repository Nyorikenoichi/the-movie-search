import FilmModel from '../../models/filmModel';
import SerializedFilmModel from '../interfaces/serializedFilmModel';

export default abstract class Storage {
  public abstract getFavorites(): Promise<SerializedFilmModel[]>;

  public abstract saveFilm(film: FilmModel): Promise<void>;

  public abstract removeFilm(film: FilmModel): Promise<void>;
}
