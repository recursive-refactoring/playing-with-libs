export interface CommonPaginationPropsI {
  count?: number;
  pageLimit?: number;
  currentPage?: number;
  totalRecords?: number;
  rowsPerPageOptions?: number[];
  setPage?: any;
  setPageLimit?: any;
}
