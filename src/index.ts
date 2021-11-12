import './style.scss';
import Controller from './controller/controller';
import FilmsListView from './views/filmsListView';
import FavoritesView from './views/favoritesView';
import Router from './core/router';

const root: HTMLElement = document.querySelector('#root');

const filmsListView = new FilmsListView(root);
const favoritesView = new FavoritesView(root);
const router = new Router(filmsListView, favoritesView, root);
const controller = new Controller(router);
