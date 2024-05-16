import { apiSlice } from "./apiSlice";

export const locationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => {
        return {
          url: "location/all",
          method: "GET",
        };
      },
      providesTags: ["Location"],
    }),

    addLocation: builder.mutation({
      query: (body) => {
        return {
          url: "Location",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["Location"],
    }),

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
  useGetLocationsQuery,
  useAddLocationMutation,
  useUpdateLocationMutation,
  useGetLocationQuery,
  useSetLocationStatusMutation,
} = locationApiSlice;
