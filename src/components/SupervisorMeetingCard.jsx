// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Calendar, User, Video, CheckCircle } from 'lucide-react-native';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';

// const SupervisorMeetingCard = ({ meeting, onJoinMeeting }) => {
//   const isActive = meeting.status === 'active';
//   //   const isScheduled = meeting.status === 'scheduled';
//   console.log('LINE AT 9', meeting);

//   return (
//     <View
//       className="w-full bg-white rounded-2xl shadow-sm border border-gray-100"
//       style={{
//         padding: responsiveWidth(4),
//         gap: responsiveHeight(2),
//       }}
//     >
//       {/* Header - Date and Status Indicator */}
//       <View className="flex-row items-start justify-between">
//         <View className="flex-row items-center w-2/3">
//           <View className=" rounded-xl bg-pink-100 items-center justify-center mr-3">
//             <Calendar size={20} color="#EC4899" />
//           </View>
//           <Text className="text-base font-semibold text-gray-900">
//             {meeting?.date} | {meeting?.beginTime} - {meeting?.endTime}
//           </Text>
//         </View>

//         {/* Status Dot */}
//         <View
//           className={`w-3 h-3 rounded-full ${
//             meeting?.available ? 'bg-green-500' : 'bg-orange-500'
//           }`}
//         />
//       </View>
//       <Text className="text-base font-semibold text-gray-900">
//         Duration : {meeting?.duration}
//       </Text>
//       {/* Counselor Name */}
//       <View className="flex-row items-center ">
//         <User size={16} color="#6B7280" />
//         <Text className="text-sm text-gray-600 ml-2">
//           {meeting.rawData?.bookedBy?.fullName || 'N/A'}
//         </Text>
//       </View>

//       {/* Action Button */}
//       {meeting?.available ? (
//         // <TouchableOpacity
//         //   onPress={() => onJoinMeeting(meeting)}
//         //   className="bg-black rounded-xl py-3 flex-row items-center justify-center gap-2"
//         //   activeOpacity={0.8}
//         // >
//         //   <Video size={20} color="#FFFFFF" />
//         //   <Text className="text-white font-medium text-base ">
//         //     Join Zoom Meeting
//         //   </Text>
//         // </TouchableOpacity>

//         <View className="bg-gray-200 rounded-xl py-3 flex-row items-center justify-center">
//           {/* <CheckCircle size={20} color="#6B7280" /> */}
//           <Text className="text-gray-700 font-medium text-base 2">
//             Not Scheduled
//           </Text>
//         </View>
//       ) : (
//         <View className="bg-gray-200 rounded-xl py-3 flex-row items-center justify-center">
//           <CheckCircle size={20} color="#6B7280" />
//           <Text className="text-gray-700 font-medium text-base 2">
//             Scheduled
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default SupervisorMeetingCard;




import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Calendar, User, Video, CheckCircle, Clock } from 'lucide-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Linking } from 'react-native';

