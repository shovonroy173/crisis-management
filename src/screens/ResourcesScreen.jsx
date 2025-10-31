import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  // countryOptions,
  // resourcesData,
  // statusOptions,
} from '../../assets/data/data';

import Navbar from '../components/Navbar';
import ResourceCard from '../components/ResourceCard';
import Dropdown from '../components/Dropdown';
import { useNavigation } from '@react-navigation/native';
// import { useGetResourcesQuery } from '../redux/slices/resources/resourcesSlice';
import { groupResourcesByCategory } from '../utils/groupResourcesByCategory';
import { getUniqueCategories } from '../utils/getUniqueCategories';

import GlobalError from '../components/GlobalError';
import GlobalEmpty from '../components/GlobalEmpty';
import GlobalLoading from '../components/GlobalLoading';
import { useAllResources } from '../hooks/useAllResources';
import {
  useGetCategoriesQuery,
  useGetLocationsQuery,
} from '../redux/slices/authSlice';

const ResourcesScreen = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const navigation = useNavigation();

  // const { data, isLoading, isError, refetch } = useGetResourcesQuery();
  const { data, isLoading, isError, refetch } = useAllResources({
    category: selectedValue,
    location: selectedUser,
  });
  const {
    data: categories,
    // isLoading,
    // isError,
  } = useGetCategoriesQuery();

  const {
    data: locations,
    // isLoading,
    // isError,
  } = useGetLocationsQuery();

  const transformedData = groupResourcesByCategory(data && data);
  const uniqueCategories = getUniqueCategories(
    categories?.data && categories?.data,
  );

  const uniqueLocations = getUniqueCategories(
    locations?.data && locations?.data,
  );

  console.log('LINE AT 38', uniqueCategories, uniqueLocations, locations);

  console.log(
    'LINE AT 24',
    // data,
    // isLoading,
    // isError,
    transformedData,
    categories,
  );

  const handleStatusChange = (value, item) => {
    // console.log('Selected status:', value, item);
    setSelectedValue(value);
  };

  const handleResourcePress = resource => {
    // console.log(`Navigating to ${resource.title}`);
    // Add your navigation logic here
    navigation.navigate('Resources', {
      screen: 'AllResources',
      params: {
        item: resource,
        title: resource.title,
      },
    });
  };

  const renderItem = ({ item }) => (
    <ResourceCard resource={item} onPress={handleResourcePress} />
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
      <Navbar title="Resources" />

      <FlatList
        data={transformedData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ gap: responsiveHeight(3) }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View
            style={{
              gap: responsiveHeight(3),
            }}
          >
            <Text className="font-bold text-lg text-black">Filters</Text>

            <Dropdown
              data={uniqueCategories}
              selectedValue={selectedValue}
              onValueChange={handleStatusChange}
              placeholder="Select category"
              label="Category"
            />

            <Dropdown
              data={uniqueLocations}
              selectedValue={selectedUser}
              onValueChange={setSelectedUser}
              placeholder="Select location"
              searchable={true}
              searchPlaceholder="Type to search locations..."
              emptySearchText="No locations found matching your search"
              label="Location"
            />

            <Text className="font-bold text-lg text-black">Categories</Text>
          </View>
        }
        ListEmptyComponent={
          <View>
            {isLoading && <GlobalLoading />}
            {isError && <GlobalError />}
            {data?.length === 0 && <GlobalEmpty />}
          </View>
        }
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </View>
  );
};

export default ResourcesScreen;
