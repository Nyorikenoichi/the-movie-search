import i18next from 'i18next';
import Component from '../component';
import FilmModel from '../../models/filmModel';
import FilmsManagement from '../interfaces/filmsManagement';

export default class FilmListComponent extends Component<{ films: FilmModel[], filmsManagement: FilmsManagement }> {
  public render({ films, filmsManagement }): HTMLElement {
    const filmsListComponent: HTMLElement = document.createElement('ul');
    films.forEach((film) => {
      const listElement: HTMLElement = document.createElement('li');
      const addToFavoritesButton: HTMLElement = document.createElement('button');

      if (filmsManagement.findInFavorites(film)) {
        addToFavoritesButton.textContent = i18next.t('keyRemove');
      } else {
        addToFavoritesButton.textContent = i18next.t('keyAdd');
      }

      addToFavoritesButton.addEventListener('mousedown', (event) => {
        event.preventDefault();
        if (filmsManagement.findInFavorites(film)) {
          filmsManagement.removeFromFavorites(film);
          addToFavoritesButton.textContent = i18next.t('keyAdd');
        } else {
          filmsManagement.addToFavorites(film);
          addToFavoritesButton.textContent = i18next.t('keyRemove');
        }
      });

      listElement.append(document.createTextNode(film.getTitle()));
      listElement.append(addToFavoritesButton);
      filmsListComponent.append(listElement);
    });
    return filmsListComponent;
  }
}
