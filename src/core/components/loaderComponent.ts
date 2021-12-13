import Component from '../component';

export default class LoaderComponent extends Component<{}> {
  private loader: HTMLElement;

  public show(): void {
    this.loader.classList.add('swiper-loader-show');
  }

  public hide(): void {
    this.loader.classList.remove('swiper-loader-show');
  }

  public render(): HTMLElement {
    const loaderSpinner = document.createElement('div');
    loaderSpinner.setAttribute('class', 'swiper-loader-spinner');

    this.loader = document.createElement('div');
    this.loader.setAttribute('class', 'swiper-loader');
    this.loader.append(loaderSpinner);
    return this.loader;
  }
}
