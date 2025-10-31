import React from 'react';
import { FlatList } from 'react-native';
import SupervisorMeetingCard from './SupervisorMeetingCard';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const MeetingsList = ({ meetings, onJoinMeeting }) => {
  const renderItem = ({ item }) => (
    <SupervisorMeetingCard meeting={item} onJoinMeeting={onJoinMeeting} />
  );

  return (
    <FlatList
      data={meetings}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ gap: responsiveHeight(3) }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MeetingsList;
