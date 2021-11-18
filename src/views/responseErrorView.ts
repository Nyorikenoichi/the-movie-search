import View from '../core/view';
import Divs from '../core/constants/Divs';

export default class ResponseErrorView extends View<{ error: string }> {
  public render({ error }): void {
    const responseErrorDiv = this.root.querySelector(Divs.responseError);
    responseErrorDiv.innerHTML = '';

    const errorText = document.createTextNode(error);

    responseErrorDiv.append(errorText);
  }

  public hide(): void {
    const responseErrorDiv = this.root.querySelector(Divs.responseError);
    responseErrorDiv.innerHTML = '';
  }
}
