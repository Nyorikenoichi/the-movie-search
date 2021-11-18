import FilmModel from '../../models/filmModel';

export default abstract class Storage {
  public abstract getFavorites(): FilmModel[];

  public abstract saveFilm(film: FilmModel): void;

  public abstract removeFilm(film: FilmModel): void;

  public abstract clear(): void;
}
