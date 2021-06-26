import { useState } from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

const Helper = () => {
  const [page, setPage] = useState<number>(0);
  return (
    <Pagination
      setPageParams={(newPage: number) => {
        if (newPage !== page) setPage(newPage);
      }}
      totalRecords={123}
    />
  );
};

describe('Pagination', () => {
  let component: any;

  beforeEach(() => {
    component = shallow(<Helper />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
