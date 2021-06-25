import fetchProvider from 'utils/axios';
import { tSearchParam } from 'types/Search';

const repositories = {
  searchRepositories: (params: tSearchParam) =>
    fetchProvider.get('search/repositories', { params }),
};

export default repositories;
