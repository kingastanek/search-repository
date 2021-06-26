import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

describe('Notification', () => {
  const baseProps = {
    show: false,
  };

  const notificationDefault = shallow(<Notification {...baseProps} />);

  it('should be hidden', () => {
    expect(notificationDefault).toMatchSnapshot();
  });
});
