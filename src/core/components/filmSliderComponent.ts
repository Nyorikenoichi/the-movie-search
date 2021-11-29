import i18next from 'i18next';
import Component from '../component';
import FilmModel from '../../models/filmModel';
import FilmsManagement from '../interfaces/filmsManagement';

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
      const slide = this.renderSlide(film, filmsManagement);
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

  private renderSlide(film: FilmModel, filmsManagement: FilmsManagement): HTMLElement {
    const slide = document.createElement('div');
    slide.setAttribute('class', 'swiper-slide movie-card');

    const title = document.createElement('a');
    title.setAttribute('class', 'movie-card-title');
    title.textContent = film.getTitle();
    title.href = `https://www.imdb.com/title/${film.getImdbID()}`;

    const poster = document.createElement('img');
    poster.setAttribute('class', 'movie-card-poster')
    poster.src = film.getImgSrc();

    const addToFavoritesButton: HTMLElement = document.createElement('button');
    if (filmsManagement.findInFavorites(film)) {
      addToFavoritesButton.textContent = i18next.t('Remove');
    } else {
      addToFavoritesButton.textContent = i18next.t('Add');
    }

    addToFavoritesButton.addEventListener('mousedown', (event) => {
      event.preventDefault();
      if (filmsManagement.findInFavorites(film)) {
        filmsManagement.removeFromFavorites(film);
        addToFavoritesButton.textContent = i18next.t('Add');
      } else {
        filmsManagement.addToFavorites(film);
        addToFavoritesButton.textContent = i18next.t('Remove');
      }
    });

    slide.append(title, poster, addToFavoritesButton);
    return slide;
  }
}
