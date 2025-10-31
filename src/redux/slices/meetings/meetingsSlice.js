import { baseApi } from '../../baseApi';

export const meetingsSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAvailableMeetings: builder.query({
      query: () => '/meetings/available',
      providesTags: ['GetAvailableMeetings'],
      meta: {
        skipAuth: false,
      },
    }),
    getMyMeetings: builder.query({
      query: () => '/meetings/my-bookings',
      providesTags: ['GetMyMeetings'],
      meta: {
        skipAuth: false,
      },
    }),

    getMyMeetingsHistory: builder.query({
      query: () => '/meetings/meeting-history',
      providesTags: ['GetMyMeetingsHistory'],
      meta: {
        skipAuth: false,
      },
    }),

    getSupervisorMeetings: builder.query({
      query: () => '/meetings/super-visor-meetings',
      providesTags: ['CreateMeetingBySupervisor', 'UpdateMeetingBySupervisor'],
      meta: {
        skipAuth: false,
      },
    }),

    addBookslot: builder.mutation({
      query: id => ({
        url: `/meetings/${id}/book`,
        method: 'POST',
        // body: credentials,
      }),
      invalidatesTags: ['AddBookslot', 'GetAvailableMeetings', 'GetMyMeetings'],
      meta: {
        skipAuth: true, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),
    cancelMeeting: builder.mutation({
      query: id => ({
        url: `/meetings/${id}/cancel`,
        method: 'PUT',
        // body: credentials,
      }),
      invalidatesTags: [
        'AddBookslot',
        'GetAvailableMeetings',
        'GetMyMeetings',
        'CancelMeeting',
      ],
      meta: {
        skipAuth: true, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAvailableMeetingsQuery,
  useAddBookslotMutation,
  useGetMyMeetingsQuery,
  useGetMyMeetingsHistoryQuery,
  useCancelMeetingMutation,
  useGetSupervisorMeetingsQuery,
} = meetingsSlice;
