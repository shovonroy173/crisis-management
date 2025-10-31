import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
// import { myCasesData } from '../../assets/data/data';
import MyCaseCard from './MyCaseCard';

import CategoryFilter from './CategoryFilter';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import GlobalLoading from './GlobalLoading';
import GlobalError from './GlobalError';
import GlobalEmpty from './GlobalEmpty';

const MyCaseRenderContent = ({
  data: myCasesData,
  loading: isLoading,
  error: isError,
  refetch,
}) => {
  const [selectedStatus, setSelectedStatus] = useState('All');
  // console.log('LINE AT 11', myCasesData, isError, isLoading);

  // Get all unique categories and add "All" option
  const categories = ['All', ...new Set(myCasesData?.map(item => item.status))];

  // Filter cases based on selected Status
  const filteredCases =
    selectedStatus === 'All'
      ? myCasesData
      : myCasesData.filter(item => item.status === selectedStatus);

  return (
    <View className="flex-1">
      <FlatList
        data={filteredCases}
        renderItem={({ item }) => <MyCaseCard caseItem={item} />}
        keyExtractor={item => item?._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: responsiveHeight(3) }}
        ListHeaderComponent={
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedStatus}
            onCategorySelect={setSelectedStatus}
          />
        }
        ListEmptyComponent={
          <View>
            {isLoading && <GlobalLoading />}
            {isError && <GlobalError />}
            {(!myCasesData || myCasesData.length === 0) && <GlobalEmpty />}
          </View>
        }
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </View>
  );
};

export default MyCaseRenderContent;
