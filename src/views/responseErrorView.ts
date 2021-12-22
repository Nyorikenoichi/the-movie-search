import View from '../core/view';

export default class ResponseErrorView extends View<{ error: string }> {
  public render({ error }): void {
    this.clear();

    const errorText = document.createTextNode(error);

    this.container.append(errorText);
  }

  public clear(): void {
    this.container.innerHTML = '';
  }
}
