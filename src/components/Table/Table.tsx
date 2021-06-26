import { useEffect, useState } from 'react';
import { Icon, Pagination, Search } from 'components';
import { tTableHead, tTableBody, tSortParams } from 'types/Table';
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

type tTable = {
  tableHead: tTableHead[];
  tableBodyData: tTableBody[];
  setSortParams: (fieldName: string, order: string) => void;
  setPageParams: (page: number) => void;
  totalRecords: number;
  searchValue: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Table = ({
  tableHead,
  tableBodyData,
  setSortParams,
  setPageParams,
  totalRecords,
  searchValue,
  handleSearchChange,
}: tTable) => {
  const [sort, setSort] = useState<tSortParams>({
    fieldName: '',
    order: 'asc',
  });

  useEffect(() => {
    if (!!sort.fieldName && setSortParams) {
      const { fieldName, order } = sort;
      setSortParams(fieldName, order);
    }
  }, [sort]);

  const setSortable = (fieldName: string) => {
    let order = 'asc';

    if (sort?.fieldName === fieldName && sort?.order === 'asc') {
      order = 'desc';
    }

    setSort({ fieldName, order });
  };

  const renderSortIcons = (item: tTableHead) => {
    return (
      <TableClearButton onClick={() => setSortable(item.key)}>
        <SortableButtonContainer>
          <div style={{ marginBottom: '-0.5rem' }}>
            <Icon
              icon='arrowSortUp'
              fill={`${
                !!sort && sort.fieldName === item.key && sort.order === 'asc'
                  ? COLORS.BLACK
                  : COLORS.GREY
              }`}
            />
          </div>
          <div style={{ marginTop: '-0.5rem' }}>
            <Icon
              icon='arrowSortDown'
              fill={`${
                !!sort && sort.fieldName === item.key && sort.order === 'desc'
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
    <>
      <Search
        name='repositories'
        value={searchValue}
        onChange={handleSearchChange}
      />
      <Wrapper>
        <MainTable>
          <thead>
            <tr>
              {tableHead.map((item: tTableHead) => (
                <TableTh key={`${item.key}-${item.name}`}>
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
                <TableTr key={`${item.id}-${item.order}`}>
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
                <NoDataTd colSpan={tableHead.length + 1}>No results</NoDataTd>
              </tr>
            </tbody>
          )}
        </MainTable>
      </Wrapper>
      <Pagination totalRecords={totalRecords} setPageParams={setPageParams} />
    </>
  );
};

export default Table;
