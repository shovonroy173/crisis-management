import { baseApi } from '../../baseApi';

export const supervisorMeetingsSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    // getAvailableMeetings: builder.query({
    //   query: () => '/meetings/available',
    //   providesTags: ['GetAvailableMeetings'],
    //   meta: {
    //     skipAuth: false,
    //   },
    // }),
    getMyMeetings: builder.query({
      query: () => '/meetings/my-bookings',
      //   providesTags: ['GetMyMeetings'],
      meta: {
        skipAuth: false,
      },
    }),

    getSupervisorMeetingsHistory: builder.query({
      query: () => '/meetings/supervisor/meeting-history',
      //   providesTags: ['GetMyMeetingsHistory'],
      meta: {
        skipAuth: false,
      },
    }),

    // getSupervisorMeetings: builder.query({
    //   query: () => '/meetings/super-visor-meetings',
    //   // providesTags: ['GetMyMeetingsHistory'],
    //   meta: {
    //     skipAuth: false,
    //   },
    // }),

    createMeetingBySupervisor: builder.mutation({
      query: credentials => ({
        url: `/meetings`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['CreateMeetingBySupervisor'],
      meta: {
        skipAuth: true, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),

    updateMeetingBySupervisor: builder.mutation({
      query: ({ id, credentials }) => {
        console.log('L:INE AT 50', id, credentials);

        return {
          url: `/meetings/${id}`,
          method: 'PUT',
          body: credentials,
        };
      },
      invalidatesTags: ['UpdateMeetingBySupervisor'],
      meta: {
        skipAuth: true, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),

    // cancelMeeting: builder.mutation({
    //   query: id => ({
    //     url: `/meetings/${id}/cancel`,
    //     method: 'PUT',
    //     // body: credentials,
    //   }),
    //   //   invalidatesTags: [
    //   //     'AddBookslot',
    //   //     'GetAvailableMeetings',
    //   //     'GetMyMeetings',
    //   //     'CancelMeeting',
    //   //   ],
    //   meta: {
    //     skipAuth: true, // ✅ This tells prepareHeaders to skip Authorization
    //   },
    // }),
  }),
  overrideExisting: true,
});

export const {
  //   useGetAvailableMeetingsQuery,
  useCreateMeetingBySupervisorMutation,
  useGetMyMeetingsQuery,
  useGetSupervisorMeetingsHistoryQuery,
  // useGetMyMeetingsHistoryQuery,
  // useCancelMeetingMutation,
  //   useGetSupervisorMeetingsQuery,
  useUpdateMeetingBySupervisorMutation,
} = supervisorMeetingsSlice;
