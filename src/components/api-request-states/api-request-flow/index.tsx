import BarSkeleton from "@/components/ui/skeletons/bar.skeleton";
import { SKELETON_TYPES } from "@/constants/ui.constant";
import ApiErrorState from "../api-error-state";
import ApiNoDataState from "../api-no-data-state";
import { ApiRequestFlowPropsI } from "../api-request-states.interface";

const skeletonTypes: any = {
  [SKELETON_TYPES?.BARS]: BarSkeleton,
};

export const ApiRequestFlow = (props: ApiRequestFlowPropsI) => {
  const {
    showSkeleton = false,
    skeletonType = SKELETON_TYPES?.FORM,
    cardSkeletonType = SKELETON_TYPES?.CARD,
    length = 4,
    hasError = false,
    refreshApi,
    errorHeight = "50vh",
    hasNoData = false,
    noDataMessage,
    noDataHeight = errorHeight,
    refreshButtonProps,
    children,
    errorChildren,
    noDataChildren,
    errorMessage,
    canRefresh = true,
    errorTextColor,
  } = props;

  const SkeletonComponent = skeletonTypes?.[skeletonType as any];

  if (showSkeleton)
    return (
      <SkeletonComponent
        length={length}
        {...(skeletonType === SKELETON_TYPES?.CARD
          ? { cardType: cardSkeletonType }
          : {})}
      />
    );

  if (hasError)
    return (
      <ApiErrorState
        message={errorMessage}
        canRefresh={canRefresh}
        refresh={refreshApi}
        height={errorHeight}
        refreshButtonProps={refreshButtonProps}
        textColor={errorTextColor}
      >
        {errorChildren}
      </ApiErrorState>
    );

  if (hasNoData)
    return (
      <ApiNoDataState message={noDataMessage} height={noDataHeight}>
        {noDataChildren}
      </ApiNoDataState>
    );

  return <>{children}</>;
};
