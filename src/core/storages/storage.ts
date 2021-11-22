import FilmModel from '../../models/filmModel';

export default abstract class Storage {
  public abstract getFavorites(): Promise<FilmModel[]>;

  public abstract saveFilm(film: FilmModel): Promise<void>;

  public abstract removeFilm(film: FilmModel): Promise<void>;
}
