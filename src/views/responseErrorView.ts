import View from '../core/view';
import SectionID from '../core/constants/SectionID';

export default class ResponseErrorView extends View<{ error: string }> {
  public render({ error }): void {
    if (!this.container) {
      this.container = this.root.querySelector(SectionID.responseError);
    }
    this.clear();

    const errorText = document.createTextNode(error);

    this.container.append(errorText);
  }

  public clear(): void {
    this.container.innerHTML = '';
  }
}
