import './style.scss';
import Controller from './controller/controller';
import FilmsListView from './views/filmsListView';
import FavoritesView from './views/favoritesView';
import Router from './core/router';
import SearchLineComponent from './core/components/searchLineComponent';

const root = document.querySelector('#root');
const searchDiv = document.createElement('div');
const filmListDiv = document.createElement('div');
const favoritesDiv = document.createElement('div');

root.appendChild(searchDiv);
root.appendChild(filmListDiv);
root.appendChild(favoritesDiv);

const filmListView = new FilmsListView();
const favoritesView = new FavoritesView();
const router = new Router(filmListView, favoritesView, filmListDiv, favoritesDiv);
const controller = new Controller(router);
filmListView.setController(controller);
favoritesView.setController(controller);

SearchLineComponent.render(searchDiv, controller);
