"use client";

import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { useMutationApi } from "./use-mutation-api";
import { DATA_TYPES, PAGINATION } from "@/constants";

export const useGlobalDelete = (props: any) => {
  const {
    closePortal,
    canMoveBack = false,
    setPage,
    refetch,
    page,
    totalRecords,
    route,
    feature,
    deleteApi,
    isLazy = true,
  } = props;

  const router = useRouter();

  const deleteMutationProps = useMemo(
    () => ({
      apiQuery: deleteApi,
      successMessage: `${feature || ""} deleted successfully`,
    }),
    [deleteApi, feature],
  );

  const { handleQuery, isLoading } = useMutationApi(deleteMutationProps);

  const handleGlobalDelete = useCallback(
    async (apiPayload: any) => {
      try {
        await handleQuery(apiPayload?.payload);

        const deletedCount = apiPayload?.length;

        const newPage =
          totalRecords === deletedCount ? PAGINATION?.DEFAULT_PAGE : page;

        setPage?.((prev: any) => {
          if (typeof prev === DATA_TYPES?.NUMBER) return newPage;
          if (typeof prev === DATA_TYPES?.OBJECT && prev !== null) {
            return {
              ...prev,
              [PAGINATION?.PAGE_KEY_NAME]: newPage,
            };
          }
          return newPage;
        });

        if (canMoveBack) {
          router.push(route);
        }

        if (isLazy) {
          await refetch?.(newPage);
        } else if (newPage === page) {
          await refetch?.();
        }

        closePortal?.();
      } catch (error: any) {
        throw error;
      }
    },
    [
      handleQuery,
      totalRecords,
      page,
      setPage,
      canMoveBack,
      route,
      refetch,
      closePortal,
    ],
  );

  return {
    isLoading,
    handleGlobalDelete,
  };
};
