import { AxiosResponse } from 'axios';
import { formatDate } from 'utils/dateManager';
import repositoriesAgent from 'agents/repositories';
import {
  tRepositoriesItemAPI,
  tSearchParam,
  tRepositoriesData,
} from 'types/Search';

const searchRepositories = async ({ q, page, sort, order }) => {
  let params: tSearchParam = { q: '', per_page: 10, page: 1 };
  if (q) params.q = q;
  if (page) params.page = page;
  // if (sort) params.sort = sort;
  if (order) params.order = order;

  const result: AxiosResponse = await repositoriesAgent.searchRepositories(
    params
  );
  const {
    data: { items, total_count },
  } = result;

  const mappedData: tRepositoriesData[] = items?.length
    ? items.map((item: tRepositoriesItemAPI, index: number) => {
        const {
          name,
          owner: { login: owner },
          created_at: createdAt,
          stargazers_count: stars,
        } = item;
        const formattedCreatedAt = !!createdAt
          ? formatDate(new Date(createdAt))
          : '';

        return {
          name,
          owner,
          stars,
          createdAt: formattedCreatedAt,
          order: index + 1,
        };
      })
    : [];

  return { data: { count: total_count, results: mappedData } };
};

export default {
  searchRepositories,
};
