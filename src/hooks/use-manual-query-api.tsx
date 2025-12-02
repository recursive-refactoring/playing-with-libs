import { useCallback } from 'react';

export const useManualQueryApi = (props: any) => {
  const { apiQuery } = props;

  const [apiQueryTrigger, apiQueryResult] = apiQuery();

  const handleQuery = useCallback(
    async (apiPayload?: any) => {
      try {
        const response = await apiQueryTrigger(apiPayload)?.unwrap();
        return response;
      } catch (error: any) {
        throw error;
      }
    },
    [apiQueryTrigger],
  );

  const { isLoading, isError, isSuccess, data, isFetching } = apiQueryResult;

  return {
    handleQuery,
    isLoading,
    isSuccess,
    isError,
    data,
    isFetching,
  };
};
