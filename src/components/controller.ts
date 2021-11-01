import View from "./view";
import Service from "./service";
import FilmModel from "./models/filmModel";

export default class Controller{
  public films: Array<FilmModel>;
  public favorites: Array<FilmModel>;
  private service: Service;
  public view: View;

  constructor() {
    this.films = [];
    this.favorites = [];
    this.service = new Service();
    this.view = null;
  }

  public async getFilms(requestURL: string): Promise<any>{
    this.films = await this.service.getFilms(requestURL);
  }

  public setView(view: View){
    this.view = View;
  }
}