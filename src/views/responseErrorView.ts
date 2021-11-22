import View from '../core/view';
import SectionID from '../core/constants/SectionID';

export default class ResponseErrorView extends View<{ error: string }> {
  public render({ error }): void {
    if (!this.viewDiv) {
      this.viewDiv = this.root.querySelector(SectionID.responseError);
    }
    this.clear();

    const errorText = document.createTextNode(error);

    this.viewDiv.append(errorText);
  }
}
