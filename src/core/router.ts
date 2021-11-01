import Controller from "../controller/controller";
import FavoritesView from "../views/favoritesView";
import FilmsListView from "../views/filmsListView";

export default class Router{
  public controller: Controller;
  public favoritesView: FavoritesView;
  public filmsListView: FilmsListView;


  constructor(controller: Controller, favoritesView: FavoritesView, filmsListView: FilmsListView) {
    this.controller = controller;
    this.favoritesView = favoritesView;
    this.filmsListView = filmsListView;
  }

  public getRouteInfo(): Object{
    //will implement later
    return {};
  }

  public handleHash(): void{
    //will implement later
  }

  public init(): void{
    //will implement later
  }
}