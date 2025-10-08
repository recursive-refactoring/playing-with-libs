import { FlexLayout } from "@/components/layouts/flex-layout";
import { PAGINATION } from "@/configs/pagination";
import { Pagination, TablePagination } from "@mui/material";
import { useCallback } from "react";
import { CommonPaginationPropsI } from "../navigation.interface";

const CommonPagination = (props: CommonPaginationPropsI) => {
  const {
    count = PAGINATION?.PAGE_COUNT,
    rowsPerPageOptions = PAGINATION?.ROWS_PER_PAGE_OPTIONS,
    pageLimit = PAGINATION?.PAGE_LIMIT,
    currentPage = PAGINATION?.CURRENT_PAGE,
    totalRecords = PAGINATION?.TOTAL_RECORDS,
    setPage,
    setPageLimit,
  } = props;

  const handleChangeRowsPerPage = useCallback(
    () => (event: any) => {
      const newPageLimit = parseInt(event?.target?.value, 10);
      setPageLimit?.(newPageLimit);
      setPage?.(PAGINATION?.CURRENT_PAGE);
    },
    [setPageLimit, setPage],
  );

  const handleChangePage = useCallback(
    () => (_: any, page: number) => setPage?.(page),
    [setPage],
  );

  return (
    <FlexLayout justifyContent="space-between">
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={totalRecords}
        rowsPerPage={pageLimit}
        page={currentPage === 0 ? 0 : currentPage - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        showFirstButton={false}
        sx={{
          "& .MuiTablePagination-actions": {
            display: "none",
          },
        }}
        slotProps={{
          select: {
            inputProps: {
              "aria-label": "rows per page",
            },
          },
        }}
      />
      <Pagination
        shape="rounded"
        count={count}
        page={currentPage}
        boundaryCount={1}
        siblingCount={1}
        onChange={handleChangePage}
      />
    </FlexLayout>
  );
};

export default CommonPagination;
