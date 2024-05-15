import { apiSlice } from "./apiSlice";

export const personApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPerson: builder.mutation({
      query: (body) => {
        return {
          url: "Person",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["Person"],
    }),

    updatePerson: builder.mutation({
      query: ({ body, id }) => {
        return {
          url: `person/${id}`,
          method: "PUT",
          body: body,
        };
      },
      invalidatesTags: ["Person"],
    }),

    allPersons: builder.query({
      query: ({ type }) => {
        return {
          url: `Person/all?type=${type}`,
          method: "GET",
        };
      },
      providesTags: ["Person"],
    }),

    getPerson: builder.query({
      query: (id) => {
        return {
          url: `Person/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Person"],
    }),

    setPersonStatus: builder.mutation({
      query: ({ id, status }) => {
        return {
          url: `Person/set-active/${id}`,
          method: "POST",
          body: status,
        };
      },
      invalidatesTags: ["Person"],
    }),
  }),
});

export const {
  useAddPersonMutation,
  useUpdatePersonMutation,
  useAllPersonsQuery,
  useGetPersonQuery,
  useSetPersonStatusMutation,
} = personApiSlice;
