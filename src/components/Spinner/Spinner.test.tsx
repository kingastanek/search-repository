import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {
  const component = shallow(<Spinner />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
