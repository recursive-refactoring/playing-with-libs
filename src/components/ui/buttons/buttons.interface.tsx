import { ReactNode } from "react";

export type ButtonColorType =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info";

export type ButtonVariantType = "text" | "outlined" | "contained";

export type ButtonSizeType = "small" | "medium" | "large";

export type ButtonTypeType = "submit" | "button" | "reset";

export type ButtonIconTypeType =
  | "circle"
  | "square"
  | "filter"
  | "restore"
  | "restore"
  | "success"
  | "reject";

export type SingleDropdownButtonCloseMenuType = (e?: any) => void;
export interface AddNewItemButtonPropsI {
  disabled?: boolean;
  variant?: ButtonVariantType;
  name?: string;
  color?: ButtonColorType;
  onClick?: () => void;
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
  iconType?: ButtonIconTypeType;
  size?: ButtonSizeType;
  customStyles?: any;
  children?: ReactNode;
}

export interface ApiPollingButtonPropsI {
  onClick: () => void;
  showLoader: boolean;
  variant?: ButtonVariantType;
  isSmall?: boolean;
  customStyles?: any;
  isFetching: boolean;
  fulfilledTimeStamp?: number;
  intervalTime: number;
  buttonLabel?: string;
}

export interface CommonButtonPropsI {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariantType;
  color?: ButtonColorType;
  iconType?: ButtonIconTypeType;
  hasIcon?: boolean;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  customStyles?: any;
  type?: ButtonTypeType;
  primary?: boolean;
  startIcon?: any;
}

export interface CommonIconButtonPropsI {
  onClick: any;
  color?: ButtonColorType;
  customStyles?: any;
  children: ReactNode;
  hasIcon?: boolean;
  disabled?: boolean;
  iconType?: string;
  size?: ButtonSizeType;
  type?: ButtonTypeType;
  iconName?: string;
}

export interface CommonLoadingButtonPropsI {
  onClick?: (...arg: any) => void;
  children: ReactNode;
  color?: ButtonColorType;
  customStyles?: any | any;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSizeType;
  type?: ButtonTypeType;
  variant?: ButtonVariantType;
  className?: string;
  primary?: boolean;
  fullWidth?: boolean;
  startIcon?: null | ReactNode;
  buttonLabel?: string;
}

export interface DownloadButtonPropsI {
  color?: ButtonColorType;
  disabled?: boolean;
  hasStyles?: boolean;
  variant?: ButtonVariantType;
  children?: ReactNode;
  downloadRef?: any;
  downloadFileType?: string;
  buttonLabel?: string;
}

export interface LinkButtonPropsI {
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  link?: string;
  name: string;
  customStyles?: any;
}

export interface ExportButtonPropsI {
  handleCsvExport: () => void;
  handleExcelExport: () => void;
  btnVariant?: ButtonVariantType;
  btnText?: string;
}

export interface ActionsLoadingButtonPropsI {
  handleSubmitButton?: any;
  handleCancelButton?: any;
  cancelButtonText?: string;
  submitButtonText?: string;
  showSubmitLoader?: boolean;
  disabledSubmitButton?: boolean;
  disabledCancelButton?: boolean;
  hasBorder?: boolean;
  justifyContent?: string;
  primary?: boolean;
}

export interface SingleDropdownButtonPropsI {
  dropdownOptions: any[];
  disabled?: boolean;
  dropdownName?: string | ReactNode;
  hasEndIcon?: boolean;
  btnVariant?: ButtonVariantType;
  menuSxProps?: any;
  [key: string]: any;
}

export interface SingleDropdownIconButtonPropsI {
  dropdownOptions: any[];
  disabled?: boolean;
  dropdownName?: ReactNode;
  btnVariant?: ButtonVariantType;
  menuSxProps?: any;
  [key: string]: any;
}

export interface SingleDropdownOptionI {
  permissionKey: string[];
  id: string | number;
  title: string;
  handleClick: (closeMenu: SingleDropdownButtonCloseMenuType) => void;
  disabled?: boolean;
  titleSx?: { [key: string]: string | number };
  hasNoPermission?: boolean;
}
