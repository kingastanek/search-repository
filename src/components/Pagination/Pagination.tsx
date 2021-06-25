import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Icon from 'components/Icon';
import { PaginationContainer, Pages, Wrapper } from './Pagination.style';

type tPagination = {
  totalRecords: number;
  setParams: Function;
  page?: number;
};

const Pagination: React.FC<tPagination> = ({
  totalRecords,
  setParams,
  page = 0,
}): JSX.Element => {
  const limitPerPage = 10;
  const pageCountHelper: number = Math.ceil(totalRecords / limitPerPage);

  useEffect(() => {
    const pageNumber: number = Math.ceil(page / limitPerPage);
    setParams(pageNumber, limitPerPage);
  }, [page, setParams]);

  const handlePageClick = (data: { selected: number }) => {
    setParams(data.selected, limitPerPage);
  };

  return (
    <Wrapper>
      <PaginationContainer>
        <Pages>
          <ReactPaginate
            previousLabel={<Icon icon='chevronLeft' />}
            nextLabel={<Icon icon='chevronRight' />}
            breakLabel={<Icon icon='moreHoriz' />}
            pageCount={pageCountHelper < 100 ? pageCountHelper : 100}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName='pagination'
            activeClassName='active'
          />
        </Pages>
      </PaginationContainer>
    </Wrapper>
  );
};

export default Pagination;
