import './style.scss';
import Controller from './controller/controller';
import FilmsListView from './views/filmsListView';
import FavoritesView from './views/favoritesView';
import Router from './core/router';

const filmListView = new FilmsListView();
const favoritesView = new FavoritesView();
const router = new Router(filmListView, favoritesView);
const controller = new Controller(router);
filmListView.setController(controller);
favoritesView.setController(controller);

setTimeout(() => controller.addToFavorites(controller.films[0]), 3000);
