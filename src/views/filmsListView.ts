import View from '../core/view';
import Controller from '../controller/controller';

export default class FilmsListView extends View {
  public controller: Controller;

  constructor() {
    super();
  }

  setController(controller: Controller) {
    super.setController(controller);
  }

  public render(): void {
    // will implement later
  }
}
