import { jwtDecode } from 'jwt-decode';
import { baseApi } from '../baseApi.js';
import { setCredentials } from '../reducers/authReducer.js';

export const authSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('Login data:', data);
          // dispatch(setToken(data.refresh));
          // dispatch(setUser(jwtDecode(data?.data?.accessToken)));
          // dispatch(setToken(data?.data?.accessToken)); // ✅ store ACCESS token, not refresh
          // dispatch(setUser(jwtDecode(data.access))); // optional

          dispatch(
            setCredentials({
              accessToken: data?.data?.accessToken,
              user: jwtDecode(data?.data?.accessToken),
            }),
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    register: builder.mutation({
      query: credentials => ({
        url: '/users',
        method: 'POST',
        body: credentials,
      }),
      // invalidatesTags: ['players'],
      // meta: {
      //   skipAuth: true, // ✅ This tells prepareHeaders to skip Authorization
      // },
    }),

    logout: builder.mutation({
      query: credentials => ({
        url: '/users/logout',
        method: 'POST',
        body: credentials,
      }),
      meta: {
        skipAuth: true, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),

    resetPassword: builder.mutation({
      query: credentials => {
        console.log('LINE AT 82', credentials);

        return {
          url: '/users/profile/change-password',
          method: 'PUT',
          body: credentials,
        };
      },

      meta: {
        skipAuth: false, // ✅ This tells prepareHeaders to skip Authorization
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('Login data:', data);
          // dispatch(setToken(data.refresh));
          // dispatch(setUser(jwtDecode(data?.data?.accessToken)));
          // dispatch(setToken(data?.data?.accessToken)); // ✅ store ACCESS token, not refresh
          // dispatch(setUser(jwtDecode(data.access))); // optional

          dispatch(
            setCredentials({
              accessToken: data?.data?.accessToken,
              user: jwtDecode(data?.data?.accessToken),
            }),
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    getMyNotifications: builder.query({
      query: () => '/notifications',
      // providesTags: ['GetMyMeetingsHistory'],
      meta: {
        skipAuth: false,
      },
    }),

    getCategories: builder.query({
      query: () => '/categories',
      // providesTags: ['GetMyMeetingsHistory'],
      meta: {
        skipAuth: false,
      },
    }),

    getLocations: builder.query({
      query: () => '/resources/locations',
      // providesTags: ['GetMyMeetingsHistory'],
      meta: {
        skipAuth: false,
      },
    }),

    addZoomLink: builder.mutation({
      query: credentials => ({
        url: '/meetings/zoom-link',
        method: 'PUT',
        body: credentials,
      }),
      meta: {
        skipAuth: true, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),
  }),

  overrideExisting: true,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useResetPasswordMutation,
  useGetMyNotificationsQuery,
  useGetCategoriesQuery,
  useAddZoomLinkMutation,
  useGetLocationsQuery,
} = authSlice;

// import { jwtDecode } from 'jwt-decode';
// import { baseApi } from '../baseApi.js';
// import { setCredentials, clearAuth } from '../reducers/authReducer.js';

// export const authSlice = baseApi.injectEndpoints({
//   endpoints: builder => ({
//     login: builder.mutation({
//       query: credentials => ({
//         url: '/users/login',
//         method: 'POST',
//         body: credentials,
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           console.log('✅ Login successful:', data);

//           if (data?.data?.accessToken) {
//             const user = jwtDecode(data.data.accessToken);
//             dispatch(
//               setCredentials({
//                 accessToken: data.data.accessToken,
//                 user: user,
//               }),
//             );
//           } else {
//             console.error('❌ No access token in login response');
//           }
//         } catch (error) {
//           console.error('❌ Login failed:', error);
//           // Clear any existing auth state on login failure
//           dispatch(clearAuth());
//         }
//       },
//     }),

//     register: builder.mutation({
//       query: credentials => ({
//         url: '/users',
//         method: 'POST',
//         body: credentials,
//       }),
//       // No auth needed for registration
//       meta: {
//         skipAuth: true,
//       },
//     }),

//     logout: builder.mutation({
//       query: () => ({
//         url: '/users/logout',
//         method: 'POST',
//       }),
//       meta: {
//         skipAuth: true,
//       },
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           await queryFulfilled;
//           console.log('✅ Logout successful');
//         } catch (error) {
//           console.log('⚠️ Logout API call failed:', error);
//         } finally {
//           // Always clear auth state locally
//           dispatch(clearAuth());
//         }
//       },
//     }),

//     resetPassword: builder.mutation({
//       query: credentials => {
//         console.log('LINE AT 174', credentials);

//         return {
//           url: '/users/profile/change-password',
//           method: 'PUT',
//           body: credentials,
//         };
//       },
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           console.log('✅ Password reset successful:', data);

//           // If the reset endpoint returns a new token, update credentials
//           if (data?.data?.accessToken) {
//             const user = jwtDecode(data.data.accessToken);
//             dispatch(
//               setCredentials({
//                 accessToken: data.data.accessToken,
//                 user: user,
//               }),
//             );
//           }
//         } catch (error) {
//           console.error('❌ Password reset failed:', error);
//         }
//       },
//     }),

//     // Optional: Add a refresh token endpoint for manual refresh
//     refreshToken: builder.mutation({
//       query: () => ({
//         url: '/users/refresh-token',
//         method: 'POST',
//       }),
//       meta: {
//         skipAuth: true, // Don't use expired token for refresh
//       },
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           console.log('✅ Manual token refresh successful');

//           if (data?.data?.accessToken) {
//             const user = jwtDecode(data.data.accessToken);
//             dispatch(
//               setCredentials({
//                 accessToken: data.data.accessToken,
//                 user: user,
//               }),
//             );
//           }
//         } catch (error) {
//           console.error('❌ Manual token refresh failed:', error);
//           dispatch(clearAuth());
//         }
//       },
//     }),
//   }),

//   overrideExisting: true,
// });

// export const {
//   useLoginMutation,
//   useRegisterMutation,
//   useLogoutMutation,
//   useResetPasswordMutation,
//   useRefreshTokenMutation,
// } = authSlice;
