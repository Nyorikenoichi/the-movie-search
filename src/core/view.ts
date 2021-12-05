export default abstract class View<T extends Object> {
  protected root: HTMLElement;

  protected container: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.container = null;
  }

  public abstract clear();

  public isRendered(): boolean {
    return this.container !== null && this.container.innerHTML.trim() !== '';
  }

  public abstract render(args: T): void;
}
