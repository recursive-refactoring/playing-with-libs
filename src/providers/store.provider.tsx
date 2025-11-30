"use client";

import store from "@/store";
import React from "react";
import { Provider } from "react-redux";

export const StoreProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Provider store={store}>{children}</Provider>;
};
