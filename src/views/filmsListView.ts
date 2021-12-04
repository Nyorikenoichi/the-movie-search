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

    const filmsSlider = new FilmSliderComponent().render({
      films,
      filmsManagement,
    });

    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'load more'; // тут не использую i18next потому что этой кнопки не будет на сайте
    loadMoreButton.addEventListener('mousedown', (event: MouseEvent) => {
      event.preventDefault();
      filmsManagement.addFilms();
    });
    this.container.append(filmsSlider)// , loadMoreButton);
    this.initializeSlider();
  }

  private initializeSlider(): void{
    Swiper.use([Navigation, Pagination]);
    // eslint-disable-next-line no-new
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        500: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        750: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 40
        },
      },
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

  public clear(): void {
    this.container.innerHTML = '';
  }
}
