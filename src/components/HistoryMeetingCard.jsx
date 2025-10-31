import { View, Text } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HistoryMeetingCard = ({ meeting }) => {
  return (
    <View
      className="bg-white rounded-xl  shadow-sm border border-gray-200 flex-1 flex-row justify-between items-end"
      style={{
        padding: responsiveWidth(5),
        gap: responsiveHeight(1),
      }}
    >
      {/* Date and Time */}
      <View
        className="w-2/3"
        style={{
          gap: responsiveHeight(1),
        }}
      >
        <Text className="text-md font-semibold text-gray-900">
          {meeting.date}, {meeting.time}
        </Text>

        <Text className="text-xs font-regular text-gray-500">
          {meeting.duration}
        </Text>

        <View className={`p-2 rounded-md self-start  bg-zinc-200`}>
          <Text className="text-sm font-medium ">
            {meeting.status ? '✔ Completed' : '✖ Canceled'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryMeetingCard;
