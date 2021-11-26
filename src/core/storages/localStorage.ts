import Storage from './storage';
import FilmModel from '../../models/filmModel';
import SerializedFilmModel from '../interfaces/serializedFilmModel';
import StorageKey from '../constants/StorageKey';

export default class LocalStorage extends Storage {
  public getFavorites(): Promise<SerializedFilmModel[]> {
    const favorites = JSON.parse(localStorage.getItem(StorageKey.favorites));
    return Promise.resolve(favorites || []);
  }

  public async saveFilm(film: FilmModel): Promise<void> {
    let favorites = await this.getFavorites();
    const filmToSave = { ...film } as SerializedFilmModel;
    favorites = [...favorites, filmToSave];
    localStorage.setItem(StorageKey.favorites, JSON.stringify(favorites));
  }

  public async removeFilm(film: FilmModel): Promise<void> {
    let favorites = await this.getFavorites();
    const filmToRemove = { ...film } as SerializedFilmModel;
    favorites = favorites.filter((item) => item.imdbID !== filmToRemove.imdbID);
    localStorage.setItem(StorageKey.favorites, JSON.stringify(favorites));
  }
}
