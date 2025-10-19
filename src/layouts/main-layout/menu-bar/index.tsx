import { FlexLayout } from "@/components/layouts/flex-layout";
import { NavLinks } from "../nav-links";
import { adminMenuItemsData } from "../nav-links/nav-links.data";

const MenuBar = () => {
  const menuItems = adminMenuItemsData;
  return (
    <>
      <FlexLayout>
        {menuItems?.map((menuItem: any) => (
          <NavLinks
            key={menuItem?._id}
            link={menuItem?.link}
            name={menuItem?.name}
          />
        ))}
      </FlexLayout>
    </>
  );
};

export default MenuBar;
