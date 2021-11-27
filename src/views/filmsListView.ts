import Swiper, { Navigation, Pagination } from 'swiper';
import View from '../core/view';
import SectionID from '../core/constants/SectionID';
import FilmModel from '../models/filmModel';
import FilmsManagement from '../core/interfaces/filmsManagement';
import FilmSliderComponent from '../core/components/filmSliderComponent';

export default class FilmsListView extends View<{
  films: FilmModel[];
  filmsManagement: FilmsManagement;
}> {
  public render({ films, filmsManagement }): void {
    if (!this.container) {
      this.container = this.root.querySelector(SectionID.filmsList);
    }
    this.clear();

    const filmsList = new FilmSliderComponent().render({
      films,
      filmsManagement,
    });

    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'load more'; // тут не использую i18next потому что этой кнопки не будет на сайте
    loadMoreButton.addEventListener('mousedown', (event: MouseEvent) => {
      event.preventDefault();
      filmsManagement.addFilms();
    });
    this.container.append(filmsList, loadMoreButton);

    Swiper.use([Navigation, Pagination]);
    // eslint-disable-next-line no-new
    new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 2,
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    });
  }
}
