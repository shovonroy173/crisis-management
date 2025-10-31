import { View, Text } from 'react-native';

const ResourcesListHeader = ({ count }) => {
  return (
    <View className="flex-row items-center justify-between mb-4">
      <Text className="text-md font-semibold text-gray-900">
        Available Resources
      </Text>
      <Text className="text-sm text-gray-700">{count} found</Text>
    </View>
  );
};

export default ResourcesListHeader;
