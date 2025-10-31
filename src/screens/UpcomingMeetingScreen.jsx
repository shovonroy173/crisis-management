// import React from 'react';
// import { View, FlatList, Linking, Alert } from 'react-native';

// import UpcomingMeetingCard from '../components/UpcomingMeetingCard';
// // import { upcomingMeetingsData } from '../../assets/data/data';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import { useGetMyMeetingsQuery } from '../redux/slices/meetings/meetingsSlice';
// import GlobalLoading from '../components/GlobalLoading';
// import GlobalError from '../components/GlobalError';
// import GlobalEmpty from '../components/GlobalEmpty';
// import { transformMeetingData } from '../utils/trasformedMeetingData';
// import CancellationWarningModal from '../components/CancellationWarningModal';

// const UpcomingMeetingScreen = () => {
//   const {
//     data: myMeetings,
//     isLoading,
//     isError,
//     refetch,
//   } = useGetMyMeetingsQuery();

//   const transformedMeetings =
//     myMeetings?.data?.map(transformMeetingData) ||
//     myMeetings?.map(transformMeetingData) ||
//     [];

//   const handleJoinMeeting = async zoomMeetingLink => {
//     console.log('LINE AT 71', zoomMeetingLink);

//     try {
//       if (zoomMeetingLink) {
//         // const canOpen = await Linking.canOpenURL(zoomMeetingLink);

//         if (zoomMeetingLink) {
//           await Linking.openURL(zoomMeetingLink);
//         } else {
//           Alert.alert('Error', 'Cannot open meeting link');
//         }
//       } else {
//         Alert.alert('Error', 'No meeting link available');
//       }
//     } catch (error) {
//       console.error('Error joining meeting:', error);
//       Alert.alert('Error', 'Failed to join meeting');
//     }
//   };

//   const handleCancelMeeting = zoomMeetingLink => {
//     console.log(`Canceling meeting with ${zoomMeetingLink}`);
//     // Add your cancel meeting logic here
//   };

//   const renderMeetingCard = ({ item }) => (
//     <UpcomingMeetingCard
//       meeting={item}
//       onJoinMeeting={handleJoinMeeting}
//       onCancelMeeting={handleCancelMeeting}
//     />
//   );

//   console.log('Available Meetings:', myMeetings, transformedMeetings);

//   return (
//     <View
//       className="flex-1 bg-white"
//       style={{
//         paddingHorizontal: responsiveWidth(5),
//       }}
//     >
//       <FlatList
//         data={transformedMeetings}
//         renderItem={renderMeetingCard}
//         keyExtractor={item => item.id.toString()}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           gap: responsiveHeight(3),
//         }}
//         ListEmptyComponent={
//           <View>
//             {isLoading && <GlobalLoading />}
//             {isError && <GlobalError />}
//             {myMeetings?.data?.length === 0 && <GlobalEmpty />}
//           </View>
//         }
//         refreshing={isLoading}
//         onRefresh={refetch}
//       />

//       <CancellationWarningModal />
//     </View>
//   );
// };

// export default UpcomingMeetingScreen;

import React, { useState } from 'react';
import { View, FlatList, Linking, Alert } from 'react-native';

import UpcomingMeetingCard from '../components/UpcomingMeetingCard';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  useGetMyMeetingsQuery,
  useCancelMeetingMutation,
} from '../redux/slices/meetings/meetingsSlice';
import GlobalLoading from '../components/GlobalLoading';
import GlobalError from '../components/GlobalError';
import GlobalEmpty from '../components/GlobalEmpty';
import { transformMeetingData } from '../utils/trasformedMeetingData';
import CancellationWarningModal from '../components/CancellationWarningModal';

const UpcomingMeetingScreen = () => {
  const {
    data: myMeetings,
    isLoading,
    isError,
    refetch,
  } = useGetMyMeetingsQuery();

  const [cancelMeeting, { isLoading: isCancelling }] =
    useCancelMeetingMutation();

  // State for cancellation modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const transformedMeetings =
    myMeetings?.data?.map(transformMeetingData) ||
    myMeetings?.map(transformMeetingData) ||
    [];

  const handleJoinMeeting = async meeting => {
    // console.log('LINE AT 71', meeting.rawData?.supervisor?.zoomMeetingLink);

    try {
      const zoomMeetingLink = meeting.rawData?.supervisor?.zoomMeetingLink;

      if (zoomMeetingLink) {
        const canOpen = await Linking.canOpenURL(zoomMeetingLink);

        if (canOpen) {
          await Linking.openURL(zoomMeetingLink);
        } else {
          Alert.alert('Error', 'Cannot open meeting link');
        }
      } else {
        Alert.alert('Error', 'No meeting link available');
      }
    } catch (error) {
      console.error('Error joining meeting:', error);
      Alert.alert('Error', 'Failed to join meeting');
    }
  };

  const handleCancelMeeting = meeting => {
    // Show confirmation modal
    setSelectedMeeting(meeting);
    setIsModalVisible(true);
  };

  const confirmCancellation = async () => {
    if (!selectedMeeting) return;

    try {
      await cancelMeeting(selectedMeeting.id).unwrap();
      // console.log('Meeting cancelled successfully:', response);

      // Show success message
      Alert.alert('Success', 'Meeting has been cancelled successfully');

      // Refresh the meetings list
      refetch();
    } catch (error) {
      console.error('Cancellation error:', error);
      Alert.alert('Error', 'Failed to cancel meeting. Please try again.');
    } finally {
      // Close modal regardless of success/failure
      setIsModalVisible(false);
      setSelectedMeeting(null);
    }
  };

  const keepMeeting = () => {
    // Simply close the modal
    setIsModalVisible(false);
    setSelectedMeeting(null);
  };

  const renderMeetingCard = ({ item }) => (
    <UpcomingMeetingCard
      meeting={item}
      onJoinMeeting={() => handleJoinMeeting(item)}
      onCancelMeeting={() => handleCancelMeeting(item)}
      isCancelling={isCancelling}
    />
  );

  // console.log('Available Meetings:', myMeetings, transformedMeetings);

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingHorizontal: responsiveWidth(5),
      }}
    >
      <FlatList
        data={transformedMeetings}
        renderItem={renderMeetingCard}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: responsiveHeight(3),
          paddingVertical: responsiveHeight(2),
        }}
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

      <CancellationWarningModal
        visible={isModalVisible}
        onKeep={keepMeeting}
        onDelete={confirmCancellation}
      />
    </View>
  );
};

export default UpcomingMeetingScreen;
