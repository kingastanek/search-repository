import { shallow } from 'enzyme';
import Table from './Table';

describe('Table', () => {
  const basicTableHead = [
    {
      sortable: false,
      name: 'Lp.',
      key: 'order',
    },
    {
      sortable: false,
      name: 'Name',
      key: 'name',
    },
  ];

  const basicTableBody = [
    {
      id: 1,
      order: 1,
      name: 'Name 123',
    },
  ];

  const configuredTableHead = [
    {
      sortable: false,
      name: 'Lp.',
      key: 'order',
    },
    {
      sortable: false,
      name: 'Name',
      key: 'name',
    },
  ];

  const configuredTableBody = [
    {
      id: 1,
      order: 1,
      name: 'Name 1',
    },
    {
      id: 2,
      order: 2,
      name: 'Name 2',
    },
  ];

  it('should render basic table - no sort, no marked items, no actions', () => {
    const component = shallow(
      <Table
        tableHead={basicTableHead}
        tableBodyData={basicTableBody}
        setSortParams={() => jest.fn()}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('should render table with configuration - sort, marked items, actions', () => {
    const component = shallow(
      <Table
        tableHead={configuredTableHead}
        tableBodyData={configuredTableBody}
        setSortParams={() => jest.fn()}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('should render table with no results info', () => {
    const component = shallow(
      <Table
        tableHead={configuredTableHead}
        tableBodyData={[]}
        setSortParams={() => jest.fn()}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
