import { useQRCode } from "./use-qr-code";

export const QRCode = (props: any) => {
  const { qrCodeValue, errorCorrectionLevel, margin, scale, width } = props;

  const { Canvas, dark, light } = useQRCode(props);

  return (
    <Canvas
      text={qrCodeValue}
      options={{
        errorCorrectionLevel,
        margin,
        scale,
        width,
        color: {
          dark,
          light,
        },
      }}
    />
  );
};
