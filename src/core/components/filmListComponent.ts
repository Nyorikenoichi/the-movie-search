import i18next from 'i18next';
import Component from '../component';
import FilmModel from '../../models/filmModel';
import FilmsManagement from '../interfaces/filmsManagement';
import FilmCardComponent from './filmCardComponent';

export default class FilmListComponent extends Component<{
  films: FilmModel[];
  filmsManagement: FilmsManagement;
}> {
  public render({ films, filmsManagement }): HTMLElement {
    const filmsListComponent: HTMLElement = document.createElement('ul');
    films.forEach((film) => {
      const listElement: HTMLElement = new FilmCardComponent().render({ film, filmsManagement });
      filmsListComponent.append(listElement);
    });

    return filmsListComponent;
  }
}
