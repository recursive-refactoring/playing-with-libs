import { useCallback } from 'react';
import { errorSnackbar, successSnackbar } from '../libs';

export const useMutationApi = (props: any) => {
  const { apiQuery, successMessage = '', errorMessage = undefined } = props;

  const [apiQueryTrigger, apiQueryResult] = apiQuery();

  const handleQuery = useCallback(
    async (apiPayload: any) => {
      try {
        const response = await apiQueryTrigger(apiPayload)?.unwrap();
        successSnackbar(response?.data?.message || successMessage);
        return response;
      } catch (error: any) {
        errorSnackbar(error?.data?.message ?? (error?.message || errorMessage));
        throw error;
      }
    },
    [apiQueryTrigger, successMessage, errorMessage],
  );

  const { isLoading, isError, isSuccess, data } = apiQueryResult;

  return {
    handleQuery,
    isLoading,
    isSuccess,
    isError,
    data,
  };
};
