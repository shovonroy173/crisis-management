/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Bell, Clock, Users, Video } from 'lucide-react-native';

import CaseCard from '../components/CaseCard';
import { useNavigation } from '@react-navigation/native';

import {
  useGetMyAvailableCasesQuery,
  useGetMyCasesQuery,
} from '../redux/slices/cases/casesSlice';
import { useGetMyMeetingsQuery } from '../redux/slices/meetings/meetingsSlice';
import { convertDate } from '../utils/convertDate';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation();
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
  const {
    data: myMeetingData,
    isLoading: myMeetingLoading,
    // isError: myMeetingError,
    // refetch: myMeetingRefetch,
  } = useGetMyMeetingsQuery();
  console.log(
    'LINE 17',
    // myCasesData,
    // availableCasesData,
    // myCasesLoading,
    // availableCasesLoading,
    // myCasesError,
    // availableCasesError,
    myMeetingData,
    // myMeetingData[0]?.st,
  );

  const handleMeetingJoin = async zoomMeetingLink => {
    console.log('LINE AT 71', zoomMeetingLink);

    try {
      if (zoomMeetingLink) {
        // const canOpen = await Linking.canOpenURL(zoomMeetingLink);

        if (zoomMeetingLink) {
          await Linking.openURL(zoomMeetingLink);
        } else {
          Alert.alert('Error', 'Cannot open meeting link');
        }
      } else {
        Alert.alert('Error', 'No meeting link available');
      }
    } catch (error) {
      console.error('Error joining meeting:', error);
      Alert.alert('Error', 'Failed to join meeting');
    }
  };
  const user = useSelector(state => state.auth.user);

  console.log('LIN EAT user', user);
  

  return (
    <View
      className="flex-1  items-center bg-white"
      style={{
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveWidth(5),
        gap: responsiveHeight(2),
      }}
    >
      <View className="flex-row items-center  justify-between w-full">
        <View
          className="flex-row items-center "
          style={{ gap: responsiveWidth(4) }}
        >
          <Image
            source={require('../../assets/images/user.jpg')}
            style={{
              width: responsiveWidth(13),
              height: responsiveWidth(13),
              borderRadius: 100,
              objectFit: 'cover',
            }}
          />
          <Text className="text-md font-Bold ">{user?.email.split('@')[0]}</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Notification')}>
          <Bell color={'#222'} size={22} />
        </Pressable>
      </View>
      <View className="w-full">
        <Text className="text-xl">Hi, {user?.email.split('@')[0]}</Text>
        <Text className="text-sm text-zinc-400">
          Here’ s your case overview for today
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ gap: responsiveHeight(2) }}
        className="w-full"
        showsVerticalScrollIndicator={false}
      >
        <CaseCard
          title="My Cases"
          subtitle="Active assigned cases"
          count={myCasesData?.pagination?.totalItems || 0}
          statusLabel="Active"
          buttonLabel="View my cases"
          loading={myCasesLoading}
          error={myCasesError}
          refetch={myCasesRefetch}
          onPress={() =>
            navigation.navigate('Cases', {
              screen: 'CasesMain',
              params: {
                type: 'my_cases',
                // data: myCasesData?.data || [],
              },
            })
          }
        />

        <CaseCard
          title="Available Cases"
          subtitle="Ready for assignment"
          count={availableCasesData?.pagination?.totalItems || 0}
          statusLabel="New"
          buttonLabel="View Available cases"
          loading={availableCasesLoading}
          error={availableCasesError}
          refetch={availableCasesRefetch}
          onPress={() =>
            navigation.navigate('Cases', {
              screen: 'CasesMain',
              params: {
                type: 'available_cases',
                // data: availableCasesData?.data || [],
              },
            })
          }
        />

        <View
          className="w-full border border-neutral-200 rounded-2xl bg-white "
          style={{ gap: responsiveHeight(3), padding: responsiveWidth(4) }}
        >
          <View className="w-full flex-row justify-between items-center">
            <View
              className="flex-row items-center"
              style={{ gap: responsiveWidth(3) }}
            >
              <View
                className="bg-pink-200 rounded-md"
                style={{ padding: responsiveWidth(1.5) }}
              >
                <Video color={'#222'} size={24} />
              </View>
              <View>
                <Text className="text-lg font-bold text-black">
                  Next Supervision
                </Text>
                <Text className="text-sm text-zinc-400">
                  Cade review session
                </Text>
              </View>
            </View>
          </View>

          <View style={{ gap: responsiveHeight(1) }}>
            <View>
              <Clock color="#222" size={20} />
              {myMeetingLoading ? (
                <Text className="text-sm text-zinc-400">Loading...</Text>
              ) : myMeetingData?.data.length === 0 ? (
                <Text>No meeting scheduled</Text>
              ) : (
                <Text className="text-sm text-zinc-400">
                  {convertDate(myMeetingData?.data[0]?.startTime)} -{' '}
                  {convertDate(myMeetingData?.data[0]?.endTime)}
                </Text>
              )}
            </View>

            <View>
              <Users color="#222" size={20} />
              <Text className="text-sm text-zinc-400">
                {myMeetingLoading ? (
                  'Loading...'
                ) : myMeetingData?.data.length === 0 ? (
                  <Text>No supervisor assigned</Text>
                ) : (
                  myMeetingData?.data[0]?.supervisor?.fullName
                )}
              </Text>
            </View>
          </View>

          <Pressable
            className="w-full bg-black"
            style={{
              padding: responsiveWidth(3),
              borderRadius: 8,
              alignItems: 'center',
            }}
            onPress={() =>
              handleMeetingJoin(
                myMeetingData &&
                  myMeetingData?.data[0]?.supervisor?.zoomMeetingLink,
              )
            }
          >
            <Text
              className="text-white"
              style={{ fontSize: responsiveFontSize(2), fontWeight: '800' }}
            >
              Join Zoom Meeting
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
