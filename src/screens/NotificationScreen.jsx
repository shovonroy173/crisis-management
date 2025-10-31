import React from 'react';
import { View } from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Navbar from '../components/Navbar';
// import { notificationsData } from '../../assets/data/data';
import NotificationsList from '../components/NotificationsList';
import { useGetMyNotificationsQuery } from '../redux/slices/authSlice';
const NotificationScreen = ({ navigation }) => {
  const handleNotificationPress = notification => {
    // console.log('Notification pressed:', notification);
    // Handle navigation based on notification type
  };

  const {
    data: notificationsData,
    isLoading,
    isError,
  } = useGetMyNotificationsQuery();

  console.log('LINE AT 20', notificationsData, isLoading, isError);

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveWidth(5),
        gap: responsiveHeight(3),
      }}
    >
      {/* Header */}
      <Navbar title={'Notifications'} />

      <NotificationsList
        notifications={notificationsData?.data}
        onNotificationPress={handleNotificationPress}
        loading={isLoading}
        error={isError}
      />
    </View>
  );
};

export default NotificationScreen;
