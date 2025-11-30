// RTK Query
import { BE_BASE_URL, TOKEN } from "@/configs/env.config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: BE_BASE_URL,
  prepareHeaders: (headers: any) => {
    const token = TOKEN;
    headers.set("product", "E_INSPECT");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseAPI: any = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