const SupervisorMeetingCard = ({ meeting, onJoinMeeting }) => {
  const [canJoinMeeting, setCanJoinMeeting] = useState(false);
  const [timeUntilMeeting, setTimeUntilMeeting] = useState('');

  useEffect(() => {
    const checkMeetingTime = () => {
      if (!meeting?.rawData?.startTime) {
        setCanJoinMeeting(false);
        return;
      }

      const now = new Date();
      const meetingStartTime = new Date(meeting.rawData.startTime);
      const meetingEndTime = new Date(meeting.rawData.endTime);

      // Calculate time difference in milliseconds
      const timeDifference = meetingStartTime.getTime() - now.getTime();
      
      // Meeting can be joined if:
      // 1. Current time is after or equal to start time
      // 2. Current time is before end time
      const canJoin = now >= meetingStartTime && now <= meetingEndTime;
      setCanJoinMeeting(canJoin);

      // Calculate time until meeting starts
      if (now < meetingStartTime) {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        
        if (hours > 0) {
          setTimeUntilMeeting(`Starts in ${hours}h ${minutes}m`);
        } else if (minutes > 0) {
          setTimeUntilMeeting(`Starts in ${minutes}m`);
        } else {
          setTimeUntilMeeting('Starting soon');
        }
      } else if (now > meetingEndTime) {
        setTimeUntilMeeting('Meeting ended');
      } else {
        setTimeUntilMeeting('Meeting in progress');
      }
    };

    // Check immediately
    checkMeetingTime();

    // Update every minute
    const interval = setInterval(checkMeetingTime, 60000);

    return () => clearInterval(interval);
  }, [meeting]);

  const handleJoinMeeting = async () => {
    if (!canJoinMeeting) {
      Alert.alert('Cannot Join', 'Meeting is not available to join yet.');
      return;
    }

    const zoomLink = meeting.rawData?.supervisor?.zoomMeetingLink;
    
    if (!zoomLink) {
      Alert.alert('Error', 'No meeting link available');
      return;
    }

    try {
      const supported = await Linking.canOpenURL(zoomLink);
      
      if (supported) {
        await Linking.openURL(zoomLink);
      } else {
        Alert.alert('Error', 'Cannot open meeting link');
      }
    } catch (error) {
      console.error('Error joining meeting:', error);
      Alert.alert('Error', 'Failed to join meeting');
    }
  };

  const getStatusColor = () => {
    if (!meeting?.available) return 'bg-orange-500'; // Scheduled but not started
    if (canJoinMeeting) return 'bg-green-500'; // Can join now
    return 'bg-gray-400'; // Not available or ended
  };

  const getStatusText = () => {
    if (!meeting?.available) return 'Scheduled';
    if (canJoinMeeting) return 'Live';
    return 'Upcoming';
  };

  return (
    <View
      className="w-full bg-white rounded-2xl shadow-sm border border-gray-100"
      style={{
        padding: responsiveWidth(4),
        gap: responsiveHeight(2),
      }}
    >
      {/* Header - Date and Status Indicator */}
      <View className="flex-row items-start justify-between">
        <View className="flex-row items-center w-2/3">
          <View className="rounded-xl bg-pink-100 items-center justify-center mr-3 p-2">
            <Calendar size={20} color="#EC4899" />
          </View>
          <View>
            <Text className="text-base font-semibold text-gray-900">
              {meeting?.date}
            </Text>
            <Text className="text-sm text-gray-600">
              {meeting?.beginTime} - {meeting?.endTime}
            </Text>
          </View>
        </View>

        {/* Status Dot and Text */}
        <View className="items-end">
          <View className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
          <Text className="text-xs text-gray-500 mt-1">{getStatusText()}</Text>
        </View>
      </View>

      {/* Duration and Time Info */}
      <Text className="text-sm font-medium text-gray-700">
        Duration: {meeting?.duration}
      </Text>

      {/* Time Until Meeting */}
      {timeUntilMeeting && (
        <View className="flex-row items-center">
          <Clock size={14} color="#6B7280" />
          <Text className="text-xs text-gray-600 ml-1">{timeUntilMeeting}</Text>
        </View>
      )}

      {/* Counselor Name */}
      {meeting.rawData?.bookedBy?.fullName && (
        <View className="flex-row items-center">
          <User size={16} color="#6B7280" />
          <Text className="text-sm text-gray-600 ml-2">
            With: {meeting.rawData.bookedBy.fullName}
          </Text>
        </View>
      )}

      {/* Action Button */}
      {!meeting?.available ? (
        // Scheduled meeting
        <View className="bg-orange-50 rounded-xl py-3 flex-row items-center justify-center">
          <CheckCircle size={20} color="#F97316" />
          <Text className="text-orange-700 font-medium text-base ml-2">
            Scheduled
          </Text>
        </View>
      ) : canJoinMeeting ? (
        // Can join meeting now
        <TouchableOpacity
          onPress={handleJoinMeeting}
          className="bg-green-500 rounded-xl py-3 flex-row items-center justify-center gap-2"
          activeOpacity={0.8}
        >
          <Video size={20} color="#FFFFFF" />
          <Text className="text-white font-medium text-base">
            Join Zoom Meeting
          </Text>
        </TouchableOpacity>
      ) : (
        // Meeting not available to join yet
        <View className="bg-gray-200 rounded-xl py-3 flex-row items-center justify-center">
          <Clock size={20} color="#6B7280" />
          <Text className="text-gray-700 font-medium text-base ml-2">
            {timeUntilMeeting || 'Not Available'}
          </Text>
        </View>
      )}
    </View>
  );
};

export default SupervisorMeetingCard;