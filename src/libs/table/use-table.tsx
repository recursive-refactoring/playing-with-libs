"use client";
import {
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";

export const useTable = (props: any) => {
  const { columns, data } = props;

  const [sorting, setSorting] = useState<SortingState>([]);

  const memoizedColumns = useMemo(() => columns, [columns]);

  const memoizedData = useMemo(() => {
    const renderData = data ?? [];
    return renderData;
  }, [data]);

  const table = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return { table };
};
