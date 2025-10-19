import { Box, Skeleton } from "@mui/material";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { FormSkeletonPropsI } from "../skeletons.interface";

const FormSkeleton = (props: FormSkeletonPropsI) => {
  const { length = 4 } = props;
  return (
    <ContainerGridLayout>
      {Array?.from({ length })?.map((item: any, id: any) => (
        <ItemGridLayout key={item ?? `skeleton+${id}`} xs={12}>
          <Skeleton
            animation="wave"
            variant="rounded"
            width={"30%"}
            height={20}
            sx={{
              bgcolor: "grey.300",
              border: "1px solid",
              borderColor: "grey.400",
            }}
          />
          <Box
            border={"1px solid"}
            borderColor={"custom.off_white_three"}
            p={1}
            my={1}
            width={"100%"}
          >
            <Skeleton
              animation="wave"
              variant="rounded"
              width={"100%"}
              height={30}
              sx={{
                bgcolor: "grey.300",
                border: "1px solid",
                borderColor: "grey.400",
              }}
            />
          </Box>
        </ItemGridLayout>
      ))}
    </ContainerGridLayout>
  );
};

export default FormSkeleton;
