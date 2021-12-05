export default class FilmModel {
  private readonly title: string;

  private readonly year: string;

  private readonly imdbID: string;

  private readonly imgSrc: string;

  private readonly rating: string;

  constructor(title: string, year: string, imdbID: string, imgScr: string, rating: string) {
    this.title = title;
    this.year = year;
    this.imdbID = imdbID;
    this.imgSrc = imgScr;
    this.rating = rating;
  }

  public getTitle(): string {
    return this.title;
  }

  public getYear(): string {
    return this.year;
  }

  public getImdbID(): string {
    return this.imdbID;
  }

  public getImgSrc(): string {
    return this.imgSrc;
  }

  public getRating(): string {
    return this.rating;
  }
}
