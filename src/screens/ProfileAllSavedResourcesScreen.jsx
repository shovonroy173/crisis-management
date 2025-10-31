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
// import { foodResourcesData } from '../../assets/data/data';
import {
  // useAddBookmarkMutation,
  useGetMyBookmarkedResourcesQuery,
} from '../redux/slices/resources/resourcesSlice';
import GlobalLoading from '../components/GlobalLoading';
import GlobalError from '../components/GlobalError';
import GlobalEmpty from '../components/GlobalEmpty';
import { useAllResources } from '../hooks/useAllResources';

const ProfileAllResourcesScreen = ({ route }) => {
  const navigation = useNavigation();
  // const [resources, setResources] = useState(foodResourcesData);

  const { bookmarkLoading, toggleBookmark } = useAllResources();

  const {
    data: bookmarkedResourcesData,
    isLoading,
    isError,
    refetch,
  } = useGetMyBookmarkedResourcesQuery();

  console.log('LINE AT 10', route, bookmarkedResourcesData);
  const handleViewDetails = resource => {
    console.log('View details:', resource);
    // navigation.navigate('ResourcesMain', {
    //       screen: 'ResourcesDetail',
    //       params: { item: resource },
    //     })
    navigation.navigate('ProfileResourceDetail', { singleResource: resource });
  };

  // const handleToggleBookmark = resourceId => {
  //   // setResources(prevResources =>
  //   //   prevResources.map(resource =>
  //   //     resource.id === resourceId
  //   //       ? { ...resource, bookmarked: !resource.bookmarked }
  //   //       : resource,
  //   //   ),
  //   // );
  // };
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
      <Navbar title={`All Save Resources`} />
      {/* <Text>AllResourcesScreen</Text> */}
      <FlatList
        data={bookmarkedResourcesData?.data}
        renderItem={renderItem}
        // keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <ResourcesListHeader count={bookmarkedResourcesData?.data?.length} />
        }
        // contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View>
            {isLoading && <GlobalLoading />}
            {isError && <GlobalError />}
            {bookmarkedResourcesData?.data?.length === 0 && <GlobalEmpty />}
          </View>
        }
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </View>
  );
};

export default ProfileAllResourcesScreen;
