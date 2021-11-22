export default abstract class View<T extends Object> {
  protected root: HTMLElement;

  protected viewDiv: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.viewDiv = null;
  }

  public clear(): void{
    this.viewDiv.innerHTML = '';
  }

  public abstract render(args: T): void;
}
