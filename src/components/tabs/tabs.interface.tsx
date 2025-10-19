export interface HorizontalTabsArrayI {
  _id: string | number;
  id?: string;
  name: string;
  component: any;
  label?: string;
  disabled?: boolean;
  componentProps?: { [key: string]: any };
}

export interface HorizontalTabsPropsI {
  tabsDataArray: HorizontalTabsArrayI[];
  variant?: "fullWidth" | "scrollable" | "standard";
  spacing?: number;
  defaultValue?: number;
  disableBoxShadow?: boolean;
  border?: string | number;
  orientation?: "horizontal" | "vertical";
  handleTabChange?: any;
}
