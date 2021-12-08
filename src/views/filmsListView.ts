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

    const loaderSpinner = document.createElement('div');
    loaderSpinner.setAttribute('class', 'swiper-loader-spinner');

    const loader = document.createElement('div');
    loader.setAttribute('class', 'swiper-loader');
    loader.append(loaderSpinner)

    document.addEventListener('fetchStart', () => loader.style.opacity = '1');
    document.addEventListener('fetchEnd', () => loader.style.opacity = '0');

    const filmsSlider = new FilmSliderComponent().render({
      films,
      filmsManagement,
    });

    this.container.append(loader, filmsSlider)
    this.initializeSlider(filmsManagement.addFilms);
  }

  private initializeSlider(addFilms: () => Promise<void>): void {
    Swiper.use([Navigation, Pagination]);
    const slider = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: FilmsListView.sliderBreakpoints,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      on: {
        slideChange: () => {
          if(slider.isEnd) {
            addFilms().then(() => slider.update());
          }
        },
      },
    });
  }

  private static sliderBreakpoints = {
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
  }

  public clear(): void {
    this.container.innerHTML = '';
  }
}
