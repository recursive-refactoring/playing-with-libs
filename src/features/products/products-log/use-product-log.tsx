import { useMemo } from "react";
import {
  productLogListColumnsDynamic,
  productLogListDataDynamic,
} from "./product-log.data";

export const useProductLogFeature = () => {
  const productLogListColumns = useMemo(
    () => productLogListColumnsDynamic(),
    [],
  );
  const productLogListData = useMemo(() => productLogListDataDynamic, []);

  return {
    productLogListColumns,
    productLogListData,
  };
};
