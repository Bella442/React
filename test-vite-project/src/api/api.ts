import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UniversityData } from "../apiModels/universityData";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://universities.hipolabs.com' }),
  endpoints: (build) => ({
    getUniversityDataByCountry: build.query<Array<UniversityData>, string>({
      query: (name) => `/search?country=${name}`,
    }),
  }),
});

export const { useGetUniversityDataByCountryQuery } = api;
