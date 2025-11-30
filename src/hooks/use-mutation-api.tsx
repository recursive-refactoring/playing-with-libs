import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useCallback } from "react";

export const useMutationApi = (props: any) => {
  const {
    apiQuery,
    apiPayload,
    successMessage = "",
    errorMessage = undefined,
  } = props;

  const [apiQueryTrigger, apiQueryResult] = apiQuery();

  const hasReset = typeof apiQueryResult?.reset === "function";

  const handleQuery = useCallback(async () => {
    try {
      const response = await apiQueryTrigger(apiPayload)?.unwrap();
      successSnackbar(response?.data?.message || successMessage);
    } catch (error: any) {
      if (hasReset) {
        errorSnackbar(error?.data?.message ?? (error?.message || errorMessage));
      }
    }
  }, [apiQueryTrigger, apiPayload, successMessage, errorMessage, hasReset]);

  const { isLoading, isError, isSuccess, data } = apiQueryResult;

  return {
    handleQuery,
    isLoading,
    isSuccess,
    isError,
    data,
  };
};
