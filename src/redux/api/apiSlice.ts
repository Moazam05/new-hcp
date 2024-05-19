// Redux Imports
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Custom Imports
import { RootState } from "../store";
import ToastAlert from "../../components/ToastAlert";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.user?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}1`);
      }
      return headers;
    },

    fetchFn: async (...args) => {
      const response = await fetch(...args);

      if (response.status === 401) {
        ToastAlert("Unauthorized", "error");

        localStorage.clear();
        window.location.href = "/login";
      }

      return response;
    },
  }),
  tagTypes: ["Person", "Location"],
  endpoints: () => ({}),
});
