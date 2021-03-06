import { AxiosResponse } from 'axios';
import { formatDate } from 'utils/dateManager';
import repositoriesAgent from 'agents/repositories';
import {
  tRepositoriesItemAPI,
  tSearchParams,
  tSearchParamsAPI,
  tRepositoriesData,
} from 'types/Search';

const searchRepositories = async ({ q, page, sort }: tSearchParams) => {
  let params: tSearchParamsAPI = { q: '', per_page: 10, page: 0 };
  if (q) params.q = q;
  if (page) params.page = page;
  if (sort?.fieldName && sort?.order) {
    params.order = sort.order;
    params.sort = sort.fieldName;
  }

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
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  searchRepositories,
};
