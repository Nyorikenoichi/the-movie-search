import i18next from 'i18next';
import Component from '../component';

export default class SearchLineComponent extends Component<{ setSearchRequest: (request: string) => void }> {
  public render({ setSearchRequest }): HTMLElement {
    const form = document.createElement('form');
    const search = document.createElement('input');
    const submit = document.createElement('input');

    search.setAttribute('type', 'search');
    search.setAttribute('id', 'search');
    search.setAttribute('name', 'searchInput');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', i18next.t('Search'));

    form.append(search);
    form.append(submit);

    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      // eslint-disable-next-line @typescript-eslint/dot-notation
      const searchRequest: string = event.target['searchInput'].value;
      setSearchRequest(searchRequest);
    });

    return form;
  }
}
