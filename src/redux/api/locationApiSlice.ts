import { apiSlice } from "./apiSlice";

export const locationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateLocation: builder.mutation({
      query: ({ body, id }) => {
        return {
          url: `location/${id}`,
          method: "PUT",
          body: body,
        };
      },
      invalidatesTags: ["Location"],
    }),

    getLocation: builder.query({
      query: (id) => {
        return {
          url: `Location/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Location"],
    }),

    setLocationStatus: builder.mutation({
      query: ({ id, status }) => {
        return {
          url: `Location/set-active/${id}`,
          method: "POST",
          body: status,
        };
      },
      invalidatesTags: ["Location"],
    }),
  }),
});

export const {
  useUpdateLocationMutation,
  useGetLocationQuery,
  useSetLocationStatusMutation,
} = locationApiSlice;
