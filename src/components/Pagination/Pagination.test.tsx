import { useState } from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

const Helper = () => {
  const [page, setPage] = useState<number>(0);
  return (
    <Pagination
      setParams={(newPage: number) => {
        if (newPage !== page) setPage(newPage);
      }}
      totalRecords={123}
      page={1}
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
