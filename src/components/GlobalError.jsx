import { View, Text } from 'react-native';

const GlobalError = ({ error, refetch }) => {
  return (
    <View className="flex-1 justify-center items-center py-10 px-4">
      <Text className="text-red-500 text-lg font-semibold text-center">
        Failed to load data
      </Text>
      <Text className="text-gray-600 mt-2 text-center">
        {error?.data?.message || 'Please check your connection and try again'}
      </Text>
      <Text
        className="text-blue-500 mt-4 text-base font-medium"
        onPress={refetch}
      >
        Tap to retry
      </Text>
    </View>
  );
};

export default GlobalError;
