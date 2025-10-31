/* eslint-disable react-native/no-inline-styles */

import { View, Text, Pressable } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const AvailableMeetingCard = ({ meeting, onBookSlot, loading }) => {
  const getStatusColor = status => {
    switch (status) {
      case 'Available':
        return '#10B981'; // Green
      case 'Booked':
        return '#EF4444'; // Red
      case 'Pending':
        return '#F59E0B'; // Amber
      default:
        return '#6B7280'; // Gray
    }
  };

  const getStatusText = status => {
    switch (status) {
      case 'Available':
        return 'Available';
      case 'Booked':
        return 'Booked';
      case 'Pending':
        return 'Pending';
      default:
        return status;
    }
  };

  return (
    <View
      className="bg-white rounded-xl shadow-sm border border-gray-200  flex-row justify-between items-center"
      style={{
        padding: responsiveWidth(5),
        gap: responsiveHeight(1),
      }}
    >
      {/* Date and Time */}
      <View
        className="flex-1"
        style={{
          gap: responsiveHeight(1),
        }}
      >
        <Text className="text-md font-semibold text-gray-900">
          {meeting.date}
        </Text>

        <Text className="text-sm font-medium text-gray-700 ">
          {meeting.beginTime} - {meeting.endTime}
        </Text>

        <Text className="text-xs font-regular text-gray-500">
          Duration: {meeting.duration}
        </Text>

        <View className="self-start">
          <Text
            className="text-sm font-medium"
            style={{ color: getStatusColor(meeting.status) }}
          >
            {getStatusText(meeting.status)}
          </Text>
        </View>
      </View>

      <Pressable
        onPress={onBookSlot}
        disabled={loading || !meeting.available}
        className={`${
          meeting.available || loading ? 'bg-black' : 'bg-gray-300'
        } rounded-lg`}
        style={{
          paddingHorizontal: responsiveWidth(4),
          paddingVertical: responsiveHeight(1.5),
          minWidth: responsiveWidth(25),
          alignItems: 'center',
        }}
      >
        <Text
          className={`font-medium ${
            meeting.available ? 'text-white' : 'text-gray-500'
          }`}
        >
          {meeting.available ? 'Book Slot' : 'Unavailable'}
        </Text>
      </Pressable>
    </View>
  );
};

export default AvailableMeetingCard;
