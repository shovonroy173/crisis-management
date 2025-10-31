import { FlatList, View } from 'react-native';
import React, { useState } from 'react';
import SupervisorHistoryMeetingsList from '../components/SupervisorHistoryMeetingsList';
import { supervisorHistoryMeetingsData } from '../../assets/data/data';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SupervisorHistoryMeetingCard from '../components/SupervisorHistoryMeetingCard';
// import { useGetMyMeetingsHistoryQuery } from '../redux/slices/meetings/meetingsSlice';
import { useGetSupervisorMeetingsHistoryQuery } from '../redux/slices/meetings/supervisorMeetingsSlice';
import { transformMeetingData } from '../utils/trasformedMeetingData';
import GlobalLoading from '../components/GlobalLoading';
import GlobalError from '../components/GlobalError';
import GlobalEmpty from '../components/GlobalEmpty';

const SupervisorPastMeetingScreen = () => {
  const [meetings, setMeetings] = useState(supervisorHistoryMeetingsData);
  const {
    data: supervisorMeetingHistory,
    isLoading,
    isError,
    refetch,
  } = useGetSupervisorMeetingsHistoryQuery();

  console.log('LINE AT 21', supervisorMeetingHistory);

  const transformedMeetings =
    supervisorMeetingHistory?.data?.map(transformMeetingData) ||
    supervisorMeetingHistory?.map(transformMeetingData) ||
    [];

  const handleNotesChange = (meetingId, newNotes) => {
    setMeetings(prevMeetings =>
      prevMeetings.map(meeting =>
        meeting.id === meetingId ? { ...meeting, notes: newNotes } : meeting,
      ),
    );
  };

  const renderItem = ({ item, onNotesChange }) => (
    <SupervisorHistoryMeetingCard
      meeting={item}
      onNotesChange={handleNotesChange}
    />
  );
  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingHorizontal: responsiveWidth(5),
      }}
    >
      <FlatList
        data={transformedMeetings}
        renderItem={renderItem}
        // keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ gap: responsiveHeight(3) }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={{ marginTop: responsiveHeight(20) }}>
            {isLoading && <GlobalLoading />}
            {isError && <GlobalError />}
            {!isLoading && !isError && transformedMeetings.length === 0 && (
              <GlobalEmpty />
            )}
          </View>
        }
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </View>
  );
};

export default SupervisorPastMeetingScreen;
