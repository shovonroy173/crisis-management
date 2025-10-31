import React from 'react';
import { FlatList } from 'react-native';
import NotificationItem from './NotificationItem';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const NotificationsList = ({
  notifications,
  onNotificationPress,
  loading,
  error,
}) => {
  const renderItem = ({ item }) => (
    <NotificationItem notification={item} onPress={onNotificationPress} />
  );

  return (
    <FlatList
      data={notifications}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      className="bg-white"
      contentContainerStyle={{
        gap: responsiveHeight(2),
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default NotificationsList;
