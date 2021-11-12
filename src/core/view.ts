import FilmsManagement from './interfaces/filmsManagement';

export default abstract class View {
  protected root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  public abstract hide(): void;

  public abstract render(filmsManagement: FilmsManagement): void;
}
