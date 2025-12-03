import { PAGINATION } from "@/constants";
import { TablePagination as TablePaginationUi } from "@mui/material";

export const TablePagination = (props: any) => {
  const {
    totalPages = PAGINATION?.TOTAL_PAGES,
    currentPage = PAGINATION?.DEFAULT_PAGE,
    boundaryCount = 1,
    siblingCount = 1,
    onPageChange,
    variant = "outlined",
    shape = "rounded",
    size = "small",
    showLastButton = true,
    showFirstButton = true,
    hidePrevButton = false,
    hideNextButton = false,
    renderItem,
    data,
    aria,
  } = props;

  return (
    <TablePaginationUi
      count={totalPages}
      page={currentPage}
      shape={shape}
      variant={variant}
      size={size}
      boundaryCount={boundaryCount}
      siblingCount={siblingCount}
      onChange={onPageChange}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      hidePrevButton={hidePrevButton}
      hideNextButton={hideNextButton}
      renderItem={renderItem}
      {...data}
      {...aria}
    />
  );
};
