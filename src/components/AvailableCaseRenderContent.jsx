import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
// import { availableCasesData } from '../../assets/data/data';
import AvailableCaseCard from './AvailableCaseCard';

import CategoryFilter from './CategoryFilter';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import GlobalLoading from './GlobalLoading';
import GlobalError from './GlobalError';
import GlobalEmpty from './GlobalEmpty';

const AvailableCaseRenderContent = ({
  data: availableCasesData,
  loading: isLoading,
  error: isError,
  refetch,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  console.log('LINE AT 20', availableCasesData);

  // Get all unique categories and add "All" option
  const categories = [
    'All',
    ...new Set(availableCasesData?.map(item => item.status)),
  ];

  // Filter cases based on selected category
  const filteredCases =
    selectedCategory === 'All'
      ? availableCasesData
      : availableCasesData.filter(item => item.status === selectedCategory);

  return (
    <View className="flex-1">
      <FlatList
        data={filteredCases}
        renderItem={({ item }) => <AvailableCaseCard caseItem={item} />}
        keyExtractor={item => item?._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: responsiveHeight(3) }}
        ListHeaderComponent={
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        }
        ListEmptyComponent={
          <View>
            {isLoading && <GlobalLoading />}
            {isError && <GlobalError />}
            {(!availableCasesData || availableCasesData.length === 0) && (
              <GlobalEmpty />
            )}
          </View>
        }
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </View>
  );
};

export default AvailableCaseRenderContent;
