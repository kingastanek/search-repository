import { shallow } from 'enzyme';
import Icon from './Icon';

describe('Icon', () => {
  const NoIcon = shallow(<Icon icon='_non_existing_icon_name' />);
  it('should return null', () => {
    expect(NoIcon.isEmptyRender()).toBe(true);
  });

  const IconSM = shallow(<Icon icon='search' width='1rem' height='1rem' />);
  it('should render small size correctly', () => {
    expect(IconSM).toMatchSnapshot();
  });

  const IconMD = shallow(<Icon icon='search' />);
  it('should render medium size correctly', () => {
    expect(IconMD).toMatchSnapshot();
  });

  const IconBIG = shallow(<Icon icon='search' width='2rem' height='2rem' />);
  it('should render big size correctly', () => {
    expect(IconBIG).toMatchSnapshot();
  });

  const IconLG = shallow(<Icon icon='search' width='2.5rem' height='2.5rem' />);
  it('should render large size correctly', () => {
    expect(IconLG).toMatchSnapshot();
  });

  const IconRed = shallow(<Icon icon='search' fill='#f00' />);
  it('should render red color fill correctly', () => {
    expect(IconRed).toMatchSnapshot();
  });
});
