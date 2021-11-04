import FilmModel from '../../models/filmModel';
import Controller from '../../controller/controller';

export default class FilmListComponent {
  public static render(filmsList: FilmModel[], controller: Controller): HTMLUListElement {
    const filmsListComponent = document.createElement('ul');
    filmsList.forEach((film) => {
      const li = document.createElement('li');
      const addToFavoritesButton = document.createElement('button');

      addToFavoritesButton.innerText = controller.favorites.some((item: FilmModel) =>
        item.getTitle() === film.getTitle() && item.getYear() === film.getYear()) ? 'remove' : 'add';

      addToFavoritesButton.addEventListener('mousedown', (event) => {
        if (controller.favorites.some((item: FilmModel) =>
          item.getTitle() === film.getTitle() && item.getYear() === film.getYear())) {
          controller.removeFromFavorites(film);
          addToFavoritesButton.innerText = 'add';
        } else {
          controller.addToFavorites(film);
          addToFavoritesButton.innerText = 'remove';
        }
        console.log(controller.favorites);
        event.preventDefault();
      });

      li.appendChild(document.createTextNode(film.getTitle()));
      li.appendChild(addToFavoritesButton);
      filmsListComponent.appendChild(li);
    });
    return filmsListComponent;
  }
}
