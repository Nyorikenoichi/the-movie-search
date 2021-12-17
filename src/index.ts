import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './style/index.scss';

import Controller from './controller/controller';
import FilmsListView from './views/filmsListView';
import FavoritesView from './views/favoritesView';
import Router from './core/router';
import ResponseErrorView from './views/responseErrorView';
import initI18next from './localization/i18next';
import FilmsService from './core/services/filmsService';
import FilmsLocalStorage from './core/storages/localStorage';
import FilmsRepository from './core/repos/filmsRepository';
import loaderComponent from './core/components/loaderComponent';

initI18next().then(() => {
  const root: HTMLElement = document.querySelector('#root');
  const filmsListLoader = new loaderComponent();
  const filmsListView = new FilmsListView(root, filmsListLoader);
  const favoritesLoader = new loaderComponent();
  const favoritesView = new FavoritesView(root, favoritesLoader);
  const responseErrorLoader = new loaderComponent();
  const responseErrorView = new ResponseErrorView(root, responseErrorLoader);
  const router = new Router(
    filmsListView,
    favoritesView,
    responseErrorView,
    root,
  );

  const storage = new FilmsLocalStorage();
  const repository = new FilmsRepository();
  repository.setStorage(storage);
  const service = new FilmsService();
  service.setRepository(repository);

  // eslint-disable-next-line no-new
  new Controller(router, service);
});
