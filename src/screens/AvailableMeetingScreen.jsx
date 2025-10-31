import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import { availableMeetingsData } from '../../assets/data/data';
import AvailableMeetingCard from '../components/AvailableMeetingCard';
import { transformMeetingData } from '../utils/trasformedMeetingData';

import {
  useAddBookslotMutation,
  useGetAvailableMeetingsQuery,
} from '../redux/slices/meetings/meetingsSlice';
import GlobalLoading from '../components/GlobalLoading';
import GlobalError from '../components/GlobalError';
import GlobalEmpty from '../components/GlobalEmpty';
const AvailableMeetingScreen = () => {
  const {
    data: availableMeetings,
    isLoading,
    isError,
    refetch,
  } = useGetAvailableMeetingsQuery();

  console.log('Available Meetings:', availableMeetings);

  const transformedMeetings =
    availableMeetings?.data?.map(transformMeetingData) ||
    availableMeetings?.map(transformMeetingData) ||
    [];

  const [addBookslot, { isLoading: isBooking }] = useAddBookslotMutation();
  const [bookingLoading, setBookingLoading] = useState(false);

  const handleBookSlot = async meetingId => {
    if (isBooking || bookingLoading) return;

    setBookingLoading(true);
    try {
      const response = await addBookslot(meetingId).unwrap();
      console.log('Booking successful for meeting ID:', response);
      refetch(); // Refresh the list after booking
    } catch (error) {
      console.log('Booking error:', error);
    } finally {
      setBookingLoading(false);
    }
  };
  
  const renderMeetingCard = ({ item }) => (
    <AvailableMeetingCard
      meeting={item}
      onBookSlot={() => handleBookSlot(item.id)}
      loading={isBooking || bookingLoading}
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
        renderItem={renderMeetingCard}
        // keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: responsiveHeight(3),
        }}
        ListEmptyComponent={
          <View>
            {isLoading && <GlobalLoading />}
            {isError && <GlobalError />}
            {availableMeetings?.data?.length === 0 && <GlobalEmpty />}
          </View>
        }
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </View>
  );
};

export default AvailableMeetingScreen;
