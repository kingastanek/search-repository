import styled, { keyframes } from 'styled-components';

const Load = keyframes`
0%,
80%,
100% {
  box-shadow: 0 0;
  height: 4em;
}
40% {
  box-shadow: 0 -2em;
  height: 5em;
}`;

export const Loader = styled.div`
  color: var(--theme-white);
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  transform: translateZ(0);
  animation-delay: -0.16s;
  background: var(--theme-white);
  animation: ${Load} 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  &:before,
  &:after {
    background: var(--theme-white);
    animation: ${Load} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  &:before,
  &:after {
    position: absolute;
    top: 0;
    content: '';
  }
  &:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }
  &:after {
    left: 1.5em;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);
`;
