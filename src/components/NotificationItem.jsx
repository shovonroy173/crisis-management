import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Lock,
  Briefcase,
  Calendar,
  Binoculars,
  Bell,
} from 'lucide-react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { convertDate } from '../utils/convertDate';

const NotificationItem = ({ notification, onPress }) => {
  const getIcon = type => {
    const iconProps = { size: 20, color: '#EC4899' };

    switch (type) {
      case 'password':
        return <Lock {...iconProps} />;
      case 'case':
        return <Briefcase {...iconProps} />;
      case 'meeting':
        return <Calendar {...iconProps} />;
      case 'resource':
        return <Binoculars {...iconProps} />;
      default:
        return <Bell {...iconProps} />;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => onPress(notification)}
      className="flex-row gap-2 items-center bg-white  border-b border-gray-100"
      activeOpacity={0.7}
      style={{ padding: responsiveWidth(2) }}
    >
      {/* Icon Container */}
      <View className="rounded-full bg-pink-100 items-center justify-center mr-3">
        {getIcon(notification.type)}
      </View>

      {/* Content */}
      <View className="flex-1">
        <Text className="text-base font-semibold text-gray-900 ">
          {notification?.title}
        </Text>
        <Text className="text-sm text-gray-500">
          {notification?.body}
        </Text>
      </View>

      {/* Timestamp */}
      <Text className="text-sm text-gray-500 ">
        {convertDate(notification.time)}
      </Text>
    </TouchableOpacity>
  );
};

export default NotificationItem;
