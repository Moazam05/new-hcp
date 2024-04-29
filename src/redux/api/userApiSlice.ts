import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => {
        return {
          url: "Account/UserProfile",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetUserQuery } = userApiSlice;
