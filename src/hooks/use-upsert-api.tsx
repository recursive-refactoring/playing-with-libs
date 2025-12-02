'use client';

import { useMemo } from 'react';
import { useQueryApi } from './use-query-api';
import { useMutationApi } from './use-mutation-api';

export const useUpsertApi = (props: any) => {
  const {
    id,
    getSingleApi,
    addApi,
    updateApi,
    getPayload,
    onSuccess,
    onError,
    feature = undefined,
    isEdit = !!id,
    skip = !isEdit,
  } = props;

  const queryProps = useMemo(
    () => ({
      apiQuery: getSingleApi,
      apiPayload: getPayload,
      skip: skip || !getSingleApi,
      refetchOnMountAndArgChange: true,
    }),
    [getSingleApi, getPayload, isEdit, skip],
  );

  const { response, isLoading, isFetching, isError, refetch } =
    useQueryApi(queryProps);

  const createMutationProps = useMemo(
    () => ({
      apiQuery: addApi,
      successMessage: `${feature || ''} created successfully`,
    }),
    [addApi, feature],
  );

  const { handleQuery: createHandler, isLoading: isCreateLoading } =
    useMutationApi(createMutationProps);

  const updateMutationProps = useMemo(
    () => ({
      apiQuery: updateApi,
      successMessage: `${feature || ''} updated successfully`,
    }),
    [updateApi],
  );

  const { handleQuery: updateHandler, isLoading: isUpdateLoading } =
    useMutationApi(updateMutationProps);

  const handleSubmit = async (apiPayload: any) => {
    try {
      let result;
      if (isEdit) {
        result = await updateHandler(apiPayload);
      } else {
        result = await createHandler(apiPayload);
      }
      onSuccess?.(result, isEdit);
      return result;
    } catch (error: any) {
      onError?.(error, isEdit);
      throw error;
    }
  };

  const isMutating = isCreateLoading || isUpdateLoading;

  return {
    response,
    isLoading,
    isFetching,
    isError,
    refetch,
    updateHandler,
    isMutating,
    handleSubmit,
  };
};
