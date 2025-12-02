import { Card } from "@/components/common";
import { Typography } from "@/libs";

const ActivityInfoCard = (props: any) => {
  const { name, info, infoColor, extraInfo } = props;
  return (
    <Card>
      <Typography color="primary.main">{name}</Typography>
      <Typography color={infoColor}>
        {info}
        <Typography component="span">{extraInfo}</Typography>
      </Typography>
    </Card>
  );
};

export default ActivityInfoCard;
