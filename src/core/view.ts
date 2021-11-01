import Controller from '../controller/controller';

export default abstract class View {
  controller: Controller;

  protected constructor() {
    this.controller = null;
  }

  public setController(controller: Controller): void{
    this.controller = controller
  }

  abstract render(): void;
}
