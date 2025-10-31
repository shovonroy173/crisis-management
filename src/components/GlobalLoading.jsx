import { View, Text, ActivityIndicator } from 'react-native';

const GlobalLoading = () => {
  return (
    <View className="flex-1 justify-center items-center py-10">
      <ActivityIndicator size="large" color="#3B82F6" />
      <Text className="text-gray-600 mt-4 text-lg">Loading...</Text>
    </View>
  );
};

export default GlobalLoading;
