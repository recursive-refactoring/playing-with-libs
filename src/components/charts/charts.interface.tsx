export type ChartTypesType =
  | "area"
  | "line"
  | "bar"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "boxPlot"
  | "radar"
  | "polarArea"
  | "rangeBar"
  | "rangeArea"
  | "treemap"
  | undefined;

export interface CommonChartPropsI {
  options: any;
  series: any;
  type: ChartTypesType;
  height?: string | number;
  width?: string | number;
}
