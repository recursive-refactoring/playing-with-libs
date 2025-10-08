import { SkeletonTypesI } from "@/interfaces/constants/ui";
import { ReactNode } from "react";

export interface ApiErrorStatePropsI {
  height?: string;
  textColor?: string;
  message?: string;
  children?: ReactNode;
  refresh?: (...args: any) => Promise<void> | any;
  canRefresh?: boolean;
  refreshButtonProps?: any;
}

export interface ApiNoDataStatePropsI {
  image?: any;
  message?: string;
  children?: any;
  height?: string;
}

export interface ApiRequestFlowPropsI {
  canRefresh?: boolean;
  showSkeleton?: boolean;
  skeletonType?: SkeletonTypesI;
  cardSkeletonType?: SkeletonTypesI;
  length?: number;
  hasError?: boolean;
  refreshApi?: (...args: any) => Promise<void> | any;
  errorHeight?: string;
  hasNoData?: boolean;
  noDataMessage?: string;
  noDataHeight?: string;
  refreshButtonProps?: any;
  children?: ReactNode;
  errorChildren?: ReactNode;
  noDataChildren?: ReactNode;
  errorMessage?: string;
  errorTextColor?: string;
}
