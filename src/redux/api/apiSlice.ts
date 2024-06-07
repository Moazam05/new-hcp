// Redux Imports
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Custom Imports
import { RootState } from "../store";
import ToastAlert from "../../components/ToastAlert";

let alertShown = false; // Flag to track whether the alert has been shown

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.user?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },

    fetchFn: async (...args) => {
      const response = await fetch(...args);

      if (response.status === 401 && !alertShown) {
        alertShown = true;
        ToastAlert("Unauthorized", "error");

        setTimeout(() => {
          localStorage.clear();
          window.location.href = "/login";
        }, 2000); // Wait for 2 seconds before redirecting
      }

      return response;
    },
  }),
  tagTypes: ["Person", "Location", "Patient"],
  endpoints: () => ({}),
});
