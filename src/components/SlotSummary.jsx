// import React from 'react';
// import { View, Text } from 'react-native';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';

// const SlotSummary = ({ totalAvailable, booked, available , loading}) => {
//   return (
//     <View
//       className="bg-white rounded-2xl  shadow-sm border border-gray-100"
//       style={{
//         padding: responsiveWidth(4),
//         gap: responsiveHeight(1),
//       }}
//     >
//       {/* Title */}
//       <Text className="text-lg font-semibold text-gray-900 ">Slot Summary</Text>

//       {/* Total Available */}
//       <View className="items-center ">
//         <Text className="text-5xl font-bold text-gray-900 ">
//           {totalAvailable}
//         </Text>
//         <Text className="text-base font-medium text-gray-900">Available</Text>
//       </View>

//       {/* Booked and Available Cards */}
//       <View className="flex-row"
//       style={{
//         gap: responsiveWidth(2)
//       }}
//       >
//         {/* Booked Card */}
//         <View className="flex-1 bg-green-50 rounded-2xl p-4 items-center">
//           <Text className="text-3xl font-bold text-green-500 ">{booked}</Text>
//           <Text className="text-sm font-medium text-green-500">Booked</Text>
//         </View>

//         {/* Available Card */}
//         <View className="flex-1 bg-blue-50 rounded-2xl p-4 items-center">
//           <Text className="text-3xl font-bold text-blue-500 ">{available}</Text>
//           <Text className="text-sm font-medium text-blue-500">Available</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default SlotSummary;


import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const SlotSummary = ({ totalAvailable, booked, available, loading }) => {
  if (loading) {
    return (
      <View
        className="bg-white rounded-2xl shadow-sm border border-gray-100 items-center justify-center"
        style={{
          padding: responsiveWidth(4),
          height: responsiveHeight(25),
          gap: responsiveHeight(2),
        }}
      >
        <ActivityIndicator size="large" color="#000" />
        <Text className="text-base font-medium text-gray-500">
          Loading slot summary...
        </Text>
      </View>
    );
  }

  return (
    <View
      className="bg-white rounded-2xl shadow-sm border border-gray-100"
      style={{
        padding: responsiveWidth(4),
        gap: responsiveHeight(1),
      }}
    >
      {/* Title */}
      <Text className="text-lg font-semibold text-gray-900">Slot Summary</Text>

      {/* Total Available */}
      <View className="items-center">
        <Text className="text-5xl font-bold text-gray-900">
          {totalAvailable}
        </Text>
        <Text className="text-base font-medium text-gray-900">Available</Text>
      </View>

      {/* Booked and Available Cards */}
      <View 
        className="flex-row"
        style={{
          gap: responsiveWidth(2)
        }}
      >
        {/* Booked Card */}
        <View className="flex-1 bg-green-50 rounded-2xl p-4 items-center">
          <Text className="text-3xl font-bold text-green-500">{booked}</Text>
          <Text className="text-sm font-medium text-green-500">Booked</Text>
        </View>

        {/* Available Card */}
        <View className="flex-1 bg-blue-50 rounded-2xl p-4 items-center">
          <Text className="text-3xl font-bold text-blue-500">{available}</Text>
          <Text className="text-sm font-medium text-blue-500">Available</Text>
        </View>
      </View>
    </View>
  );
};

export default SlotSummary;