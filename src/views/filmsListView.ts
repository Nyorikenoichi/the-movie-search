import View from '../core/view';
import Controller from '../controller/controller';

export default class FilmsListView extends View {
  protected controller: Controller;

  setController(controller: Controller) {
    super.setController(controller);
  }

  public render(): void {
    const root = document.querySelector('#root');
    root.innerHTML = null;
    const filmsList = document.createElement('ul');
    this.controller.films.forEach((item) => filmsList.innerHTML += `<li>${item.getTitle()}</li>`);
    root.appendChild(filmsList);
  }
}
