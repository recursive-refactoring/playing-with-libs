import CommonTable from "@/components/table/common-table";
import { useProductLogFeature } from "./use-product-log";

const ProductLogFeature = () => {
  const { productLogListColumns, productLogListData } = useProductLogFeature();

  return (
    <CommonTable columns={productLogListColumns} data={productLogListData} />
  );
};

export default ProductLogFeature;
