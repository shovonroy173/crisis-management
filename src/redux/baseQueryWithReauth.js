// import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { clearAuth, setCredentials } from './reducers/authReducer.js';

// // Create the base query without reauth logic
// export const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://forty-promoted-steve-transaction.trycloudflare.com/api/v1',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.accessToken;
//     if (token) {
//       headers.set('Authorization', `Bearer ${token}`);
//     }
//     return headers;
//   },
//   credentials: 'include',
// });

// // Enhanced query with reauth logic
// export const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if ( result.error.status === 401) {
//     // Try to refresh the accessToken using the refresh cookie
//     const refreshResult = await baseQuery(
//       { url: '/users/refresh-token', method: 'POST' },
//       api,
//       extraOptions,
//     );

//     if (refreshResult.data) {
//       api.dispatch(
//         setCredentials({
//           accessToken: refreshResult.data.data.accessToken,
//           user: api.getState().auth.user,
//         }),
//       );
//       // Retry original query with new token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       console.log('Refresh token failed, logging out...');
//       api.dispatch(clearAuth());
//     }
//   }

//   return result;
// };

import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { clearAuth, setCredentials } from './reducers/authReducer.js';
import { jwtDecode } from 'jwt-decode';

// Create the base query without reauth logic
export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://any-look-confidentiality-definition.trycloudflare.com/api/v1',
  prepareHeaders: (headers, { getState, endpoint }) => {
    // Check if endpoint has skipAuth meta
    const state = getState();
    const endpointDefinition = state?.api?.config?.endpoints?.[endpoint];
    const skipAuth = endpointDefinition?.meta?.skipAuth;

    if (!skipAuth) {
      const token = getState().auth.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    } else {
      console.log(`🔓 Skipping auth for endpoint: ${endpoint}`);
    }
    return headers;
  },
  credentials: 'include',
});

// Enhanced query with reauth logic
export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // ✅ FIX: Add proper error checking
  if (result.error && result.error.status === 401) {
    console.log('🔄 Token expired, attempting refresh...');

    // Try to refresh the accessToken using the refresh cookie
    const refreshResult = await baseQuery(
      { url: '/users/refresh-token', method: 'POST' },
      api,
      extraOptions,
    );

    if (refreshResult.data && refreshResult.data.data?.accessToken) {
      console.log('✅ Token refresh successful');

      // Get current user from state or decode from new token
      const currentUser =
        api.getState().auth.user ||
        (refreshResult.data.data.accessToken
          ? jwtDecode(refreshResult.data.data.accessToken)
          : null);

      api.dispatch(
        setCredentials({
          accessToken: refreshResult.data.data.accessToken,
          user: currentUser,
        }),
      );

      // Retry original query with new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log('❌ Refresh token failed, logging out...');
      api.dispatch(clearAuth());
    }
  }

  return result;
};
