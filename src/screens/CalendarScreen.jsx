/* eslint-disable react-native/no-inline-styles */
import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Navbar from '../components/Navbar';

import SystemCalendarModal from '../components/SystemCalendarModal';
import CancellationWarningModal from '../components/CancellationWarningModal';
import TimeSlotsList from '../components/TimeSlotsList';
// import { timeSlotsData } from '../../assets/data/data';
import { Plus } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useGetSupervisorMeetingsQuery } from '../redux/slices/meetings/meetingsSlice';
import { transformMeetingData } from '../utils/trasformedMeetingData';
const CalendarScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const {
    data: supervisorMeeting,
    isLoading,
    isError,
    refetch,
  } = useGetSupervisorMeetingsQuery();
  const transformedMeetings =
    supervisorMeeting?.data?.meetings?.map(transformMeetingData) ||
    supervisorMeeting?.map(transformMeetingData) ||
    [];

  console.log('LINE AT 42', supervisorMeeting, transformedMeetings);

  const navigation = useNavigation();
  const handleEdit = slot => {
    console.log('Edit slot:', slot);
    navigation.navigate('Calendar', {
      screen: 'AddCalendar',
      params: { title: 'Edit Slot', meeting: slot },
    });
    // Navigate to edit screen or show modal
  };

  const handleDelete = slot => {
    console.log('Delete slot:', slot);
    // Show confirmation and delete
    setShowWarning(true);
  };
  const handleKeepMeeting = () => {
    setShowWarning(false);
    console.log('Meeting kept');
  };

  const handleDeleteMeeting = () => {
    setShowWarning(false);
    console.log('Meeting deleted');
    // Add your delete logic here
  };
  return (
    <View
      className="flex-1 bg-white"
      style={{
        padding: responsiveWidth(5),

        gap: responsiveHeight(3),
      }}
    >
      <Navbar title={'Calendar Management'} />

      {/* <Pressable
        className="border border-zinc-300 rounded-lg items-center"
        style={{
          padding: responsiveWidth(4),
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-black font-semibold">
          {selectedDate ? `Selected: ${selectedDate}` : 'Calendar'}
        </Text>
      </Pressable> */}

      <TimeSlotsList
        slots={transformedMeetings}
        onEdit={handleEdit}
        onDelete={handleDelete}
        loading={isLoading}
        error={isError}
        refetch={refetch}
      />
      <Pressable
        className="w-full bg-black flex-row justify-center"
        style={{
          padding: responsiveWidth(3),
          borderRadius: 8,
          alignItems: 'center',
          gap: responsiveWidth(2),
        }}
        onPress={() => {
          navigation.navigate('Calendar', {
            screen: 'AddCalendar',
            params: { title: 'Add New Slot' },
          });
        }}
      >
        <Plus color="white" size={20} />
        <Text
          className="text-white"
          style={{ fontSize: responsiveFontSize(2), fontWeight: '800' }}
        >
          Add New Slot
        </Text>
      </Pressable>
      <SystemCalendarModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <CancellationWarningModal
        visible={showWarning}
        onKeep={handleKeepMeeting}
        onDelete={handleDeleteMeeting}
      />
    </View>
  );
};

export default CalendarScreen;
