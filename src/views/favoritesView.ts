import View from '../core/view';
import Controller from '../controller/controller';

export default class FavoritesView extends View {
  protected controller: Controller;

  setController(controller: Controller) {
    super.setController(controller);
  }

  public render(): void {
    const root = document.querySelector('#root');
    root.innerHTML = null;
    const favoritesList = document.createElement('ul');
    this.controller.favorites.forEach((item) => {
      favoritesList.innerHTML += `<li>${item.getTitle()}</li>`;
    });
    root.appendChild(favoritesList);
  }
}
