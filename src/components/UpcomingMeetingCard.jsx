
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Video } from 'lucide-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const UpcomingMeetingCard = ({
  meeting,
  onJoinMeeting,
  onCancelMeeting,
  isCancelling,
}) => {
  // Check if meeting can be joined (only during meeting time)
  const canJoinMeeting = () => {
    if (meeting.status !== 'Booked') return false;

    // Get current time and meeting start time
    const now = new Date();
    const meetingStartTime = new Date(meeting.rawData.startTime);
    const meetingEndTime = new Date(meeting.rawData.endTime);

    // Allow joining if meeting has started but not ended yet
    return now >= meetingStartTime && now <= meetingEndTime;
  };

  // Check if meeting can be cancelled (only up to 30 minutes before start time)
  const canCancelMeeting = () => {
    if (meeting.status !== 'Booked') return false;

    // Get current time and meeting start time
    const now = new Date();
    const meetingStartTime = new Date(meeting.rawData.startTime);

    // Calculate time difference in milliseconds
    const timeDifference = meetingStartTime.getTime() - now.getTime();
    const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds

    // Can cancel only if there's more than 30 minutes until meeting start
    return timeDifference > thirtyMinutes;
  };

  const isJoinButtonEnabled = canJoinMeeting();
  const isCancelButtonEnabled = canCancelMeeting();

  const handleJoinPress = () => {
    if (isJoinButtonEnabled) {
      onJoinMeeting(meeting);
    }
  };

  const handleCancelPress = () => {
    if (isCancelButtonEnabled && !isCancelling) {
      onCancelMeeting(meeting);
    }
  };

  // Helper function to get cancel button text based on time
  const getCancelButtonText = () => {
    if (isCancelling) {
      return 'Cancelling...';
    }
    if (!isCancelButtonEnabled) {
      const now = new Date();
      const meetingStartTime = new Date(meeting.rawData.startTime);

      if (now >= meetingStartTime) {
        return 'Meeting Started';
      } else {
        return 'Cancellation Closed';
      }
    }
    return 'Cancel';
  };

  return (
    <View
      className="bg-white rounded-xl shadow-sm border border-gray-200"
      style={{
        padding: responsiveWidth(5),
        gap: responsiveHeight(1),
      }}
    >
      {/* Doctor Name */}
      <Text className="text-lg font-semibold text-gray-900">
        {meeting?.rawData?.supervisor?.fullName}
      </Text>

      {/* Date and Time */}
      <Text className="text-sm text-gray-500">
        {meeting.date}, {meeting.beginTime} - {meeting.endTime}
      </Text>

      {/* Status Badge */}
      <View
        className={`self-start rounded-full ${
          meeting.status === 'Booked' ? 'bg-green-500' : 'bg-amber-500'
        }`}
        style={{
          paddingVertical: responsiveWidth(1),
          paddingHorizontal: responsiveWidth(2),
        }}
      >
        <Text className="text-xs font-medium text-white">
          {meeting?.status}
        </Text>
      </View>

      {/* Join Button */}
      <TouchableOpacity
        className={`flex-row items-center justify-center rounded-lg mb-2 ${
          isJoinButtonEnabled ? 'bg-black' : 'bg-gray-300'
        }`}
        style={{
          padding: responsiveWidth(2),
          gap: responsiveWidth(2),
        }}
        onPress={handleJoinPress}
        disabled={!isJoinButtonEnabled}
      >
        <Video
          size={20}
          color={isJoinButtonEnabled ? '#FFFFFF' : '#6B7280'}
          style={{ marginRight: 8 }}
        />
        <Text
          className={`text-base font-medium ${
            isJoinButtonEnabled ? 'text-white' : 'text-gray-500'
          }`}
        >
          {isJoinButtonEnabled ? 'Join Zoom Meeting' : 'Join Unavailable'}
        </Text>
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity
        className={`
          rounded-lg items-center justify-center ${
            isCancelButtonEnabled && !isCancelling
              ? 'border border-red-500 bg-transparent'
              : 'bg-gray-300'
          }`}
        style={{
          padding: responsiveWidth(2),
        }}
        onPress={handleCancelPress}
        disabled={!isCancelButtonEnabled || isCancelling}
      >
        <Text
          className={`text-base font-medium ${
            isCancelButtonEnabled && !isCancelling
              ? 'text-red-500'
              : 'text-gray-500'
          }`}
        >
          {getCancelButtonText()}
        </Text>
      </TouchableOpacity>

      {/* Time Information */}
      <View className="mt-2">
        <Text className="text-xs text-gray-400 text-center">
          {isCancelButtonEnabled
            ? 'You can cancel this meeting up to 30 minutes before start time'
            : 'Cancellation is no longer available for this meeting'}
        </Text>
      </View>
    </View>
  );
};

export default UpcomingMeetingCard;
