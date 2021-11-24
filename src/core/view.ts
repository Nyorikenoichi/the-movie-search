export default abstract class View<T extends Object> {
  protected root: HTMLElement;

  protected container: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.container = null;
  }

  public clear(): void {
    this.container.innerHTML = '';
  }

  public isRendered(): boolean {
    return this.container !== null && this.container.innerHTML !== '';
  }

  public abstract render(args: T): void;
}
