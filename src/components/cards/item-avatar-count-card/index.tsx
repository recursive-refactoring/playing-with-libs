import { RecordCountChip } from "@/components/chips/record-count-chip";
import { CommonCard } from "../common-card";
import { StaticAvatar } from "@/components/avatars/static-avatar";
import { ItemAvatarCountCardPropsI } from "../cards.interface";

const ItemAvatarCountCard = (props: ItemAvatarCountCardPropsI) => {
  const { name, avatarSrc, count } = props;
  return (
    <CommonCard>
      <RecordCountChip name={name} totalCount={count} />
      <StaticAvatar avatarSrc={avatarSrc} />
    </CommonCard>
  );
};

export default ItemAvatarCountCard;
