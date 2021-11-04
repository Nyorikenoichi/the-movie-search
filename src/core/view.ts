import Controller from '../controller/controller';

export default abstract class View {
  protected controller: Controller;

  constructor() {
    this.controller = null;
  }

  public setController(controller: Controller): void {
    this.controller = controller;
  }

  abstract render(root: Element): void;
}
