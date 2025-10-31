import React from 'react';
import { FlatList } from 'react-native';
import SupervisorHistoryMeetingCard from './SupervisorHistoryMeetingCard';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const SupervisorHistoryMeetingsList = ({ meetings, onNotesChange }) => {
  const renderItem = ({ item }) => (
    <SupervisorHistoryMeetingCard
      meeting={item}
      onNotesChange={onNotesChange}
    />
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

export default SupervisorHistoryMeetingsList;
