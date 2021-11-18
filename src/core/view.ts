export default abstract class View<T extends Object> {
  protected root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  public abstract hide(): void;

  public abstract render(args: T): void;
}
