import { api } from "@api/api";

import { UniversityData } from "../../sharedTypes/universityData";

export const universityApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUniversityDataByCountry: builder.query<Array<UniversityData>, string>({
      query: (name) => `/search?country=${name}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetUniversityDataByCountryQuery } = universityApi;
