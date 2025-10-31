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
import { Bell, CalendarPlus2, Clock, Users, Video } from 'lucide-react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import { slotData } from '../../assets/data/data';

import SlotSummary from '../components/SlotSummary';
import {
  useGetMyMeetingsQuery,
  useGetSupervisorMeetingsQuery,
} from '../redux/slices/meetings/meetingsSlice';
import { convertDate } from '../utils/convertDate';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const SupervisorHomeScreen = () => {
  const navigation = useNavigation();
  const {
    data: myMeetingData,
    // isLoading: myMeetingLoading,
    // isError: myMeetingError,
    // refetch: myMeetingRefetch,
  } = useGetMyMeetingsQuery();

  const {
    data: supervisorMeeting,
    isLoading: supervisorMeetingLoading,
    // isError: myMeetingError,
    // refetch: myMeetingRefetch,
  } = useGetSupervisorMeetingsQuery();

  console.log('LINE AT 42', myMeetingData, supervisorMeeting);

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


  return (
    <View
      className="flex-1  items-center bg-white"
      style={{
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveWidth(5),
        gap: responsiveHeight(2),
      }}
    >
      <ScrollView
        contentContainerStyle={{
          gap: responsiveHeight(2),
        }}
        showsVerticalScrollIndicator={false}
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
              {supervisorMeetingLoading ? (
                <Text className="text-sm text-zinc-400">Loading...</Text>
              ) : (
                <Text className="text-sm text-zinc-400">
                  {convertDate(
                    supervisorMeeting && supervisorMeeting?.data?.meetings[0]?.startTime,
                  )}{' '}
                  -{' '}
                  {convertDate(
                    supervisorMeeting && supervisorMeeting?.data?.meetings[0]?.endTime,
                  )}
                </Text>
              )}
            </View>

            <View>
              <Users color="#222" size={20} />
              <Text className="text-sm text-zinc-400">
                {supervisorMeetingLoading
                  ? 'Loading...'
                  : supervisorMeeting?.data?.meetings[0]?.bookedBy?.fullName } | {supervisorMeeting?.data?.meetings[0]?.bookedBy?.role} 
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
                supervisorMeeting &&
                  supervisorMeeting?.data?.meetings[0]?.zoomMeetingLink,
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

        <SlotSummary
          totalAvailable={supervisorMeeting?.data?.stats?.total}
          booked={supervisorMeeting?.data?.stats?.booked}
          available={supervisorMeeting?.data?.stats?.total}
          loading={supervisorMeetingLoading}
        />

        <Pressable
          className="w-full bg-black flex-row justify-center"
          style={{
            padding: responsiveWidth(3),
            borderRadius: 8,
            alignItems: 'center',
            gap: responsiveWidth(2),
          }}
          onPress={() => navigation.navigate('Calendar')}
        >
          <CalendarPlus2 color="white" size={20} />
          <Text
            className="text-white"
            style={{ fontSize: responsiveFontSize(2), fontWeight: '800' }}
          >
            Manage Calendar
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default SupervisorHomeScreen;
