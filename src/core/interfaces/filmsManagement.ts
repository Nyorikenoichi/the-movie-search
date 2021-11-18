import FilmModel from '../../models/filmModel';

interface FilmsManagement {
  addToFavorites: (film: FilmModel) => null;
  removeFromFavorites: (film: FilmModel) => null;
  addFilms: () => Promise<void>;
  findInFavorites: (film: FilmModel) => null;
}

export default FilmsManagement;
