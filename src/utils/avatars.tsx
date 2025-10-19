import { IMAGE_BASE_URL } from "@/configs/env";
import { FILE_MAX_SIZE } from "@/configs/file";
import { ARRAY_INDEX } from "@/constants/array";
import { FILE_TYPE_BASED_IMAGES } from "@/constants/avatars";
import { FILE_SIZE_UNITS } from "@/constants/file";

export const fullNameInitial = (firstName?: any, lastName?: any) => {
  if (!!!firstName && !!!lastName) return "-";
  return `${firstName?.[ARRAY_INDEX?.ZERO] ?? ""} ${
    lastName?.[ARRAY_INDEX?.ZERO] ?? ""
  }`;
};

export const getInitialsSingleName = (name: any) => {
  if (!name) return "-";
  const initials = name
    ?.split(" ")
    ?.map((n: any) => n[ARRAY_INDEX?.ZERO])
    ?.join("")
    ?.toUpperCase();
  return initials?.substring(0, 2);
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
