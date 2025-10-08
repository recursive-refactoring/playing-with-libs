"use client"

import dynamic from "next/dynamic";
import { ChartStyle } from ".";
import { barOptionsDynamic } from "./common-chart.data";
import { CommonChartPropsI } from "../charts.interface";
import LazyLoadingFlow from "@/components/lazy-loading-flow";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: (options: any) => (
    <LazyLoadingFlow
      name="chart"
      isLoading={options?.isLoading}
      error={options?.error}
    />
  ),
});

export const CommonChart = (props: CommonChartPropsI) => {
  const { options, series, type, height = "312", width } = props;

  const barOptions = barOptionsDynamic(type, options);

  return (
    <>
      <ChartStyle />
      <ReactApexChart
        options={barOptions}
        series={series}
        type={type}
        width={width}
        height={height}
      />
    </>
  );
};

export { default as ChartStyle } from "./common-chart.style";
