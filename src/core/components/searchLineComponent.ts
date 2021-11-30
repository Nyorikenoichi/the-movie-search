import i18next from 'i18next';
import Component from '../component';
import searchIcon from '../../assets/icons/search.png'

export default class SearchLineComponent extends Component<{
  setSearchRequest: (request: string) => void;
}> {
  public render({ setSearchRequest }): HTMLElement {
    const form = document.createElement('form');
    const search = document.createElement('input');
    const submit = document.createElement('img');

    search.setAttribute('type', 'search');
    search.setAttribute('class', 'search-input');
    search.setAttribute('name', 'searchInput');
    search.placeholder = 'search films...';

    submit.src = searchIcon;
    submit.setAttribute('class', 'search-submit');
    submit.addEventListener('mousedown', (event: Event) => {
      const submitEvent = document.createEvent("Event");
      submitEvent.initEvent("submit", true, true);
      form.dispatchEvent(submitEvent);
    });

    form.setAttribute('class', 'search-form');
    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLFormElement;
      const searchRequest: string = target.searchInput.value;
      setSearchRequest(searchRequest);
    });
    form.append(search, submit);
    return form;
  }
}
