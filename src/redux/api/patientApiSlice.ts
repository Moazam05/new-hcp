import { apiSlice } from "./apiSlice";

export const patientApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPatient: builder.mutation({
      query: (body) => {
        return {
          url: "Enrollment/submit-case",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["Patient"],
    }),
  }),
});

export const { useAddPatientMutation } = patientApiSlice;
