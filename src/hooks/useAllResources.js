// // import { useState, useEffect, useCallback } from 'react';
// import {
//   useAddBookmarkMutation,
//   useGetResourcesQuery,
// } from '../redux/slices/resources/resourcesSlice';

// export const useAllResources = route => {
//   // console.log('LINE AT 6', route);

//   // const [resources, setResources] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState(false);
//   const [addBookmark, { isLoading: bookmarkLoading }] =
//     useAddBookmarkMutation();
//   const {
//     data: resourcesData,
//     isLoading,
//     isError,
//     refetch,
//   } = useGetResourcesQuery();
//   // const [addBookmark] = useAddBookmarkMutation();
//   // Define initializeResources with useCallback to prevent infinite re-renders
//   // const initializeResources = useCallback(async () => {
//   //   try {
//   //     setLoading(true);
//   //     setError(false);

//   //     // Validate route params
//   //     if (!route?.params?.item?.allData) {
//   //       throw new Error('No resources data provided');
//   //     }

//   //     if (!Array.isArray(route.params.item.allData)) {
//   //       throw new Error('Invalid resources data format');
//   //     }

//   //     // Validate each resource has required fields
//   //     const validatedResources = route.params.item.allData.map(
//   //       (resource, index) => {
//   //         if (!resource.id) {
//   //           console.warn(
//   //             `Resource at index ${index} missing id, using fallback`,
//   //           );
//   //           return {
//   //             ...resource,
//   //             id: `fallback-${index}-${Date.now()}`,
//   //           };
//   //         }
//   //         return resource;
//   //       },
//   //     );

//   //     setResources(validatedResources);
//   //   } catch (err) {
//   //     console.error('Error initializing resources:', err);
//   //     setError(true);
//   //     setResources([]);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // }, [route.params]); // Add dependencies

//   // // Initialize resources on mount and when route params change
//   // useEffect(() => {
//   //   initializeResources();
//   // }, [initializeResources]);

//   const toggleBookmark = async resourceId => {
//     try {
//       // setResources(prevResources =>
//       //   prevResources.map(resource =>
//       //     resource.id === resourceId
//       //       ? { ...resource, bookmarked: !resource.bookmarked }
//       //       : resource,
//       //   ),
//       // );
//       const response = await addBookmark(resourceId).unwrap();
//       console.log('LINE AT 69', response);
//     } catch (err) {
//       console.error('Error toggling bookmark:', err);
//       // setError('Failed to update bookmark');
//     }
//   };

//   // const refetch = () => {
//   //   setLoading(true);
//   //   setError(false);
//   //   // Call the initializeResources function directly
//   //   // initializeResources();
//   // };

//   return {
//     data: resourcesData?.data || resourcesData || [],
//     isLoading,
//     bookmarkLoading,
//     isError,
//     toggleBookmark,
//     refetch,
//   };
// };

// import { useMemo } from 'react';
// import {
//   useAddBookmarkMutation,
//   useGetResourcesQuery,
// } from '../redux/slices/resources/resourcesSlice';

// export const useAllResources = (route) => {
//   const [addBookmark, { isLoading: bookmarkLoading }] = useAddBookmarkMutation();

//   const {
//     data: resourcesData,
//     isLoading,
//     isError,
//     refetch,
//   } = useGetResourcesQuery();

//   console.log('useAllResources - Raw API data:', resourcesData);
//   console.log('useAllResources - Route params:', route?.params);

//   // Filter data based on route params
//   const filteredData = useMemo(() => {
//     if (!resourcesData) return [];

//     // Handle different API response structures
//     const dataArray = resourcesData?.data || resourcesData || [];

//     if (!Array.isArray(dataArray) || dataArray.length === 0) return [];

//     console.log('useAllResources - Total resources before filtering:', dataArray.length);

//     // If no route params or no title, return all data
//     if (!route?.params?.title) {
//       console.log('useAllResources - No title filter, returning all data');
//       return dataArray;
//     }

//     // Filter by category name based on route title
//     const filtered = dataArray.filter(resource => {
//       const resourceCategory = resource.category?.name? toUpperCase();
//       const filterCategory = route.params.title toUpperCase();
//       const matches = resourceCategory === filterCategory;

//       console.log('Filtering:', {
//         resourceTitle: resource.title,
//         resourceCategory,
//         filterCategory,
//         matches
//       });

//       return matches;
//     });

//     console.log('useAllResources - Filtered resources:', filtered.length);
//     return filtered;
//   }, [resourcesData, route?.params?.title]);

//   const toggleBookmark = async resourceId => {
//     try {
//       const response = await addBookmark(resourceId).unwrap();
//       console.log('Bookmark response:', response);
//       refetch(); // Refresh data after bookmarking
//     } catch (err) {
//       console.error('Error toggling bookmark:', err);
//     }
//   };

