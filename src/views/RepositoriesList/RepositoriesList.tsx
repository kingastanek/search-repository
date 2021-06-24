import { useState } from 'react';
import { Search } from 'components';
import { Wrapper, Title, Subtitle } from './RepositoriesList.style';

const RepositoriesList = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Wrapper>
      <Title>Repository search</Title>
      <Subtitle>Type to search</Subtitle>
      <Search
        name='repositories'
        value={searchValue}
        onChange={handleSearchChange}
      />
    </Wrapper>
  );
};

export default RepositoriesList;
