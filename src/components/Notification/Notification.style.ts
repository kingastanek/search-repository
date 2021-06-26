import styled from 'styled-components';

export const NotificationCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 24px;
  outline: none;
  padding: 0;
`;

export const NotificationIconContainer = styled.div`
  display: flex;
  margin-right: 0.75rem;
`;

export const NotificationMessageContainer = styled.div`
  display: flex;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 24px;
`;

export const NotificationWrapper = styled.div`
  background-color: var(--theme-white);
  border-radius: 8px;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  line-height: 24px;
  max-width: 300px;
  padding: 20px 12px 20px 16px;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
`;
