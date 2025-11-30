import { ContainerGridLayout } from "@/components/ui/grids/container-grid";
import { HeadingFormGridPropsI } from "../Grids.interface";
import { ItemGridLayout } from "@/components/ui/grids/item-grid-layout";

export const HeadingFormGrid = (props: HeadingFormGridPropsI) => {
  const {
    formFieldsList = [],
    spacing = 2,
    rowSpacing = spacing,
    columnSpacing = spacing,
    disabled,
    children,
    md = 12,
  } = props;

  return (
    <ContainerGridLayout
      spacing={spacing}
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
    >
      {formFieldsList?.map((form: any) => (
        <ItemGridLayout
          xs={12}
          md={form?.md ?? md}
          key={form?._id}
          customStyles={form?.gridSx}
        >
          <form.component
            {...form?.componentProps}
            size={"small"}
            disabled={form?.componentProps?.disabled || disabled}
          >
            {form?.heading ? form?.heading : null}
          </form.component>
        </ItemGridLayout>
      ))}
      {children}
    </ContainerGridLayout>
  );
};
