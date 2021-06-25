import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://api.github.com/';

const options: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    "Accept": "application/vnd.github.v3+json"
  },
};

const fetchProvider = axios.create(options);

export default fetchProvider;