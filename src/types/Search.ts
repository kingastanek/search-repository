
export type tRepositoriesItemAPI = {
  name: string;
  owner: { login: string };
  created_at: Date;
  stargazers_count: number;
};

export type tRepositoriesData = {
  order: number;
  name: string;
  owner: string;
  stars: number;
  createdAt: Date;
};

export type tSearchParams = {
  q: string;
  per_page: number;
  page?: number;
  sort?: {
    fieldName: string;
    order: string;
  };
};

export type tSearchParamsAPI = {
  q: string;
  per_page: number;
  page?: number;
  sort?: string;
  order?: string;
};