//   return {
//     data: filteredData,
//     isLoading,
//     bookmarkLoading,
//     isError,
//     toggleBookmark,
//     refetch,
//   };
// };

// import { useMemo } from 'react';
// import {
//   useAddBookmarkMutation,
//   useGetResourcesQuery,
// } from '../redux/slices/resources/resourcesSlice';

// export const useAllResources = ({ category, location } = {}, route) => {
//   const [addBookmark, { isLoading: bookmarkLoading }] =
//     useAddBookmarkMutation();

//   // Build query parameters for server-side filtering
//   const queryParams = {};

//   if (category && category !== 'all') {
//     queryParams.category = category;
//   }

//   if (location && location !== 'all') {
//     queryParams.location = location;
//   }

//   console.log('useAllResources - Query params:', queryParams);
//   console.log('useAllResources - Route params:', route?.params);

//   const {
//     data: resourcesData,
//     isLoading,
//     isError,
//     refetch,
//   } = useGetResourcesQuery(queryParams); // Pass query params to API

//   console.log('useAllResources - Raw API data:', resourcesData);

//   // Filter data based on route params (client-side filtering)
//   const filteredData = useMemo(() => {
//     if (!resourcesData) return [];

//     // Handle different API response structures
//     const dataArray = resourcesData?.data || resourcesData || [];

//     if (!Array.isArray(dataArray) || dataArray.length === 0) return [];

//     console.log(
//       'useAllResources - Total resources before filtering:',
//       dataArray.length,
//     );

//     let filtered = dataArray;

//     // Client-side filtering by route params (if provided)
//     if (route?.params?.title) {
//       filtered = filtered.filter(resource => {
//         const resourceCategory = resource.category?.name? toUpperCase();
//         const filterCategory = route.params.title toUpperCase();
//         const matches = resourceCategory === filterCategory;

//         console.log('Route filtering:', {
//           resourceTitle: resource.title,
//           resourceCategory,
//           filterCategory,
//           matches,
//         });

//         return matches;
//       });
//       console.log('useAllResources - After route filtering:', filtered.length);
//     }

//     // Additional client-side filtering (if needed)
//     // This is useful if your API doesn't support certain filters

//     return filtered;
//   }, [resourcesData, route?.params?.title]);

//   const toggleBookmark = async resourceId => {
//     try {
//       const response = await addBookmark(resourceId).unwrap();
//       console.log('Bookmark response:', response);
//       refetch();
//     } catch (err) {
//       console.error('Error toggling bookmark:', err);
//     }
//   };

//   return {
//     data: filteredData,
//     isLoading,
//     bookmarkLoading,
//     isError,
//     toggleBookmark,
//     refetch,
//   };
// };

// import { useMemo } from 'react';
// import {
//   useAddBookmarkMutation,
//   useGetResourcesQuery,
// } from '../redux/slices/resources/resourcesSlice';

// export const useAllResources = (props = {}, route) => {
//   const [addBookmark, { isLoading: bookmarkLoading }] = useAddBookmarkMutation();

//   // Extract category and location from props
//   const { category, location } = props;

//   // Build query parameters for server-side filtering
//   const queryParams = {};

//   if (category && category !== 'all') {
//     queryParams.category = category;
//   }

//   if (location && location !== 'all') {
//     queryParams.location = location;
//   }

//   console.log('useAllResources - Props:', props);
//   console.log('useAllResources - Query params:', queryParams);
//   console.log('useAllResources - Route params:', route?.params);

//   const {
//     data: resourcesData,
//     isLoading,
//     isError,
//     refetch,
//   } = useGetResourcesQuery(queryParams);

//   console.log('useAllResources - Raw API data:', resourcesData);

//   // Filter data based on both props and route params
//   const filteredData = useMemo(() => {
//     if (!resourcesData) return [];

//     // Handle different API response structures
//     const dataArray = resourcesData?.data || resourcesData || [];

//     if (!Array.isArray(dataArray) || dataArray.length === 0) return [];

//     console.log('useAllResources - Total resources before filtering:', dataArray.length);

//     let filtered = dataArray;

//     // Client-side filtering by route params (if provided)
//     if (route?.params?.title) {
//       filtered = filtered.filter(resource => {
//         const resourceCategory = resource.category?.name? toUpperCase();
//         const filterCategory = route.params.title toUpperCase();
//         const matches = resourceCategory === filterCategory;

//         console.log('Route filtering:', {
//           resourceTitle: resource.title,
//           resourceCategory,
//           filterCategory,
//           matches,
//         });

