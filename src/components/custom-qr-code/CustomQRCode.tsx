import { useCustomQRCode } from "./useCustomQRCode";

export const CustomQRCode = (props: any) => {
  const { qrCodeValue, errorCorrectionLevel, margin, scale, width } = props;
  const { Canvas, dark, light } = useCustomQRCode(props);
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

export default CustomQRCode;
