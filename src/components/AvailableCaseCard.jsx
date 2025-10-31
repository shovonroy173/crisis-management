import { View, Text, Pressable } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { MapPin } from 'lucide-react-native';
import { getCategoryIcon } from '../utils/getCategoryIcon';
import { useNavigation } from '@react-navigation/native';
import { convertDate } from '../utils/convertDate';
import { useApplyCaseMutation } from '../redux/slices/cases/casesSlice';

const AvailableCaseCard = ({ caseItem }) => {
  // console.log('LINE AT 7 ', caseItem);
  const navigation = useNavigation();
  const [applyCase, ] = useApplyCaseMutation();
  const handleApply = async id => {
    try {
      const response = await applyCase(id).unwrap();
      console.log('LINE AT 20', response);
    } catch (error) {
      console.error('Failed to apply for case:', error);
    }
  };
  return (
    <Pressable
      className="bg-white rounded-lg p-4  shadow-sm border border-gray-200"
      onPress={() =>
        navigation.navigate('Cases', {
          screen: 'Case_Details',
          params: { case: caseItem },
        })
      }
      style={{ gap: responsiveHeight(2) }}
    >
      <View className="flex-row justify-between items-start ">
        <Text className="text-lg font-semibold text-gray-800 text-wrap w-[70%]">
          #{caseItem._id} - {caseItem.title}
        </Text>
        <Pressable
          className={`${
            caseItem.assigned ? 'bg-pink-100' : 'bg-black'
          } rounded-md `}
          style={{
            paddingHorizontal: responsiveWidth(3),
            paddingVertical: responsiveWidth(1),
          }}
          onPress={() => handleApply(caseItem._id)}
        >
          <Text
            className={`${
              caseItem.assigned ? 'text-black' : 'text-white'
            }  font-medium text-center`}
          >
            {' '}
            {caseItem.assigned ? 'Assigned' : 'Apply'}{' '}
          </Text>
        </Pressable>
      </View>

      <Text className="text-gray-600  w-[70%]">{caseItem.description}</Text>

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

      <View
        className="flex-row items-center"
        style={{ gap: responsiveWidth(2) }}
      >
        <View
          className="flex-row items-center bg-neutral-200 px-2 py-1 rounded-md self-start"
          style={{ gap: responsiveWidth(1) }}
        >
          {getCategoryIcon(caseItem?.status)}
          <Text className="text-xs text-zinc-700">{caseItem?.status}</Text>
        </View>
        <View className="flex-row  w-[50%]" style={{ gap: responsiveWidth(1) }}>
          <MapPin color="#222" size={20} />
          <Text className="text-sm text-zinc-700 text-wrap ">
            {caseItem?.client?.address}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default AvailableCaseCard;