//         return matches;
//       });
//       console.log('useAllResources - After route filtering:', filtered.length);
//     }

//     // Additional client-side filtering for props (if API doesn't support them)
//     // This ensures filtering works even if backend doesn't support query params
//     if (category && category !== 'all') {
//       filtered = filtered.filter(resource =>
//         resource.category?.name? toUpperCase() === category toUpperCase()
//       );
//       console.log('useAllResources - After category filter:', filtered.length);
//     }

//     if (location && location !== 'all') {
//       filtered = filtered.filter(resource =>
//         resource.location? toUpperCase() === location toUpperCase()
//       );
//       console.log('useAllResources - After location filter:', filtered.length);
//     }

//     return filtered;
//   }, [resourcesData, route?.params?.title, category, location]);

//   const toggleBookmark = async resourceId => {
//     try {
//       const response = await addBookmark(resourceId).unwrap();
//       console.log('Bookmark response:', response);
//       refetch();
//     } catch (err) {
//       console.error('Error toggling bookmark:', err);
//     }
//   };

//   return {
//     data: filteredData,
//     isLoading,
//     bookmarkLoading,
//     isError,
//     toggleBookmark,
//     refetch,
//   };
// };

import { useMemo } from 'react';
import {
  useAddBookmarkMutation,
  useGetResourcesQuery,
} from '../redux/slices/resources/resourcesSlice';
import { capitalizeFirst } from '../utils/capitalizeFirst';

export const useAllResources = (firstParam = {}, secondParam) => {
  const [addBookmark, { isLoading: bookmarkLoading }] =
    useAddBookmarkMutation();

  // Determine if firstParam is props or route
  let props, route;

  if (firstParam?.params) {
    // firstParam is route object
    route = firstParam;
    props = {};
  } else {
    // firstParam is props object
    props = firstParam;
    route = secondParam;
  }

  const { category, location } = props;

  // Build query parameters for server-side filtering
  const queryParams = {};

  if (category && category !== 'all') {
    // queryParams.category = capitalizeFirst(category);
    queryParams.category = (category);
  }

  if (location && location !== 'all') {
    // queryParams.location = capitalizeFirst(location);
    queryParams.location = (location);
  }

  console.log('useAllResources - Props:', props);
  console.log('useAllResources - Query params:', queryParams);
  console.log('useAllResources - Route params:', route?.params);

  const {
    data: resourcesData,
    isLoading,
    isError,
    refetch,
  } = useGetResourcesQuery(queryParams);

  console.log('useAllResources - Raw API data:', resourcesData);

  // Filter data based on both props and route params
  const filteredData = useMemo(() => {
    if (!resourcesData) return [];

    // Handle different API response structures
    const dataArray = resourcesData?.data || resourcesData || [];

    if (!Array.isArray(dataArray) || dataArray.length === 0) return [];

    console.log(
      'useAllResources - Total resources before filtering:',
      dataArray.length,
    );

    let filtered = dataArray;

    // Client-side filtering by route params (if provided)
    if (route?.params?.title) {
      filtered = filtered.filter(resource => {
        // const resourceCategory = resource.category?.name?.toUpperCase();
        const resourceCategory = resource.category?.name?.toLowerCase();

        // const filterCategory = route.params.title.toUpperCase();
        const filterCategory = route.params.title.toLowerCase();
        const matches = resourceCategory === filterCategory;

        console.log('Route filtering:', {
          resourceTitle: resource.title,
          resourceCategory,
          filterCategory,
          matches,
        });

        return matches;
      });
      console.log('useAllResources - After route filtering:', filtered.length);
    }

    // Additional client-side filtering for props (if API doesn't support them)
    if (category && category !== 'all') {
      filtered = filtered.filter(
        resource =>
          // resource.category?.name?.toUpperCase() === category.toUpperCase(),
          resource.category?.name?.toLowerCase() === category.toLowerCase(),
      );
      console.log('useAllResources - After category filter:', filtered.length);
    }

    if (location && location !== 'all') {
      filtered = filtered.filter(
        // resource => resource.location?.toUpperCase() === location.toUpperCase(),
        resource => resource.location?.toLowerCase() === location.toLowerCase(),
      );
      console.log('useAllResources - After location filter:', filtered.length);
    }

    return filtered;
  }, [resourcesData, route?.params?.title, category, location]);

  const toggleBookmark = async resourceId => {
    try {
      const response = await addBookmark(resourceId).unwrap();
      console.log('Bookmark response:', response);
      refetch();
    } catch (err) {
      console.error('Error toggling bookmark:', err);
    }
  };

  return {
    data: filteredData,
    isLoading,
    bookmarkLoading,
    isError,
    toggleBookmark,
    refetch,
  };
};
