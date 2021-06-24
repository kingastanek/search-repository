import { shallow } from 'enzyme';
import Search from './Search';

describe('Search', () => {
  it('should render correctly - without value', () => {
    const component = shallow(
      <Search name='emptySearch' value='' onChange={() => jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly - with value', () => {
    const component = shallow(
      <Search name='searchWithValue' value='test' onChange={() => jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
});
