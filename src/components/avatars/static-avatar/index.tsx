import { AVATAR_VARIANTS } from "@/constants/ui";
import { StaticAvatarPropsI } from "../avatars.interface";
import Image from "next/image";
import { pxToRem } from "@/utils/styles";
import { STATIC_BLUR_DATA_URL } from "@/constants/avatars";
import { AVATAR_VARIANTS_BORDER_RADIUS } from "@/constants/styles";

export const StaticAvatar = (props: StaticAvatarPropsI) => {
  const {
    avatarSrc,
    alt = "",
    backgroundColor = "transparent",
    width = 25,
    height = 25,
    variant = AVATAR_VARIANTS?.CIRCULAR,
    aspectRatio = "1",
    sizes = "100vw",
    isCenter = false,
  } = props;

  const borderRadius = AVATAR_VARIANTS_BORDER_RADIUS?.[variant];

  return (
    <div
      style={{
        position: "relative",
        width: pxToRem(width),
        height: pxToRem(height),
        aspectRatio,
        backgroundColor,
        borderRadius,
        overflow: "hidden",
        margin: isCenter ? "auto" : "",
      }}
    >
      <Image
        alt={alt}
        fill
        src={avatarSrc}
        priority
        sizes={sizes}
        placeholder="blur"
        blurDataURL={STATIC_BLUR_DATA_URL}
        style={{
          objectFit: "cover",
          borderRadius,
          aspectRatio,
        }}
      />
    </div>
  );
};
