import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Clock } from 'lucide-react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const TimeSlotCard = ({ slot, onEdit, onDelete }) => {
  const isBooked = slot.status === 'booked';
  //   const isAvailable = slot.status === 'available';

  return (
    <View
      className={`rounded-2xl ${isBooked ? 'bg-red-50' : 'bg-green-50'}`}
      style={{
        padding: responsiveWidth(3),
      }}
    >
      <View className="flex-row items-center justify-between gap-2">
        {/* Left Section - Time and Status */}
        <View
          className="flex-row items-center flex-1"
          style={{
            gap: responsiveWidth(2),
          }}
        >
          <Clock size={22} color={slot?.available ? '#EF4444' : '#10B981'} />

          <View className="flex-1">
            <Text className="text-base font-semibold text-gray-900 mb-1">
              {slot.date} | {slot.beginTime} - {slot.endTime}
            </Text>
            {slot?.available ? (
              <Text className="text-sm text-green-500">Available</Text>
            ) : (
              <Text className="text-sm text-red-500">
                Booked by {slot.bookedBy}
              </Text>
            )}
          </View>
        </View>

        {/* Right Section - Actions or Status Indicator */}
        {slot?.available ? (

           <View
            className="flex-row "
            style={{
              gap: responsiveWidth(2),
            }}
          >
            <TouchableOpacity
              onPress={() => onEdit(slot)}
              className="bg-black rounded-md "
              style={{
                paddingHorizontal: responsiveWidth(2),
                paddingVertical: responsiveWidth(1),
              }}
            >
              <Text className="text-white text-sm font-medium">Edit</Text>
            </TouchableOpacity>
           
          </View>
          
        ) : (
         <View className="w-3 h-3 rounded-full bg-red-500" />
        )}
      </View>
    </View>
  );
};

export default TimeSlotCard;
