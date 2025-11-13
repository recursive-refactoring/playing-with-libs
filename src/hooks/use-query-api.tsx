export const useQueryApi = (props: any) => {
  const {
    apiQuery,
    apiPaylaod,
    skip = false,
    refetchOnMountAndArgChange = true,
  } = props;

  const { data, isLoading, isFetching, isError, isSuccess, refetch } = apiQuery(
    apiPaylaod,
    {
      refetchOnMountAndArgChange,
      skip,
    },
  );

  return {
    data,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    refetch,
  };
};
