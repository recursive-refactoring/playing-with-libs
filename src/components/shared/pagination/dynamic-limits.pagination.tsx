import { HorizontalStack } from "@/components/ui";
import { PAGINATION } from "@/constants/pagination.constant";
import { Pagination, TablePagination } from "@mui/material";
import { useCallback } from "react";

export const DynamicLimitsPagination = (props: any) => {
  const {
    count = PAGINATION?.TOTAL_PAGES,
    rowsPerPageOptions = PAGINATION?.ROWS_PER_PAGE_OPTIONS,
    pageLimit = PAGINATION?.PAGE_LIMIT,
    currentPage = PAGINATION?.DEFAULT_PAGE,
    totalRecords = PAGINATION?.TOTAL_RECORDS,
    setPage,
    setPageLimit,
  } = props;

  const handleChangeRowsPerPage = useCallback(
    () => (event: any) => {
      const newPageLimit = parseInt(event?.target?.value, 10);
      setPageLimit?.(newPageLimit);
      setPage?.(PAGINATION?.DEFAULT_PAGE);
    },
    [setPageLimit, setPage],
  );

  const handleChangePage = useCallback(
    () => (_: any, page: number) => setPage?.(page),
    [setPage],
  );

  return (
    <HorizontalStack justifyContent="space-between">
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
    </HorizontalStack>
  );
};
