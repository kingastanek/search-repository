import React, { useState, useCallback, useEffect } from 'react';
import { Search, Table, Pagination } from 'components';
import { useFetch, useDebounce } from 'hooks';
import repositoriesService from 'services/repositories';
import { tableHead } from './TableConfig';
import { Wrapper, Title, Subtitle } from './RepositoriesList.style';

type tSortParams = {
  field: string;
  order: string;
};

const RepositoriesList = (): JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const [sortParams, setSortParams] = useState<tSortParams>({
    field: '',
    order: 'asc',
  });

  const [setParamsHandler, loading, data, count] = useFetch(
    repositoriesService.searchRepositories
  );
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchValue, 1000);

  const fetchData = useCallback(
    () =>
      setParamsHandler({
        q: debouncedSearchTerm,
        page,
        sort: sortParams,
      }),
    [setParamsHandler, debouncedSearchTerm, page, sortParams]
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (!!debouncedSearchTerm) fetchData();
  }, [debouncedSearchTerm, fetchData]);

  const setSortParamsHandler = (field: string, order: string) => {
    setSortParams({ field, order });
  };

  const setRequestParams = useCallback(
    (newPage: number) => {
      if (newPage !== page) setPage(newPage);
    },
    [page]
  );

  return (
    <Wrapper>
      <Title>Repository search</Title>
      <Subtitle>
        Type to search. Only the first 1000 search results are available!
      </Subtitle>
      <Search
        name='repositories'
        value={searchValue}
        onChange={handleSearchChange}
      />
      {loading && <p>Loading...</p>}
      <Table
        tableBodyData={data}
        tableHead={tableHead}
        setSortParams={(field: string, sort: string) => {
          setSortParamsHandler(field, sort);
        }}
      />
      <Pagination
        totalRecords={count}
        setParams={(page: number) => {
          setRequestParams(page);
        }}
        page={page}
      />
    </Wrapper>
  );
};

export default RepositoriesList;
