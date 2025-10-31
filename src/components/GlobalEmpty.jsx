import { View, Text } from 'react-native';
import React from 'react';

const GlobalEmpty = () => {
  return (
    <View className="flex-1 justify-center items-center py-10 px-4">
      <Text className="text-gray-500 text-lg font-semibold text-center">
        No data found
      </Text>
      <Text className="text-gray-400 mt-2 text-center">
        There are no data available at the moment.
      </Text>
    </View>
  );
};

export default GlobalEmpty;
