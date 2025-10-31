import { View, Text } from 'react-native';
import React from 'react';

const ErrorText = ({ error }) => {
  return (
    <View>
      <Text className="text-red-500 font-medium">{error?.root?.message}</Text>
    </View>
  );
};

export default ErrorText;
