import { AvatarVariantsType } from "@/interfaces/ui";
import { ReactNode } from "react";

export interface AvatarSizeI {
  width?: number | string;
  height?: number | undefined | string;
  variant?: AvatarVariantsType;
}

export interface DynamicAvatarPropsI {
  width?: number | string;
  height?: number | string;
  variant?: AvatarVariantsType;
  nameInitial?: string;
  avatarSrc: string | undefined;
  tooltipTitle?: string;
  customTooltipProps?: any;
  backgroundColor?: string;
  customStyles?: any;
  padding?: number;
  initialColor?: string;
  nameInitialsSize?: number;
}

export interface IconAvatarPropsI {
  width?: number | string;
  height?: number | string;
  variant?: AvatarVariantsType;
  alt?: string;
  backgroundColor?: string;
  customStyles?: any;
  padding?: number;
  children: ReactNode;
}

export interface StaticAvatarPropsI {
  alt?: string;
  backgroundColor?: string;
  customStyles?: any;
  padding?: number;
  children?: ReactNode;
  avatarSrc: any;
  aspectRatio?: string;
  width?: number | string;
  height?: number | string;
  variant?: AvatarVariantsType;
  sizes?: string;
  isCenter?: boolean;
}

export interface CommonAvatarGroupPropsI {
  width?: number | string;
  height?: number | string;
  variant?: AvatarVariantsType;
  max?: number;
  customStyles?: any;
  selectedUsers?: any;
}

export interface ViewAvatarPropsI {
  isPortalOpen: boolean;
  setIsPortalOpen: any;
  avatarSrc: string;
  title: string;
  fileType: string;
}

export interface AttachFileCardPropsI {
  data: any;
  onDelete?: () => any;
  permissionKey?: string[];
  size?: AvatarSizeI;
  hasStyling?: boolean;
  canDelete?: boolean;
  flexDirection?: any;
  hasNoDeletePermission?: boolean;
  canPreviewImage?: boolean;
}

export interface LogoAvatarPropsI {
  productName?: string;
  isWhite?: boolean;
  width?: number | string;
  height?: number | string;
  variant?: AvatarVariantsType;
}

export interface SmallLogoAvatarPropsI {
  width?: number | string;
  height?: number | string;
  variant?: AvatarVariantsType;
}
