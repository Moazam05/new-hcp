import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => {
        return {
          url: "Account/UserProfile",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetProfileQuery } = userApiSlice;
