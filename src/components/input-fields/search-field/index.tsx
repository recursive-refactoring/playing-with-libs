"use client";

import CommonTextFields from "../common-text-field";
import { CommonIcon } from "@/components/icons/common-icon/common-icon";
import { useMemo } from "react";
import { UISearchIcon } from "@/assets/ui-icons";
import { SEARCH_FIELD_CATEGORY } from "@/constants/ui.constant";
import { SEARCH_FIELD_CATEGORY_STYLES } from "@/constants/styles.constant";

export const SearchField = (props: any) => {
  const {
    setSearch,
    search,
    placeholder = "Search",
    fullWidth = true,
    searchVariant = SEARCH_FIELD_CATEGORY?.PRIMARY,
  } = props;

  const handleSearch = (e: any) => {
    setSearch?.(e?.target?.value);
  };
  const styles = useMemo(
    () => SEARCH_FIELD_CATEGORY_STYLES?.[searchVariant] ?? {},
    [searchVariant],
  );

  return (
    <CommonTextFields
      fullWidth={fullWidth}
      label=""
      onChange={handleSearch}
      value={search}
      endIcon={
        <CommonIcon
          Icon={UISearchIcon}
          customStyles={{
            color: styles?.iconColor,
          }}
        />
      }
      placeholder={placeholder}
      backgroundColor={styles?.backgroundColor}
      borderRadius={2}
      border={styles?.border}
      color={styles?.color}
      borderColor={styles?.borderColor}
    />
  );
};
