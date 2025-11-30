export const isImage = (string: any = "") =>
  /\.(jpg|jpeg|png|gif|webp)$/i.test(string);

export const isVideo = (string: any = "") => /\.(mp4|webm|ogg)$/i.test(string);
