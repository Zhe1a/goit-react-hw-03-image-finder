import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';

const ArticlesApi = (value = '', page = 1) => {
  return axios
    .get('/api/?', {
      params: {
        key: '30366820-6d702dd9a35a2869e6c96b3e9',
        q: value,
        page,
        per_page: 12,
      },
    })
    .then((res) => res.data);
};

export default ArticlesApi;
