import { Icon } from 'components';
import COLORS from 'styles/colors';
import { SearchWrapper, SearchInput } from './Search.style';

type tSearch = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ onChange, name, value }: tSearch): JSX.Element => {
  return (
    <SearchWrapper>
      <Icon icon='search' fill={value ? COLORS.GREEN : COLORS.GREY} />
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
