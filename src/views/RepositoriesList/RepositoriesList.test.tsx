import { shallow } from 'enzyme';
import RepositoriesList from './RepositoriesList';

describe('RepositoriesList', () => {
  it('should render correctly', () => {
    const component = shallow(<RepositoriesList />);
    expect(component).toMatchSnapshot();
  });
});
