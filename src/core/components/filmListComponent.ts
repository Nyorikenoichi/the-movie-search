import Component from '../component';
import FilmModel from '../../models/filmModel';
import FilmsManagement from '../interfaces/filmsManagement';
import FilmCardComponent from './filmCardComponent';
import i18next from 'i18next';

export default class FilmListComponent extends Component<{
  films: FilmModel[];
  filmsManagement: FilmsManagement;
  containerClass: string;
}> {
  public render({ films, filmsManagement, containerClass }): HTMLElement {
    const filmsListComponent: HTMLElement = document.createElement('div');
    filmsListComponent.setAttribute('class', containerClass);
    if (films.length !== 0) {
      films.forEach((film) => {
        const listElement: HTMLElement = new FilmCardComponent().render({ film, filmsManagement });
        filmsListComponent.append(listElement);
      });
    } else {
      filmsListComponent.append(document.createTextNode(i18next.t('No favorites...')));
    }

    return filmsListComponent;
  }
}
