import React from 'react';
import { SearchWrapper, SearchInput } from './Search.style';

type tSearch = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ onChange, name, value }: tSearch): JSX.Element => {
  return (
    <SearchWrapper>
      <SearchInput
        name={name}
        value={value}
        onChange={onChange}
        placeholder='Search...'
      />
    </SearchWrapper>
  );
};

export default Search;
