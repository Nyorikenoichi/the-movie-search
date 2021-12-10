import Component from '../component';
import FilmModel from '../../models/filmModel';
import FilmsManagement from '../interfaces/filmsManagement';
import FilmCardComponent from './filmCardComponent';

export default class FilmSliderComponent extends Component<{
  films: FilmModel[];
  filmsManagement: FilmsManagement;
}> {
  public render({ films, filmsManagement }): HTMLElement {
    const container = document.createElement('div');
    container.setAttribute('class', 'swiper');
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'swiper-wrapper');

    films.forEach((film) => {
      const slide = new FilmCardComponent().render({ film, filmsManagement });
      wrapper.append(slide);
    });

    const pagination = document.createElement('div');
    pagination.setAttribute('class', 'swiper-pagination');

    container.append(wrapper, pagination);
    return container;
  }
}
