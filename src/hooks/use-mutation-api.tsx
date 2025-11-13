import { errorSnackbar, successSnackbar } from "@/libs/snackbar";

export const useMutationApi = (props: any) => {
  const {
    apiQuery,
    apiPaylaod,
    successMessage = "",
    errorMessage = undefined,
    skip = false,
    refetchOnMountAndArgChange = true,
  } = props;

  const [apiQueryTrigger, apiQueryResult] = apiQuery();

  const hasReset = typeof apiQueryResult.reset === "function";
  const handleQuery = async () => {
    try {
      const response = await apiQueryTrigger(apiPaylaod)?.unwrap();
      successSnackbar(response?.data?.message || successMessage);
    } catch (error: any) {
      if (errorMessage) {
        errorSnackbar(error?.data?.message ?? (error?.message || errorMessage));
      }
    }
  };

  const { isLoading, isError, isSuccess, data } = apiQueryResult;

  return {
    handleQuery,
    isLoading,
    isSuccess,
    isError,
    data,
  };
};
