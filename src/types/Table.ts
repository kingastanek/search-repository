export type tTableHead = {
  sortable: boolean;
  name: string;
  key: string;
};

export type tTableBody = {
  id: number;
  order: number;
};

export type tSortParams = {
  fieldName: string;
  order: string;
};