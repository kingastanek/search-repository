import ReactPaginate from 'react-paginate';
import Icon from 'components/Icon';
import { PaginationContainer, Pages, Wrapper } from './Pagination.style';

type tPagination = {
  totalRecords: number;
  setPageParams: (page: number) => void;
};

const Pagination = ({
  totalRecords,
  setPageParams,
}: tPagination): JSX.Element => {
  const limitPerPage = 10;
  const pageCountHelper: number = Math.ceil(totalRecords / limitPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setPageParams(data.selected);
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
