// /* eslint-disable react-native/no-inline-styles */
// import { View, Text, Pressable, ScrollView } from 'react-native';
// import React, { useState } from 'react';
// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import Navbar from '../components/Navbar';
// import SystemCalendarModal from '../components/SystemCalendarModal';
// import TimeSlotInput from '../components/TimeSlotInput';
// import { Calendar } from 'lucide-react-native';
// import { useCreateMeetingBySupervisorMutation } from '../redux/slices/meetingSlice';
// import { useNavigation } from '@react-navigation/native';
// const AddCalendarScreen = () => {
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);

//   const [createMeetingBySupervisor] = useCreateMeetingBySupervisorMutation();

//   return (
//     <View
//       className="flex-1 bg-white"
//       style={{
//         padding: responsiveWidth(5),

//         gap: responsiveHeight(3),
//       }}
//     >
//       <Navbar title={'Add New Slot'} />
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           gap: responsiveHeight(3),
//         }}
//       >
//         <View className="gap-2">
//           <Text className="text-sm font-medium text-gray-700">Select Date</Text>
//           <Pressable
//             className="border border-zinc-300 rounded-lg "
//             style={{
//               padding: responsiveWidth(4),
//             }}
//             onPress={() => setModalVisible(true)}
//           >
//             <View className="flex-row items-center gap-3">
//               <Calendar size={20} color="#555" />
//               <Text className="text-black font-regular">
//                 {selectedDate && selectedDate}
//               </Text>
//             </View>
//           </Pressable>
//         </View>

//         <TimeSlotInput
//           label="Start Time"
//           value={startTime}
//           onChange={setStartTime}
//         />

//         <TimeSlotInput label="End Time" value={endTime} onChange={setEndTime} />

//         <View className="flex-row items-center justify-center ">
//           <View className="flex-row items-center justify-between w-full">
//             <Pressable
//               className="w-[48%] bg-neutral-200"
//               style={{
//                 padding: responsiveWidth(3),
//                 borderRadius: 8,
//                 alignItems: 'center',
//               }}
//               onPress={() => navigation.goBack()}
//             >
//               <Text
//                 className="text-black"
//                 style={{
//                   fontSize: responsiveFontSize(2),
//                   fontWeight: '800',
//                 }}
//               >
//                 ✖ Cancel
//               </Text>
//             </Pressable>
//             <Pressable
//               className="w-[48%] bg-black"
//               style={{
//                 padding: responsiveWidth(3),
//                 borderRadius: 8,
//                 alignItems: 'center',
//               }}
//               onPress={handleSaveSlot}
//             >
//               <Text
//                 className="text-white"
//                 style={{
//                   fontSize: responsiveFontSize(2),
//                   fontWeight: '800',
//                 }}
//               >
//                 ✔ Save Slot
//               </Text>
//             </Pressable>
//           </View>
//         </View>
//       </ScrollView>

//       <SystemCalendarModal
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         selectedDate={selectedDate}
//         onSelectDate={setSelectedDate}
//       />
//     </View>
//   );
// };

// export default AddCalendarScreen;

/* eslint-disable react-native/no-inline-styles */
// import { View, Text, Pressable, ScrollView, Alert } from 'react-native';
// import React, { useState } from 'react';
// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import Navbar from '../components/Navbar';
// import SystemCalendarModal from '../components/SystemCalendarModal';
// import TimeSlotInput from '../components/TimeSlotInput';
// import { Calendar } from 'lucide-react-native';
// import { useCreateMeetingBySupervisorMutation } from '../redux/slices/meetings/supervisorMeetingsSlice';
// import { useNavigation } from '@react-navigation/native';

