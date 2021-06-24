import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--theme-grey);
  text-align: center;
`;

export const Subtitle = styled.h4`
  font-size: 1rem;
  margin: 1rem 0;
  font-weight: 500;
  color: var(--theme-grey);
`;
