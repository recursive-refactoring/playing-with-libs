import { Card, CardContent } from "@mui/material";

export const CustomCard = (props: any) => {
  const { children } = props;
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
