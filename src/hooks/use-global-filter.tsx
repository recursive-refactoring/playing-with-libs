"use client";

import { DATA_TYPES, PAGINATION } from "@/constants";
import { useForm } from "@/libs";
import { filteredEmptyValues } from "@/utils";
import { useCallback } from "react";

export const useGlobalFilter = (props: any) => {
  const {
    globalFiltersFormDefaultValues,
    setFilterValues,
    setPage,
    closePortal,
    filterValues,
  } = props;

  const { methods, handleSubmit, reset } = useForm({
    defaultValues: globalFiltersFormDefaultValues(filterValues),
  });

  const onSubmit = useCallback(
    handleSubmit((formData: any) => {
      const filteredFormData = filteredEmptyValues(formData);
      setPage?.((prev: any) => {
        return typeof prev !== DATA_TYPES?.OBJECT
          ? PAGINATION?.DEFAULT_PAGE
          : {
              ...prev,
              [PAGINATION?.PAGE_KEY_NAME]: PAGINATION?.DEFAULT_PAGE,
            };
      });
      setFilterValues(filteredFormData);
      closePortal?.();
    }),
    [closePortal, setFilterValues, handleSubmit, setPage],
  );

  const resetFilter = useCallback(() => {
    setFilterValues({});
    reset();
    closePortal?.();
  }, [setFilterValues, reset, closePortal]);

  return {
    resetFilter,
    onSubmit,
    methods,
  };
};
