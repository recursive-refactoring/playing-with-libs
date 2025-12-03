import { PAGINATION } from "@/constants";
import { Pagination as PaginationUi } from "@mui/material";

export const Pagination = (props: any) => {
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
    <PaginationUi
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
