
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

export type tSearchParam = {
  q: string;
  per_page: number;
  page: number;
  sort?: string;
  order?: string;
};
