import i18next from 'i18next';
import Component from '../component';
import FilmModel from '../../models/filmModel';
import FilmsManagement from '../interfaces/filmsManagement';
import FilmCardComponent from './filmCardComponent';
import starIcon from '../../assets/icons/star.png';
import heartIcon from '../../assets/icons/heart.png';
import heartEmptyIcon from '../../assets/icons/heart_empty.png';

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

    const buttonPrev = document.createElement('div');
    const buttonNext = document.createElement('div');
    buttonPrev.setAttribute('class', 'swiper-button-prev');
    buttonNext.setAttribute('class', 'swiper-button-next');

    container.append(wrapper, pagination, buttonPrev, buttonNext);
    return container;
  }
}
