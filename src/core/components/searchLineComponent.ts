import Component from '../component';
import searchIcon from '../../assets/icons/search.png';
import clearIcon from '../../assets/icons/cross.png';

export default class SearchLineComponent extends Component<{
  setSearchRequest: (request: string) => void;
}> {
  public render({ setSearchRequest }): HTMLElement {
    const form = document.createElement('form');
    form.setAttribute('class', 'search-form');
    form.addEventListener('submit', (event: Event) => this.processSubmitEvent(event, setSearchRequest));

    const search = document.createElement('input');
    search.setAttribute('type', 'search');
    search.setAttribute('class', 'search-input');
    search.setAttribute('name', 'searchInput');
    search.placeholder = 'search films...';

    const clear = document.createElement('img');
    clear.src = clearIcon;
    clear.setAttribute('class', 'search-clear');
    clear.addEventListener('click', (event: Event) => this.clearSearchLine(event, search));

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.value = '';
    submit.style.backgroundImage = `url(${searchIcon})`;
    submit.setAttribute('class', 'search-submit-button');

    form.append(search, clear, submit);
    return form;
  }

  private clearSearchLine(event: Event, search: HTMLInputElement) {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    search.value = '';
  }

  private processSubmitEvent(event: Event, setSearchRequest: (request: string) => void) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const searchRequest: string = target.searchInput.value;
    setSearchRequest(searchRequest);
  }
}
