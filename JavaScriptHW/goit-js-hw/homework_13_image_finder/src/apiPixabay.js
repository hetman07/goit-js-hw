const baseUrl = 'https://cors-anywhere.herokuapp.com/https://pixabay.com/api/';

//формирование адресной строки для запроса на API сервер PixaBay

export default {
  per_page: 12,
  key: '16866490-95e5a3597ee6f5bb528b18ee9',
  query: '',
  fetchUrl() {
    const requestParams = `?key=${this.key}&q=${this.query}&per_page=${this.per_page}&page=`;
    return (baseUrl + requestParams);
  }
};
