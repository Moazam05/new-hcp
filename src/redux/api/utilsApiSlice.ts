import { apiSlice } from "./apiSlice";

export const utilsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSiteOfService: builder.query({
      query: () => ({
        url: "SiteOfService",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSiteOfServiceQuery } = utilsApiSlice;
