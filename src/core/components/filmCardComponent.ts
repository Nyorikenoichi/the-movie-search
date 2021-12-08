import i18next from 'i18next';
import Component from '../component';
import FilmModel from '../../models/filmModel';
import FilmsManagement from '../interfaces/filmsManagement';
import starIcon from '../../assets/icons/star.png';
import heartIcon from '../../assets/icons/heart.png';
import heartEmptyIcon from '../../assets/icons/heart_empty.png';

export default class FilmCardComponent extends Component<{
  film: FilmModel;
  filmsManagement: FilmsManagement;
}> {
  public render({ film, filmsManagement }): HTMLElement {
    const slide = document.createElement('div');
    slide.setAttribute('class', 'swiper-slide movie-card');

    const title = document.createElement('a');
    title.setAttribute('class', 'movie-card-title');
    title.textContent = film.getTitle();
    title.href = `https://www.imdb.com/title/${film.getImdbID()}`;

    const poster = document.createElement('img');
    poster.setAttribute('class', 'movie-card-poster')
    poster.src = film.getImgSrc();

    const infoFirstRow = document.createElement('div');
    infoFirstRow.setAttribute('class', 'movie-card-info-row-1')

    const infoSecondRow = document.createElement('div');
    infoSecondRow.setAttribute('class', 'movie-card-info-row-2')

    const invisibleDiv = document.createElement('div');
    invisibleDiv.setAttribute('class', 'movie-card-invisible-div');

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

    const starImg = document.createElement('img');
    starImg.setAttribute('class', 'movie-card-star');
    starImg.src = starIcon;

    const ratingLabel = document.createElement('div');
    ratingLabel.setAttribute('class', 'movie-card-rating-label');
    ratingLabel.textContent = film.getRating();

    infoFirstRow.append(invisibleDiv, year, addToFavoritesButton);
    infoSecondRow.append(starImg, ratingLabel)
    slide.append(title, poster, infoFirstRow, infoSecondRow);
    return slide;
  }
}
