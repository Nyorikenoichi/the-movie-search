export default abstract class Component<T extends Object> {
  public abstract render(args: T): HTMLElement;
}
