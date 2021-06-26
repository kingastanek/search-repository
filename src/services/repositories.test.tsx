import requests from 'utils/axios';
import repositories from './repositories';

jest.mock('utils/axios');

describe('#repositories services', () => {
  it('should return proper data from search repository API', () => {
    const APIResponse = {
      data: {
        items: [
          {
            name: 'example1',
            owner: {
              login: 'user1',
            },
            created_at: new Date(2021, 5, 6),
            stargazers_count: 15,
          },
          {
            name: 'example2',
            owner: {
              login: 'user2',
            },
            created_at: new Date(2020, 1, 9),
            stargazers_count: 42,
          },
        ],
        total_count: 2,
      },
      status: 200,
    };

    (requests.get as jest.Mock).mockResolvedValueOnce(APIResponse);

    return repositories
      .searchRepositories({
        page: 0,
        per_page: 10,
        q: 'example',
      })
      .then((data) => {
        expect(requests.get).toHaveBeenCalledWith('search/repositories', {
          params: {
            page: 0,
            per_page: 10,
            q: 'example',
          },
        });
        expect(data).toEqual({
          data: {
            count: 2,
            results: [
              {
                name: 'example1',
                owner: 'user1',
                stars: 15,
                createdAt: '06/06/2021',
                order: 1,
              },
              {
                name: 'example2',
                owner: 'user2',
                stars: 42,
                createdAt: '09/02/2020',
                order: 2,
              },
            ],
          },
        });

        (requests.get as jest.Mock).mockClear();
      });
  });
});
