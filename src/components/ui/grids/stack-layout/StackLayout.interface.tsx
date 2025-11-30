import { ReactNode } from "react";

type StackDirectionI =
  | "column-reverse"
  | "column"
  | "row-reverse"
  | "row"
  | object
  | any;

type StackSpacingI = number | string | any;

export interface StackLayoutPropsI {
  children: ReactNode;
  component?: Element | ReactNode | any;
  direction?: StackDirectionI;
  divider?: ReactNode;
  spacing?: StackSpacingI;
  customStyles?: any;
  useFlexGap?: boolean;
}
