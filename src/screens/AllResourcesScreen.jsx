// import { View, FlatList } from 'react-native';
// import React from 'react';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import Navbar from '../components/Navbar';
// import SingleResourceCard from './SingleResourceCard';
// import ResourcesListHeader from '../components/ResourcesListHeader';
// import { useNavigation } from '@react-navigation/native';

// import { useAllResources } from '../hooks/useAllResources';
// import GlobalLoading from '../components/GlobalLoading';
// import GlobalError from '../components/GlobalError';
// import GlobalEmpty from '../components/GlobalEmpty';

// const AllResourcesScreen = ({ route }) => {
//   // console.log('LINE AT 10', route);
//   const navigation = useNavigation();
//   // const [resources, setResources] = useState(route?.params?.item?.allData);
//   const {
//     data: resources,
//     isLoading: loading,
//     isError: error,
//     bookmarkLoading,
//     toggleBookmark,
//     refetch,
//   } = useAllResources();

//   console.log('LINE AT 18', resources, loading, error);

//   const handleViewDetails = resource => {
//     // console.log('View details:', resource);

//     navigation.navigate('ResourcesDetail', { singleResource: resource });
//   };



//   const renderItem = ({ item }) => (
//     <SingleResourceCard
//       resource={item}
//       onViewDetails={handleViewDetails}
//       onToggleBookmark={toggleBookmark}
//       loading={bookmarkLoading}
//     />
//   );
//   return (
//     <View
//       className="flex-1 bg-white"
//       style={{
//         paddingHorizontal: responsiveWidth(5),
//         paddingTop: responsiveWidth(5),
//         gap: responsiveHeight(3),
//       }}
//     >
//       <Navbar title={`${route.params.title} Resources`} />

//       <FlatList
//         data={resources}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//         ListHeaderComponent={<ResourcesListHeader count={resources.length} />}
//         contentContainerStyle={{ gap: responsiveHeight(2) }}
//         showsVerticalScrollIndicator={false}
//         ListEmptyComponent={
//           <View>
//             {loading && <GlobalLoading />}
//             {error && <GlobalError />}
//             {resources.length < 0 && <GlobalEmpty />}
//           </View>
//         }
//         refreshing={loading}
//         onRefresh={refetch}
//       />
//     </View>
//   );
// };

// export default AllResourcesScreen;


import { View, FlatList } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Navbar from '../components/Navbar';
import SingleResourceCard from './SingleResourceCard';
import ResourcesListHeader from '../components/ResourcesListHeader';
import { useNavigation } from '@react-navigation/native';

import { useAllResources } from '../hooks/useAllResources';
import GlobalLoading from '../components/GlobalLoading';
import GlobalError from '../components/GlobalError';
import GlobalEmpty from '../components/GlobalEmpty';

const AllResourcesScreen = ({ route }) => {
  const navigation = useNavigation();
  
  console.log('AllResourcesScreen - Route params:', route.params);

  const {
    data: resources,
    isLoading: loading,
    isError: error,
    bookmarkLoading,
    toggleBookmark,
    refetch,
  } = useAllResources(route); // Pass the route to the hook

  // console.log('LINE AT 18 - Resources:', resources);
  // console.log('LINE AT 19 - Loading:', loading);
  // console.log('LINE AT 20 - Error:', error);

  const handleViewDetails = resource => {
    navigation.navigate('ResourcesDetail', { singleResource: resource });
  };

  const renderItem = ({ item }) => (
    <SingleResourceCard
      resource={item}
      onViewDetails={handleViewDetails}
      onToggleBookmark={toggleBookmark}
      loading={bookmarkLoading}
    />
  );

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveWidth(5),
        gap: responsiveHeight(3),
      }}
    >
      <Navbar title={`${route.params.title} Resources`} />

      <FlatList
        data={resources}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<ResourcesListHeader count={resources?.length || 0} />}
        contentContainerStyle={{ gap: responsiveHeight(2) }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={{ marginTop: responsiveHeight(20) }}>
            {loading && <GlobalLoading />}
            {error && <GlobalError />}
            {!loading && !error && (!resources || resources.length === 0) && (
              <GlobalEmpty />
            )}
          </View>
        }
        refreshing={loading}
        onRefresh={refetch}
      />
    </View>
  );
};

export default AllResourcesScreen;