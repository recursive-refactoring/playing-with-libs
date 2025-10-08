export interface CommonTablePropsI {
  columns: any[];
  data: any[];
  ariaLabelTable?: string;
  minWidth?: number;
  stickyHeader?: boolean;
  count?: number;
  pageLimit?: number;
  currentPage?: number;
  totalRecords?: number;
  rowsPerPageOptions?: number[];
  setPage?: any;
  setPageLimit?: any;
  hasPagination?: boolean;
}
