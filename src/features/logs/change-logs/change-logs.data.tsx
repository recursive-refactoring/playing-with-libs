"use client";

import LazyLoadingFlow from "@/components/lazy-loading-flow";
import dynamic from "next/dynamic";

const ProductLogFeature = dynamic(
  () => import("@/features/products/products-log"),
  {
    ssr: false,
    loading: (options: any) => (
      <LazyLoadingFlow
        name="products"
        isLoading={options?.isLoading}
        error={options?.error}
      />
    ),
  },
);

const LotLogFeature = dynamic(
  () => import("@/features/products/products-log"),
  {
    ssr: false,
    loading: (options: any) => (
      <LazyLoadingFlow
        name="lots"
        isLoading={options?.isLoading}
        error={options?.error}
      />
    ),
  },
);

export const changeLogsTabData = [
  {
    _id: 1,
    name: "Products",
    component: ProductLogFeature,
  },
  {
    _id: 2,
    name: "Lots",
    component: LotLogFeature,
  },
];
