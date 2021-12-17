import LoaderComponent from './components/loaderComponent';

export default abstract class View<T extends Object> {
  protected root: HTMLElement;

  public container: HTMLElement;

  protected loader: LoaderComponent;

  constructor(root: HTMLElement, loader?: LoaderComponent) {
    this.root = root;
    this.container = null;
    this.loader = loader;
  }

  public showLoader(): void {
    this.loader.show();
  }

  public hideLoader(): void {
    this.loader.hide();
  }

  public appendLoader(): void {
    this.container.append(this.loader.render());
  }

  public abstract clear();

  public isRendered(): boolean {
    return this.container !== null && this.container.innerHTML.trim() !== '';
  }

  public abstract render(args: T): void;
}
