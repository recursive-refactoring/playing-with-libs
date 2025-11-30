import { pxToRem } from "@/utils/styles.util";
import { Skeleton } from "@mui/material";
import { BarSkeletonPropsI } from "./skeletons.interface";

export const BarSkeleton = (props: BarSkeletonPropsI) => {
  const { length } = props;
  return Array?.from({ length })?.map((item: any) => (
    <Skeleton
      key={item}
      animation="wave"
      width="100%"
      height={pxToRem(30)}
      variant="rectangular"
    />
  ));
};
