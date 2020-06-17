const baseUrl = 'https://restcountries.eu/rest/v2';
const resource = '/name/';

export default {
  query: '', //то что будет введено в инпут
  fetchCountries() {
    console.log(`${this.query}`)
    const requestParams = `${this.query}`;

    return fetch(baseUrl + resource + requestParams)
      .then(response => response.json())
      .then(countries => {
        console.log(countries)
        return countries;
      });
  }
}
