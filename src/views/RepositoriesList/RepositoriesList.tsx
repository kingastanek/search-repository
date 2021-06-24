import { useState } from 'react';
import { Search, Table } from 'components';
import { tableHead } from './TableConfig';
import { Wrapper, Title, Subtitle } from './RepositoriesList.style';

type tSortParams = {
  field: string;
  order: string;
};

const RepositoriesList = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortParams, setSortParams] = useState<tSortParams>({
    field: '',
    order: 'asc',
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const tableBodyData = [
    {
      order: 1,
      id: 1,
      name: 'adam',
      owner: 'kuc',
      stars: 432,
      createdAt: '01/01/1999',
    },
    {
      order: 2,
      id: 2,
      name: 'bridget',
      owner: 'lampart',
      stars: 13,
      createdAt: '01/01/2000',
    },
    {
      order: 3,
      id: 3,
      name: 'charlie',
      owner: 'pies',
      stars: 1,
      createdAt: '01/01/2001',
    },
    {
      order: 4,
      id: 4,
      name: 'dan',
      owner: 'kot',
      stars: 54,
      createdAt: '01/01/2002',
    },
  ];

  return (
    <Wrapper>
      <Title>Repository search</Title>
      <Subtitle>Type to search</Subtitle>
      <Search
        name='repositories'
        value={searchValue}
        onChange={handleSearchChange}
      />
      <Table
        tableBodyData={tableBodyData}
        tableHead={tableHead}
        setSortParams={(field: string, order: string) =>
          setSortParams({ field, order })
        }
      />
    </Wrapper>
  );
};

export default RepositoriesList;
