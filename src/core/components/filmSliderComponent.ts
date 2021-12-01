import i18next from 'i18next';
import Component from '../component';
import FilmModel from '../../models/filmModel';
import FilmsManagement from '../interfaces/filmsManagement';
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


    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('class', 'movie-card-info')

    const addToFavoritesButton = document.createElement('img');
    if (filmsManagement.findInFavorites(film)) {
      addToFavoritesButton.src = heartIcon;
    } else {
      addToFavoritesButton.src = heartEmptyIcon;
    }

    addToFavoritesButton.setAttribute('class', 'movie-card-add-button');
    addToFavoritesButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (filmsManagement.findInFavorites(film)) {
        filmsManagement.removeFromFavorites(film);
        addToFavoritesButton.src = heartEmptyIcon;
      } else {
        filmsManagement.addToFavorites(film);
        addToFavoritesButton.src = heartIcon;
      }
    });

    const year = document.createElement('div');
    year.setAttribute('class', 'movie-card-year');
    year.textContent = film.getYear();

    const rating = document.createElement('div');
    rating.setAttribute('class', 'movie-card-rating');
    const starImg = document.createElement('img');
    starImg.setAttribute('class', 'movie-card-star');
    starImg.src = starIcon;
    const ratingLabel = document.createElement('div');
    ratingLabel.setAttribute('class', 'movie-card-rating-label');
    ratingLabel.textContent = '10.0';
    rating.append(starImg, ratingLabel);

    infoContainer.append(addToFavoritesButton, year, rating);
    slide.append(title, poster, infoContainer);
    return slide;
  }
}
