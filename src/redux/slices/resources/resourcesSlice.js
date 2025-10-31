import { baseApi } from '../../baseApi';

export const resourcesSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    // getResources: builder.query({
    //   query: () => '/resources',
    //   providesTags: ['GetResources', 'ResourceBookmark'],
    //   meta: {
    //     skipAuth: false,
    //   },
    // }),

    // In your API slice, update the getResources query
    getResources: builder.query({
      query: (params = {}) => {
        console.log('LINE AT 16', params);

        const queryString = new URLSearchParams();

        // Add category if provided
        if (params.category) {
          queryString.append('category', params.category);
        }

        // Add location if provided
        if (params.location) {
          queryString.append('location', params.location);
        }

        const url = queryString.toString()
          ? `/resources/three?${queryString.toString()}`
          : '/resources/three';
        console.log('LINE AT url', url);

        return {
          url,
          providesTags: ['GetResources', 'ResourceBookmark'],
          meta: {
            skipAuth: false,
          },
        };
      },
    }),
    getMyBookmarkedResources: builder.query({
      query: () => '/resources/bookmarks',
      providesTags: ['GetResources', 'ResourceBookmark'],
      meta: {
        skipAuth: false,
      },
    }),
    addBookmark: builder.mutation({
      query: id => ({
        url: `/resources/${id}/bookmark/toggle`,
        method: 'POST',
        // body: credentials,
      }),
      invalidatesTags: ['ResourceBookmark'],
      meta: {
        skipAuth: true, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetResourcesQuery,
  useAddBookmarkMutation,
  useGetMyBookmarkedResourcesQuery,
} = resourcesSlice;
