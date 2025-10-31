import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Dot } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { convertDate } from '../utils/convertDate';

const MyCaseCard = ({ caseItem }) => {
  // console.log('caseItem', caseItem);
  const navigation = useNavigation();
  return (
    <Pressable
      className="bg-white rounded-lg p-4  shadow-sm border border-gray-200"
      //   onPress={() =>
      //     navigation.navigate('CaseDetails', { caseId: caseItem.caseId })
      //   }

      // onPress={() => navigation.navigate('Case_Details')}
      onPress={() =>
        navigation.navigate('Cases', {
          screen: 'Case_Details',
          params: { case: caseItem },
        })
      }
      style={{ gap: responsiveWidth(2) }}
    >
      <View className="flex-row justify-between items-start ">
        <Text className="text-lg font-semibold text-gray-800 text-wrap w-[65%]">
          #{caseItem?._id}- {caseItem?.title}
        </Text>
        <View
          className={` rounded-2xl bg-pink-50 flex-row items-center`}
          style={{
            paddingHorizontal: responsiveWidth(2),
          }}
        >
          <Dot color={'#FF69B4'} />
          <Text className="text-black text-xs font-medium">
            {caseItem?.status}
          </Text>
        </View>
      </View>

      <Text className="text-gray-600 ">{caseItem?.client?.fullName}</Text>

      <View
        className="flex-row items-center"
        style={{ gap: responsiveWidth(10) }}
      >
        <View>
          <Text className="text-xs text-gray-500">Start</Text>
          <Text className="text-sm font-medium text-gray-700">
             {convertDate(caseItem?.startDate)}
          </Text>
        </View>
        <View>
          <Text className="text-xs text-gray-500">End</Text>
          <Text className="text-sm font-medium text-gray-700">
             {convertDate(caseItem?.endDate)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MyCaseCard;
