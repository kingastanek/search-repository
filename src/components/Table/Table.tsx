import { useEffect, useState } from 'react';
import { Icon } from 'components';
import {
  TableTd,
  TableTr,
  TableTh,
  TableClearButton,
  NoDataTd,
  Wrapper,
  MainTable,
  SortableButtonContainer,
  FlexWrapper,
} from './Table.style';
import COLORS from 'styles/colors';

export type tTableHead = {
  sortable: boolean;
  name: string;
  key: string;
};

type tTableBody = {
  id: number;
  order: number;
};

type tTable = {
  tableHead: tTableHead[];
  tableBodyData: tTableBody[];
  setSortParams: (field: string, order: string) => void;
};

const Table = ({ tableHead, tableBodyData, setSortParams }: tTable) => {
  const [sort, setSort] = useState<{
    field: string;
    direction: string;
  }>({
    field: '',
    direction: 'asc',
  });

  useEffect(() => {
    if (!!sort?.field && setSortParams) {
      setSortParams(sort.field, sort.direction);
    }
  }, [setSortParams, sort]);

  const setSortable = (key: string) => {
    let direction = 'asc';

    if (sort?.field === key && sort?.direction === 'asc') {
      direction = 'desc';
    }

    setSort({ field: key, direction });
  };

  const renderSortIcons = (item: tTableHead) => {
    return (
      <TableClearButton onClick={() => setSortable(item.key)}>
        <SortableButtonContainer>
          <div style={{ marginBottom: '-0.5rem' }}>
            <Icon
              icon='arrowSortUp'
              fill={`${
                !!sort && sort.field === item.key && sort.direction === 'asc'
                  ? COLORS.BLACK
                  : COLORS.GREY
              }`}
            />
          </div>
          <div style={{ marginTop: '-0.5rem' }}>
            <Icon
              icon='arrowSortDown'
              fill={`${
                !!sort && sort.field === item.key && sort.direction === 'desc'
                  ? COLORS.BLACK
                  : COLORS.GREY
              }`}
            />
          </div>
        </SortableButtonContainer>
      </TableClearButton>
    );
  };

  return (
    <Wrapper>
      <MainTable>
        <thead>
          <tr>
            {tableHead.map((item: tTableHead) => (
              <TableTh key={item.key}>
                <FlexWrapper>
                  {item.name}
                  {item.sortable && renderSortIcons(item)}
                </FlexWrapper>
              </TableTh>
            ))}
          </tr>
        </thead>
        {tableBodyData?.length ? (
          <tbody>
            {tableBodyData.map((item: tTableBody) => (
              <TableTr key={item.id}>
                {tableHead.map((tableHeadItem: tTableHead) => {
                  return (
                    <TableTd key={tableHeadItem.key}>
                      {item[tableHeadItem.key]}
                    </TableTd>
                  );
                })}
              </TableTr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <NoDataTd>No results</NoDataTd>
            </tr>
          </tbody>
        )}
      </MainTable>
    </Wrapper>
  );
};

export default Table;
