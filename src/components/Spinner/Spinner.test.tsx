import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';
import { Wrapper } from './Spinner.style';

describe('Spinner', () => {
  const baseProps = {
    fixed: true,
  };
  const component = shallow(<Spinner {...baseProps} />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should get style for fixed', () => {
    const styled = shallow(<Wrapper fixed />);
    expect(styled).toMatchSnapshot();
  });
  it('should get style for not fixed', () => {
    const styled = shallow(<Wrapper fixed={false} />);
    expect(styled).toMatchSnapshot();
  });
});
