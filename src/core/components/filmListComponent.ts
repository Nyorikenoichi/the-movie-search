import FilmModel from '../../models/filmModel';
import FilmsManagement from '../interfaces/filmsManagement';

export default class FilmListComponent {
  public static render(filmsList: FilmModel[], filmsManagement: FilmsManagement) {
    const filmsListComponent: HTMLElement = document.createElement('ul');

    filmsList.forEach((film) => {
      const listElement: HTMLElement = document.createElement('li');
      const addToFavoritesButton: HTMLElement = document.createElement('button');

      if (filmsManagement.getFavorites().some((item) => item.getImdbID() === film.getImdbID())) {
        addToFavoritesButton.textContent = 'remove';
      } else {
        addToFavoritesButton.textContent = 'add';
      }

      addToFavoritesButton.addEventListener('mousedown', (event) => {
        event.preventDefault();
        if (filmsManagement.getFavorites().some((item) => item.getImdbID() === film.getImdbID())) {
          filmsManagement.removeFromFavorites(film);
          addToFavoritesButton.textContent = 'add';
        } else {
          filmsManagement.addToFavorites(film);
          addToFavoritesButton.textContent = 'remove';
        }
      });

      listElement.append(document.createTextNode(film.getTitle()));
      listElement.append(addToFavoritesButton);
      filmsListComponent.append(listElement);
    });
    return filmsListComponent;
  }
}
