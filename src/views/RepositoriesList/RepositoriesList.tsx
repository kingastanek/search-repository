import React, { useState, useCallback, useEffect } from 'react';
import { Table, Spinner, Notification } from 'components';
import { useFetch, useDebounce } from 'hooks';
import { tSortParams } from 'types/Table';
import repositoriesService from 'services/repositories';
import { tableHead } from './TableConfig';
import { Wrapper, Title, Subtitle } from './RepositoriesList.style';

const RepositoriesList = (): JSX.Element => {
  const [errors, setErrors] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [sortParams, setSortParams] = useState<tSortParams>({
    fieldName: '',
    order: 'asc',
  });

  const [setParamsHandler, loading, data, count, APIErrors] = useFetch(
    repositoriesService.searchRepositories
  );
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchValue);

  useEffect(() => {
    setErrors(APIErrors);
  }, [APIErrors]);

  const fetchData = useCallback(() => {
    if (debouncedSearchTerm) {
      setParamsHandler({
        q: debouncedSearchTerm,
        page,
        sort: sortParams,
      });
    }
  }, [setParamsHandler, page, sortParams, debouncedSearchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const setSortParamsHandler = (fieldName: string, order: string) => {
    setSortParams({ fieldName, order });
  };

  const setPageParams = useCallback(
    (newPage: number) => {
      if (newPage !== page) setPage(newPage);
    },
    [page]
  );

  return (
    <>
      {!!errors && (
        <Notification
          key={errors}
          message={errors}
          show
          customClose
          closeNotification={() => setErrors('')}
        />
      )}
      {!!loading && <Spinner />}
      <Wrapper>
        <Title>Repository search</Title>
        <Subtitle>
          Type to search. Only the first 1000 search results are available!
        </Subtitle>
        <Table
          tableBodyData={data}
          tableHead={tableHead}
          setSortParams={(fieldName, order) => {
            setSortParamsHandler(fieldName, order);
          }}
          setPageParams={(page: number) => setPageParams(page)}
          totalRecords={count}
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
        />
      </Wrapper>
    </>
  );
};

export default RepositoriesList;
