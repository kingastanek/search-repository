import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  width: 100%;

  .pagination {
    list-style: none;
    margin: 0;
    padding: 0.5rem;
    display: flex;
    li {
      margin-right: 0.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 0.75rem;
      border: 1px solid grey;
      border-radius: 0.5rem;
      &:hover:not(.active) {
        border: 1px solid var(--theme-green);
      }
      &.next {
        margin-right: 0;
        &:hover {
          border: 0;
        }
      }
      &.previous {
        &:hover {
          border: 0;
        }
      }
      &.disabled {
        svg {
          fill: grey;
        }
      }
      &.active {
        background: var(--theme-green);
        border-radius: 0.5rem;
        a {
          color: white;
        }
      }
      &.break-me {
        border: none;
        pointer-events: none;
      }
      a {
        display: flex;
        align-items: center;
        padding: 3px 1rem;
        outline: none;
        font-size: 0.75rem;
      }
      &:last-child {
        border: none;
      }
      &:first-child {
        border: none;
      }
    }
  }
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.footer`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;
