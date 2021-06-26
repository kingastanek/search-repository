import React, { useEffect, useState } from 'react';
import Icon from 'components/Icon';
import {
  NotificationCloseButton,
  NotificationIconContainer,
  NotificationMessageContainer,
  NotificationWrapper,
} from './Notification.style';
import COLORS from 'styles/colors';

type tNotification = {
  message?: string | JSX.Element;
  show: boolean;
  type?: string;
  customClose?: boolean;
  closeNotification?: Function;
};

const Notification: React.FC<tNotification> = ({
  message = 'Something went wrong. Try again',
  show = false,
  type = 'error',
  customClose = false,
  closeNotification = () => {},
}): JSX.Element | null => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(show);
  }, [show]);

  const closeNotifications = () => {
    setShowNotification(false);
    if (customClose) {
      closeNotification(false);
    }
  };

  const getIconType = (notificationType: string) => {
    switch (notificationType) {
      case 'error':
        return 'error';
      case 'info':
        return 'info';
      case 'success':
        return 'checkCircleOutline';
      default:
        return 'error';
    }
  };

  const getIconFill = (notificationType: string) => {
    switch (notificationType) {
      case 'error':
        return COLORS.RED;
      case 'info':
        return COLORS.BLUE;
      case 'success':
        return COLORS.GREEN;
      default:
        return COLORS.RED;
    }
  };

  if (!showNotification) return null;

  return (
    <NotificationWrapper>
      <NotificationMessageContainer>
        <NotificationIconContainer>
          <Icon fill={getIconFill(type)} icon={getIconType(type)} />
        </NotificationIconContainer>
        {message}
      </NotificationMessageContainer>
      <NotificationCloseButton onClick={closeNotifications}>
        <Icon fill={COLORS.RED} icon='close' />
      </NotificationCloseButton>
    </NotificationWrapper>
  );
};

export default Notification;
