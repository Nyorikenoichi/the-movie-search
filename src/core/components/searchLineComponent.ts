import Controller from '../../controller/controller';

export default class SearchLineComponent {
  static render(root: Element, controller: Controller): void {
    const form = document.createElement('form');
    const search = document.createElement('input');
    const submit = document.createElement('input');

    search.setAttribute('type', 'search');
    search.setAttribute('id', 'search');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'send request');

    form.appendChild(search);
    form.appendChild(submit);

    form.addEventListener('submit', (event) => {
      const searchRequest: string = root.querySelector('input').value;
      controller.setSearchRequest(searchRequest);
      event.preventDefault();
    });

    root.appendChild(form);
  }
}
