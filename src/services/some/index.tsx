import { baseAPI } from "@/services";

export const someAPI = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getListById: builder.query({
      query: (id: string) => ({
        url: `/list/${id}`,
        method: "GET",
      }),
    }),

    postTab: builder.mutation({
      query: (body: any) => ({
        url: "/list",
        method: "POST",
        body,
      }),
    }),

    patchTab: builder.mutation({
      query: ({ body, id }: any) => ({
        url: `/list/${id}`,
        method: "PUT",
        body,
      }),
    }),
    getTypesById: builder.query({
      query: (listTypeId: string) => ({
        url: `/list-types/${listTypeId}`,
        method: "GET",
      }),
    }),
    GlobalDropdownTypes: builder.query({
      query: ({ params }: any) => ({
        url: "/types",
        method: "GET",
        params,
      }),
      transformResponse: (response: any) => response?.data?.types,
    }),
  }),
});

export const { useGetListByIdQuery, usePostTabMutation, usePatchTabMutation } =
  someAPI;
