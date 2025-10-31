import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Calendar, User } from 'lucide-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const SupervisorHistoryMeetingCard = ({ meeting, onNotesChange }) => {
  // const hasNotes = meeting.notes && meeting.notes.trim() !== '';
  const isCanceled = meeting.notes && meeting.notes.includes('Canceled');

  return (
    <View
      className="bg-white rounded-2xl  shadow-sm border border-gray-100"
      style={{
        padding: responsiveWidth(4),
        gap: responsiveHeight(2),
      }}
    >
      {/* Header - Date and Status */}
      <View className="flex-row items-start justify-between ">
        <View className="flex-row items-center flex-1 gap-2">
          <View
            className=" rounded-xl bg-pink-100 items-center justify-center "
            style={{
              padding: responsiveWidth(2),
            }}
          >
            <Calendar size={20} color="#EC4899" />
          </View>
          <Text className="text-base font-semibold text-gray-900">
            {meeting?.date} | {meeting?.beginTime} - {meeting?.endTime}
          </Text>
        </View>

        {/* Status Badge */}
        <View
          className={` rounded-lg ${
            meeting.available ? 'bg-red-50' : 'bg-gray-100'
          }`}
          style={{
            paddingHorizontal: responsiveWidth(2),
            paddingVertical: responsiveWidth(1),
          }}
        >
          <Text
            className={`text-xs font-medium ${
              meeting.available ? 'text-red-500' : 'text-gray-700'
            }`}
          >
            {meeting.status}
          </Text>
        </View>
      </View>

      {/* Counselor/Clinician Name */}
      <View className="flex-row items-center ">
        <User size={16} color="#6B7280" />
        <Text className="text-sm text-gray-600">{meeting.provider}</Text>
      </View>

      {/* Notes Section */}
      {/* <View>
        <Text className="text-sm font-medium text-gray-700 mb-1">
          Notes/Feedback (Optional)
        </Text>
        <View className="bg-gray-100 rounded-xl px-4 ">
          <TextInput
          value={meeting.notes}
          onChangeText={(text) => onNotesChange(meeting.id, text)}
          placeholder="No Notes added"
          placeholderTextColor="#9CA3AF"
          // multiline
          // numberOfLines={3}
          textAlignVertical="top"
          className={`bg-gray-100 rounded-xl px-4 py-3 text-sm ${
            isCanceled ? 'text-red-500' : 'text-gray-900'
          }`}
          editable={!isCanceled}
        />
        </View>
      </View> */}
    </View>
  );
};

export default SupervisorHistoryMeetingCard;
