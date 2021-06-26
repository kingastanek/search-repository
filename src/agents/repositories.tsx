import fetchProvider from 'utils/axios';
import { tSearchParamsAPI } from 'types/Search';

const repositories = {
  searchRepositories: (params: tSearchParamsAPI) =>
    fetchProvider.get('search/repositories', { params }),
};

export default repositories;
