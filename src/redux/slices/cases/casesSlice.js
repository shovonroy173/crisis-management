import { baseApi } from '../../baseApi';

export const casesSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMyCases: builder.query({
      query: () => '/cases/my-cases',
      providesTags: ['GetMyCases'],
      meta: {
        skipAuth: false,
      },
    }),
    getMyAvailableCases: builder.query({
      query: () => '/cases/available-cases',
      providesTags: ['GetMyAvailableCases', 'ApplyCase'],
      meta: {
        skipAuth: false,
      },
    }),
    applyCase: builder.mutation({
      query: id => ({
        url: `/cases/${id}/apply`,
        method: 'POST',
        // body: credentials,
      }),
      invalidatesTags: ['ApplyCase'],
      meta: {
        skipAuth: true, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetMyCasesQuery,
  useGetMyAvailableCasesQuery,
  useApplyCaseMutation,
} = casesSlice;
