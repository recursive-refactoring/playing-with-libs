import { ListGridPropsI } from "../Grids.interface";
import { ContainerGridLayout } from "@/components/ui/grids/container-grid";
import { ItemGridLayout } from "@/components/ui/grids/item-grid-layout";

export const ListGrid = (props: ListGridPropsI) => {
  const {
    list = [],
    spacing = 2,
    render,
    sm = 12,
    md = 6,
    lg = md,
    xl = lg,
  } = props;

  return (
    <ContainerGridLayout spacing={spacing}>
      {list?.map((singleItem: any) => (
        <ItemGridLayout
          xs={12}
          sm={sm}
          md={md}
          xl={xl}
          lg={lg}
          key={singleItem?._id}
        >
          {render(singleItem)}
        </ItemGridLayout>
      ))}
    </ContainerGridLayout>
  );
};
