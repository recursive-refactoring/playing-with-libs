import { IMAGE_BASE_URL } from "@/configs/env.config";
import { FILE_MAX_SIZE } from "@/configs/file.config";
import { FILE_TYPE_BASED_IMAGES } from "@/constants/avatars.constant";
import { FILE_SIZE_UNITS } from "@/constants/file.constant";

export const getInitials = (
  firstName: string,
  lastName?: string,
  isFullName: boolean = false,
) => {
  if (!firstName && !lastName) return "";
  if (isFullName) return getInitialsFromName(firstName);
  const initials: string = `${firstName?.charAt(0) ?? ""}${lastName?.charAt(0) ?? ""}`;
  return initials;
};

export const getFullName = (
  firstName: string,
  lastName?: string,
  fallback: string = "---",
) => {
  if (!firstName && !lastName) return fallback;
  const fullName: string = `${firstName ?? ""} ${lastName ?? ""}`;
  return fullName;
};

export const getInitialsFromName = (name: string) => {
  const nameParts: any = name?.split(" ") ?? [];
  const initials: string = `${nameParts?.[0]?.charAt(0) ?? ""}${nameParts?.[1]?.charAt(0) ?? ""}`;
  return initials;
};

export const uploadFileMaxSize =
  FILE_MAX_SIZE?.ATTACH_FILE_MAX_SIZE / FILE_SIZE_UNITS?.MB;

export const maxFileSize = (sizeInBytes: number) => {
  const sizeInMB = sizeInBytes / FILE_SIZE_UNITS?.MB;
  return sizeInMB?.toFixed(2) + " MB";
};

export const formatFileSize = (fileSize = 0) => {
  const { KB, MB } = FILE_SIZE_UNITS ?? {};
  const FIXED_DECIMAL = 2;
  if (!!!fileSize) return;
  if (fileSize < KB) return fileSize + " KB";
  if (fileSize < MB) return (fileSize / KB)?.toFixed(FIXED_DECIMAL) + " MB";
  return (fileSize / MB)?.toFixed(FIXED_DECIMAL) + " GB";
};

export const getImageByType = (data: any, imageUrl = data?.fileUrl) => {
  return (
    FILE_TYPE_BASED_IMAGES?.[data?.fileType]?.src || generateImage(imageUrl)
  );
};

export const getPreviewImageByType = (data: any) => {
  const type = data?.type?.split("/")?.pop();
  return FILE_TYPE_BASED_IMAGES?.[type]?.src || URL?.createObjectURL(data);
};

export const generateImage = (imgSrc?: any) => {
  if (!!!imgSrc) return "";
  return `${IMAGE_BASE_URL}${imgSrc}`;
};
