import { FlatList, View } from 'react-native';
import React from 'react';
// import SupervisorMeetingsList from '../components/SupervisorMeetingList';
// import { supervisorUpcomingMeetingsData } from '../../assets/data/data';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useGetSupervisorMeetingsQuery } from '../redux/slices/meetings/meetingsSlice';
import SupervisorMeetingCard from '../components/SupervisorMeetingCard';
import { transformMeetingData } from '../utils/trasformedMeetingData';
import GlobalLoading from '../components/GlobalLoading';
import GlobalError from '../components/GlobalError';
import GlobalEmpty from '../components/GlobalEmpty';

const SupervisorUpcomingMeetingScreen = () => {
  const {
    data: supervisorMeeting,
    isLoading,
    isError,
    refetch,
  } = useGetSupervisorMeetingsQuery();
  const handleJoinMeeting = meeting => {
    console.log('Joining meeting:', meeting);
    // Add your Zoom meeting join logic here
    // Example: Linking.openURL(meeting.zoomUrl);
  };

  const transformedMeetings =
    supervisorMeeting?.data?.meetings?.map(transformMeetingData) ||
    supervisorMeeting?.map(transformMeetingData) ||
    [];

  console.log('LINE AT 22', supervisorMeeting, transformedMeetings);
  const renderItem = ({ item, onJoinMeeting }) => (
    <SupervisorMeetingCard meeting={item} onJoinMeeting={onJoinMeeting} />
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

export default SupervisorUpcomingMeetingScreen;
