import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Bell, ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex-row items-center justify-between">
      <Pressable onPress={() => navigation.goBack()}>
        <ChevronLeft color={'#222'} size={22} />
      </Pressable>
      <Text className="text-lg font-bold">{title}</Text>
      <Pressable onPress={() => navigation.navigate('Notification')}>
        <Bell />
      </Pressable>
    </View>
  );
};

export default Navbar;
