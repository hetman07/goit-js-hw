const baseUrl = 'https://restcountries.eu/rest/v2';
const resource = '/name/';

export default {
  query: '', //то что будет введено в инпут
  fetchCountries() {

    return fetch(baseUrl + resource + `${this.query}`)
      .then(response => response.json())
  }
}
