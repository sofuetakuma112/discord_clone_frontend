import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_AXIOS_BASE_URL || 'http://0.0.0.0:5000',
  });
};