// const AddCalendarScreen = ({route}) => {
//   console.log('====================================');
//   console.log('LINE AT 139', route);
//   console.log('====================================');
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const formatTime = date => {
//     if (!date) return 'Select time';
//     return date.toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true,
//     });
//   };

//   const [createMeetingBySupervisor] = useCreateMeetingBySupervisorMutation();
//   console.log('LIN EAT 146', formatTime(startTime), endTime);

//   // Function to validate and format the date
//   // const formatDateForBackend = date => {
//   //   if (!date) return null;

//   //   // If date is a string in format like "Oct 26, 2025", convert to "2025-10-26"
//   //   if (typeof date === 'string') {
//   //     const dateObj = new Date(date);
//   //     return dateObj.toISOString().split('T')[0];
//   //   }

//   //   // If date is a Date object
//   //   if (date instanceof Date) {
//   //     return date.toISOString().split('T')[0];
//   //   }

//   //   return date;
//   // };

//   const handleSaveSlot = async () => {
//     console.log('LINE AT 189');

//     // Validation
//     if (!selectedDate) {
//       Alert.alert('Error', 'Please select a date');
//       return;
//     }

//     if (!startTime) {
//       Alert.alert('Error', 'Please select start time');
//       return;
//     }

//     if (!endTime) {
//       Alert.alert('Error', 'Please select end time');
//       return;
//     }

//     // Convert times to 24-hour format
//     const formattedStartTime = formatTime(startTime); //convertTo24HourFormat(formatTime(startTime));
//     const formattedEndTime = formatTime(endTime); //convertTo24HourFormat(formatTime(endTime));

//     setIsLoading(true);

//     try {
//       // Prepare the data for API call in the expected format
//       const meetingData = {
//         date: selectedDate, // "2025-10-26"
//         startTime: formattedStartTime, // "18:00" for 6:00 PM
//         endTime: formattedEndTime, // "19:00" for 7:00 PM
//       };

//       console.log('Creating meeting with data:', meetingData);

//       // Make the API call
//       const response = await createMeetingBySupervisor(meetingData).unwrap();

//       console.log('Meeting created successfully:', response);

//       // Show success message
//       Alert.alert('Success', 'Time slot created successfully!', [
//         {
//           text: 'OK',
//           onPress: () => {
//             // Reset form and navigate back
//             setSelectedDate(null);
//             setStartTime(null);
//             setEndTime(null);
//             navigation.goBack();
//           },
//         },
//       ]);
//     } catch (error) {
//       console.error('Error creating meeting:', error);

//       // Handle different error scenarios
//       let errorMessage = 'Failed to create time slot. Please try again.';

//       if (error.data?.message) {
//         errorMessage = error.data.message;
//       } else if (error.status === 400) {
//         errorMessage = 'Invalid time slot data. Please check your inputs.';
//       } else if (error.status === 409) {
//         errorMessage = 'Time slot conflicts with an existing meeting.';
//       } else if (error.status === 401) {
//         errorMessage = 'Unauthorized. Please login again.';
//       }

//       Alert.alert('Error', errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Format the selected date for display
//   const formatSelectedDate = () => {
//     if (!selectedDate) return 'Select Date';

//     // If selectedDate is already a string, return it
//     if (typeof selectedDate === 'string') {
//       return selectedDate;
//     }

//     // If it's a Date object, format it
//     return selectedDate.toLocaleDateString('en-US', {
//       weekday: 'short',
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//     });
//   };

//   return (
//     <View
//       className="flex-1 bg-white"
//       style={{
//         padding: responsiveWidth(5),
//         gap: responsiveHeight(3),
//       }}
//     >
//       <Navbar title={route?.params?.title} />
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           gap: responsiveHeight(3),
//         }}
//       >
//         <View className="gap-2">
//           <Text className="text-sm font-medium text-gray-700">Select Date</Text>
//           <Pressable
//             className="border border-zinc-300 rounded-lg "
//             style={{
//               padding: responsiveWidth(4),
//             }}
//             onPress={() => setModalVisible(true)}
//           >
//             <View className="flex-row items-center gap-3">
//               <Calendar size={20} color="#555" />
//               <Text className="text-black font-regular">
//                 {formatSelectedDate()}
//               </Text>
//             </View>
//           </Pressable>
//         </View>

//         <TimeSlotInput
//           label="Start Time"
//           value={startTime}
//           onChange={setStartTime}
//         />

//         <TimeSlotInput label="End Time" value={endTime} onChange={setEndTime} />

//         {/* Debug info (remove in production) */}
//         {/* <View className="bg-gray-100 p-3 rounded-lg">
//           <Text className="text-xs text-gray-600">
//             Debug: {selectedDate && formatDateForBackend(selectedDate)} |
//             Start: {startTime && convertTo24HourFormat(startTime)} |
//             End: {endTime && convertTo24HourFormat(endTime)}
//           </Text>
//         </View> */}

//         <View className="flex-row items-center justify-center ">
//           <View className="flex-row items-center justify-between w-full">
//             <Pressable
//               className="w-[48%] bg-neutral-200"
//               style={{
//                 padding: responsiveWidth(3),
//                 borderRadius: 8,
//                 alignItems: 'center',
//               }}
//               onPress={() => navigation.goBack()}
//               disabled={isLoading}
//             >
//               <Text
//                 className="text-black"
//                 style={{
//                   fontSize: responsiveFontSize(2),
//                   fontWeight: '800',
//                 }}
//               >
//                 ✖ Cancel
//               </Text>
//             </Pressable>
//             <Pressable
//               className="w-[48%] bg-black disabled:bg-zinc-300"
//               style={{
//                 padding: responsiveWidth(3),
//                 borderRadius: 8,
//                 alignItems: 'center',
//                 opacity: isLoading ? 0.6 : 1,
//               }}
//               onPress={() => handleSaveSlot()}
//               disabled={isLoading}
//             >
//               <Text
//                 className="text-white"
//                 style={{
//                   fontSize: responsiveFontSize(2),
//                   fontWeight: '800',
//                 }}
//               >
//                 {isLoading ? 'Creating...' : '✔ Save Slot'}
//               </Text>
//             </Pressable>
//           </View>
//         </View>
//       </ScrollView>

//       <SystemCalendarModal
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         selectedDate={selectedDate}
//         onSelectDate={setSelectedDate}
//       />
//     </View>
//   );
// };

// export default AddCalendarScreen;

/* eslint-disable react-native/no-inline-styles */
import { View, Text, Pressable, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Navbar from '../components/Navbar';
import SystemCalendarModal from '../components/SystemCalendarModal';
import TimeSlotInput from '../components/TimeSlotInput';
import { Calendar } from 'lucide-react-native';
import {
  useCreateMeetingBySupervisorMutation,
  useUpdateMeetingBySupervisorMutation,
} from '../redux/slices/meetings/supervisorMeetingsSlice';
import { useNavigation } from '@react-navigation/native';

const AddCalendarScreen = ({ route }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isEditMode = route?.params?.title === 'Edit Slot';
  const meetingToEdit = route?.params?.meeting;

  const [createMeetingBySupervisor] = useCreateMeetingBySupervisorMutation();
  const [updateMeetingBySupervisor] = useUpdateMeetingBySupervisorMutation();

  console.log('Edit Mode:', isEditMode);
  console.log('Meeting to edit:', meetingToEdit);

  // Pre-fill form when in edit mode
  useEffect(() => {
    if (isEditMode && meetingToEdit) {
      // Set the date
      if (meetingToEdit.startTime) {
        const startDate = new Date(meetingToEdit.startTime);
        setSelectedDate(startDate);

        // Set start time
        setStartTime(startDate);

        // Set end time
        if (meetingToEdit.endTime) {
          setEndTime(new Date(meetingToEdit.endTime));
        }
      }
    }
  }, [isEditMode, meetingToEdit]);

  const formatTime = date => {
    if (!date) return 'Select time';
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  // Function to convert 12-hour format with AM/PM to 24-hour format
  const convertTo24HourFormat = timeString => {
    if (!timeString || timeString === 'Select time') return null;

    try {
      // Example timeString: "6:00 PM" or "11:30 AM"
      const [time, period] = timeString.split(' ');
      let [hours, minutes] = time.split(':');

      hours = parseInt(hours);
      minutes = parseInt(minutes || '0');

      if (period === 'PM' && hours !== 12) {
        hours += 12;
      } else if (period === 'AM' && hours === 12) {
        hours = 0;
      }

      // Format hours and minutes to 2 digits
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}`;
    } catch (error) {
      console.error('Error converting time:', error);
      return null;
    }
  };

  // Function to validate and format the date
  const formatDateForBackend = date => {
    if (!date) return null;

    // If date is a string in format like "Oct 26, 2025", convert to "2025-10-26"
    if (typeof date === 'string') {
      const dateObj = new Date(date);
      return dateObj.toISOString().split('T')[0];
    }

    // If date is a Date object
    if (date instanceof Date) {
      return date.toISOString().split('T')[0];
    }

    return date;
  };

  const handleSaveSlot = async () => {
    // Validation
    if (!selectedDate) {
      Alert.alert('Error', 'Please select a date');
      return;
    }

    if (!startTime) {
      Alert.alert('Error', 'Please select start time');
      return;
    }

    if (!endTime) {
      Alert.alert('Error', 'Please select end time');
      return;
    }

    // Convert times to 24-hour format
    const startTime24 = convertTo24HourFormat(formatTime(startTime));
    const endTime24 = convertTo24HourFormat(formatTime(endTime));

    if (!startTime24 || !endTime24) {
      Alert.alert('Error', 'Invalid time format');
      return;
    }

    // Format date for backend
    const formattedDate = formatDateForBackend(selectedDate);

    if (!formattedDate) {
      Alert.alert('Error', 'Invalid date format');
      return;
    }

    // Check if end time is after start time in 24-hour format
    const startDateTime = new Date(`${formattedDate}T${startTime24}`);
    const endDateTime = new Date(`${formattedDate}T${endTime24}`);

    if (endDateTime <= startDateTime) {
      Alert.alert('Error', 'End time must be after start time');
      return;
    }

    // Check if the time slot is in the future
    const now = new Date();
    if (startDateTime <= now) {
      Alert.alert('Error', 'Time slot must be in the future');
      return;
    }

    setIsLoading(true);

    try {
      // Prepare the data for API call in the expected format
      const meetingData = {
        date: formattedDate,
        startTime: startTime24,
        endTime: endTime24,
      };

      console.log(
        `${isEditMode ? 'Updating' : 'Creating'} meeting with data:`,
        meetingData,
      );

      let response;

      if (isEditMode && meetingToEdit?.id) {
        // Update existing meeting
        response = await updateMeetingBySupervisor({
          id: meetingToEdit.id,
          credentials: meetingData,
        }).unwrap();
        console.log('Meeting updated successfully:', response);
      } else {
        // Create new meeting
        response = await createMeetingBySupervisor(meetingData).unwrap();
        console.log('Meeting created successfully:', response);
      }

      // Show success message
      Alert.alert(
        'Success',
        `Time slot ${isEditMode ? 'updated' : 'created'} successfully!`,
        [
          {
            text: 'OK',
            onPress: () => {
              // Reset form and navigate back
              setSelectedDate(null);
              setStartTime(null);
              setEndTime(null);
              navigation.goBack();
            },
          },
        ],
      );
    } catch (error) {
      console.error(
        `Error ${isEditMode ? 'updating' : 'creating'} meeting:`,
        error,
      );

      // Handle different error scenarios
      let errorMessage = `Failed to ${
        isEditMode ? 'update' : 'create'
      } time slot. Please try again.`;

      if (error.data?.message) {
        errorMessage = error.data.message;
      } else if (error.status === 400) {
        errorMessage = 'Invalid time slot data. Please check your inputs.';
      } else if (error.status === 409) {
        errorMessage = 'Time slot conflicts with an existing meeting.';
      } else if (error.status === 401) {
        errorMessage = 'Unauthorized. Please login again.';
      } else if (error.status === 404 && isEditMode) {
        errorMessage = 'Meeting not found. It may have been deleted.';
      }

      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Format the selected date for display
  const formatSelectedDate = () => {
    if (!selectedDate) return 'Select Date';

    // If selectedDate is already a string, return it
    if (typeof selectedDate === 'string') {
      return selectedDate;
    }

    // If it's a Date object, format it
    return selectedDate.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getScreenTitle = () => {
    if (route?.params?.title) {
      return route.params.title;
    }
    return 'Add New Slot';
  };

  const getButtonText = () => {
    if (isLoading) {
      return isEditMode ? 'Updating...' : 'Creating...';
    }
    return isEditMode ? '✔ Update Slot' : '✔ Save Slot';
  };

  return (
    <View
      className="flex-1 bg-white"
      style={{
        padding: responsiveWidth(5),
        gap: responsiveHeight(3),
      }}
    >
      <Navbar title={getScreenTitle()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: responsiveHeight(3),
        }}
      >
        <View className="gap-2">
          <Text className="text-sm font-medium text-gray-700">Select Date</Text>
          <Pressable
            className="border border-zinc-300 rounded-lg "
            style={{
              padding: responsiveWidth(4),
            }}
            onPress={() => setModalVisible(true)}
            disabled={isLoading}
          >
            <View className="flex-row items-center gap-3">
              <Calendar size={20} color="#555" />
              <Text className="text-black font-regular">
                {formatSelectedDate()}
              </Text>
            </View>
          </Pressable>
        </View>

        <TimeSlotInput
          label="Start Time"
          value={startTime}
          onChange={setStartTime}
          disabled={isLoading}
        />

        <TimeSlotInput
          label="End Time"
          value={endTime}
          onChange={setEndTime}
          disabled={isLoading}
        />

        {/* Debug info (remove in production) */}
        <View className="bg-gray-100 p-3 rounded-lg">
          <Text className="text-xs text-gray-600">
            Mode: {isEditMode ? 'Edit' : 'Create'} | Date:{' '}
            {selectedDate && formatDateForBackend(selectedDate)} | Start:{' '}
            {startTime && convertTo24HourFormat(formatTime(startTime))} | End:{' '}
            {endTime && convertTo24HourFormat(formatTime(endTime))}
          </Text>
        </View>

        <View className="flex-row items-center justify-center ">
          <View className="flex-row items-center justify-between w-full">
            <Pressable
              className="w-[48%] bg-neutral-200"
              style={{
                padding: responsiveWidth(3),
                borderRadius: 8,
                alignItems: 'center',
                opacity: isLoading ? 0.6 : 1,
              }}
              onPress={() => navigation.goBack()}
              disabled={isLoading}
            >
              <Text
                className="text-black"
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '800',
                }}
              >
                ✖ Cancel
              </Text>
            </Pressable>
            <Pressable
              className="w-[48%] bg-black disabled:bg-zinc-300"
              style={{
                padding: responsiveWidth(3),
                borderRadius: 8,
                alignItems: 'center',
                opacity: isLoading ? 0.6 : 1,
              }}
              onPress={handleSaveSlot}
              disabled={isLoading}
            >
              <Text
                className="text-white"
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '800',
                }}
              >
                {getButtonText()}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <SystemCalendarModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
    </View>
  );
};

export default AddCalendarScreen;
