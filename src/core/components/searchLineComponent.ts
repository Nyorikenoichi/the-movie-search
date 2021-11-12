export default class SearchLineComponent {
  static render(setSearchRequest: Function): HTMLElement {
    const form = document.createElement('form');
    const search = document.createElement('input');
    const submit = document.createElement('input');

    search.setAttribute('type', 'search');
    search.setAttribute('id', 'search');
    search.setAttribute('name', 'searchInput');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'send request');

    form.append(search);
    form.append(submit);

    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      const searchRequest: string = event.target['searchInput'].value;
      setSearchRequest(searchRequest);
    });

    return form;
  }
}
