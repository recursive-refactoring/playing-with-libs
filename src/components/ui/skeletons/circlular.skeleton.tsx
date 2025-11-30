import { pxToRem } from "@/utils/styles.util";
import { Skeleton } from "@mui/material";
import { BarSkeletonPropsI } from "./skeletons.interface";

export const CircularSkeleton = (props: BarSkeletonPropsI) => {
  const { length } = props;
  return Array?.from({ length })?.map((item: any) => (
    <Skeleton
      key={item}
      animation="wave"
      width={pxToRem(30)}
      height={pxToRem(30)}
      variant="circular"
    />
  ));
};
