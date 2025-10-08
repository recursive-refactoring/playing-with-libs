"use client";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useCommonTable } from "./use-common-table";
import { CommonTablePropsI } from "../table.interface";
import { flexRender } from "@tanstack/react-table";
import { pxToRem } from "@/utils/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CommonPagination from "@/components/navigation/common-pagination";
import { PAGINATION } from "@/configs/pagination";

const CommonTable = (props: CommonTablePropsI) => {
  const {
    ariaLabelTable = "main-table",
    minWidth = 1000,
    stickyHeader = false,
    count = PAGINATION?.PAGE_COUNT,
    rowsPerPageOptions = PAGINATION?.ROWS_PER_PAGE_OPTIONS,
    pageLimit = PAGINATION?.PAGE_LIMIT,
    currentPage = PAGINATION?.CURRENT_PAGE,
    totalRecords = PAGINATION?.TOTAL_RECORDS,
    setPage,
    setPageLimit,
    hasPagination = true,
  } = props;

  const { table } = useCommonTable(props);

  return (
    <Box>
      <TableContainer>
        <Table
          stickyHeader={stickyHeader}
          sx={{ minWidth: pxToRem(minWidth) }}
          aria-label={ariaLabelTable}
        >
          <TableHead>
            {table?.getHeaderGroups()?.map((headerGroup: any) => (
              <TableRow
                sx={{
                  backgroundColor: "primary.light",
                  textTransform: "capitalize",
                  borderRadius: 1,
                }}
                key={headerGroup?.id}
              >
                {headerGroup?.headers.map((header: any) => (
                  <TableCell
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "fontWeightBold",
                      borderBottom: "primary.light",
                    }}
                    key={header?.id}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {header?.isPlaceholder
                        ? null
                        : flexRender(
                            header?.column?.columnDef?.header,
                            header?.getContext(),
                          )}
                      {header?.column?.columnDef?.isSortable && (
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          marginLeft={"4px"}
                          gap={"2px"}
                          {...{
                            onClick: header?.column?.getToggleSortingHandler(),
                          }}
                        >
                          <KeyboardArrowUpIcon
                            sx={{
                              fontSize: "medium",
                              color:
                                (header?.column?.getIsSorted() as string) ===
                                "desc"
                                  ? "common.black"
                                  : "",
                            }}
                          />
                          <KeyboardArrowDownIcon
                            sx={{
                              fontSize: "medium",
                              color:
                                (header?.column?.getIsSorted() as string) ===
                                "asc"
                                  ? "common.black"
                                  : "",
                            }}
                          />
                        </Box>
                      )}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table?.getRowModel()?.rows?.map((row: any) => (
              <TableRow key={row?.id}>
                {row?.getVisibleCells()?.map((cell: any) => (
                  <TableCell
                    sx={{
                      textTransform: "capitalize",
                    }}
                    key={cell?.id}
                  >
                    {flexRender(
                      cell?.column?.columnDef?.cell,
                      cell?.getContext(),
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {hasPagination && (
        <Box>
          <CommonPagination
            count={count}
            pageLimit={pageLimit}
            currentPage={currentPage}
            totalRecords={totalRecords}
            rowsPerPageOptions={rowsPerPageOptions}
            setPage={setPage}
            setPageLimit={setPageLimit}
          />
        </Box>
      )}
    </Box>
  );
};

export default CommonTable;
