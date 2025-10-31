/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import MyCaseRenderContent from '../components/MyCaseRenderContent';
import AvailableCaseRenderContent from '../components/AvailableCaseRenderContent';
import {
  useGetMyAvailableCasesQuery,
  useGetMyCasesQuery,
} from '../redux/slices/cases/casesSlice';
const CasesScreen = ({ route }) => {
  console.log('LINE AT 8', route.params);
  // Default to 'my_cases
  const {
    data: myCasesData,
    isLoading: myCasesLoading,
    isError: myCasesError,
    refetch: myCasesRefetch,
  } = useGetMyCasesQuery();
  const {
    data: availableCasesData,
    isLoading: availableCasesLoading,
    isError: availableCasesError,
    refetch: availableCasesRefetch,
  } = useGetMyAvailableCasesQuery();
  console.log(
    'LINE 17',
    myCasesData,
    availableCasesData,
    myCasesLoading,
    availableCasesLoading,
    myCasesError,
    availableCasesError,
  );
  const { type } = route.params || {};
  const [activeTab, setActiveTab] = useState('my_cases');

  useEffect(() => {
    if (type) {
      setActiveTab(type);
    }
  }, [type]);

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveWidth(5),
        gap: responsiveHeight(3),
      }}
    >
      <Navbar title="My Cases" />

      <View className="flex-row justify-between">
        <Pressable activeOpacity={0.8} onPress={() => setActiveTab('my_cases')}>
          <View
            className={`${
              activeTab === 'my_cases' ? 'bg-pink-200' : 'bg-pink-50'
            }  justufy-center items-center rounded-md`}
            style={{
              padding: responsiveWidth(3),
              width: responsiveWidth(44),
              gap: responsiveHeight(1),
              opacity: activeTab === 'my_cases' ? 1 : 0.6,
            }}
          >
            <View
              className="bg-slate-400/30 rounded-full "
              style={{
                padding: responsiveWidth(2),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image source={require('../../assets/images/my_cases.png')} />
            </View>
            <Text className="text-sm font-regular">My Cases</Text>
          </View>
        </Pressable>

        <Pressable
          activeOpacity={0.8}
          onPress={() => setActiveTab('available_cases')}
        >
          <View
            className={`${
              activeTab === 'available_cases' ? 'bg-pink-200' : 'bg-pink-50'
            }  justufy-center items-center rounded-md`}
            style={{
              padding: responsiveWidth(4),
              width: responsiveWidth(44),
              opacity: activeTab === 'available_cases' ? 1 : 0.6,
            }}
          >
            <View
              className="bg-slate-400/30 rounded-full "
              style={{
                padding: responsiveWidth(2),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={require('../../assets/images/available_cases.png')}
              />
            </View>
            <Text className="text-sm font-regular">Available Cases</Text>
          </View>
        </Pressable>
      </View>
      {activeTab === 'my_cases' ? (
        <MyCaseRenderContent
          data={myCasesData?.data}
          loading={myCasesLoading}
          error={myCasesError}
          refetch={myCasesRefetch}
        />
      ) : (
        <AvailableCaseRenderContent
          data={availableCasesData?.data}
          loading={availableCasesLoading}
          error={availableCasesError}
          refetch={availableCasesRefetch}
        />
      )}
    </View>
  );
};

export default CasesScreen;
