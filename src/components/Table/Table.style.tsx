import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  overflow: scroll;
  margin-top: 1rem;
`;

export const NoDataTd = styled.td`
  box-shadow: 0px 3px 6px #00000029;
  padding: 0px 2rem;
  background-color: var(--theme-white);
  height: 75px;
  border-radius: 0.5rem;
`;

export const MainTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.75rem;
  padding-bottom: 0.75rem;

  &:first-child td:first-child {
    border-top-left-radius: 0.5rem;
    border-color: var(--theme-white);
    border-bottom-left-radius: 0.5rem;
  }
  &:last-child td:last-child {
    border-top-right-radius: 0.5rem;
    border-color: var(--theme-white);
    border-bottom-right-radius: 0.5rem;
    background-color: var(--theme-white);
  }
`;

export const TableTh = styled.th`
  text-align: left;
  padding: 1rem;
  color: var(--theme-black);
  background-color: var(--theme-white);
  font-size: 0.875rem;
`;

export const TableTr = styled.tr`
  box-shadow: 0px 3px 6px #00000029;
  padding: 0px 1.5rem;
`;

export const TableTd = styled.td`
  padding: 1rem;
  line-height: 1;
  position: relative;
  background-color: var(--theme-white);
  font-size: 0.875rem;
`;

export const TableClearButton = styled.button`
  outline: none;
  background: transparent;
  border: 0;
  line-height: 1;
`;

export const SortableButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;
