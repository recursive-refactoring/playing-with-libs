import {
  FontProvider,
  SnackBarProvider,
  StoreProvider,
  ThemeProvider,
} from "@/providers";

export const RootLayout = (props: any) => {
  const { children } = props;

  return (
    <FontProvider>
      <StoreProvider>
        <ThemeProvider>
          <SnackBarProvider>{children}</SnackBarProvider>
        </ThemeProvider>
      </StoreProvider>
    </FontProvider>
  );
};

export default RootLayout;
