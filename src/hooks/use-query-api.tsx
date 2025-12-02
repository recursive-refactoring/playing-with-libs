export const useQueryApi = (props: any) => {
  const {
    apiQuery,
    apiPayload = {},
    skip = false,
    refetchOnMountAndArgChange = true,
  } = props;

  const queryResult = apiQuery?.(apiPayload, {
    refetchOnMountAndArgChange,
    skip,
  });

  const { data, isLoading, isFetching, isError, isSuccess, refetch } =
    queryResult || {
      data: undefined,
      isLoading: false,
      isFetching: false,
      isError: false,
      isSuccess: false,
      refetch: () => Promise.resolve(),
    };

  const response = data?.data;

  return {
    response,
    data,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    refetch,
  };
};
