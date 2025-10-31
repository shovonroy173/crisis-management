import { Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategorySelect }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => onCategorySelect(item)}
      className={`px-4 py-2 rounded-full mx-1 border border-gray-300 ${
        selectedCategory === item ? 'bg-black' : 'bg-white'
      }`}
    >
      <Text
        className={`text-sm font-medium ${
          selectedCategory === item ? 'text-white' : 'text-gray-700'
        }`}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={item => item}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoryFilter;
