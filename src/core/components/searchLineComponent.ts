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
    clear.addEventListener('click', (event: Event) => {
      event.preventDefault();
      search.value = '';
    });

    const submit = document.createElement('img');
    submit.src = searchIcon;
    submit.setAttribute('class', 'search-submit');
    submit.addEventListener('click', (event: Event) => this.createSubmitEvent(event, form));

    form.append(search, clear, submit);
    return form;
  }

  private createSubmitEvent(event: Event, form: HTMLFormElement) {
    event.preventDefault();
    const submitEvent = document.createEvent('Event');
    submitEvent.initEvent('submit', true, true);
    form.dispatchEvent(submitEvent);
  }

  private processSubmitEvent(event: Event, setSearchRequest: (request: string) => void) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const searchRequest: string = target.searchInput.value;
    setSearchRequest(searchRequest);
  }
}

