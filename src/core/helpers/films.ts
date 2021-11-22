import FilmModel from '../../models/filmModel';

export function findFilm(search: FilmModel, films: FilmModel[]): boolean {
  return films.some((item) => item.getImdbID() === search.getImdbID());
}

export function deleteFilm(erase: FilmModel, films: FilmModel[]): FilmModel[] {
  return films.filter((item) => item.getImdbID() !== erase.getImdbID());
}
