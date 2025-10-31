import { View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SupervisorUpcomingMeetingScreen from './SupervisorUpcomingMeetingScreen';
import SupervisorPastMeetingScreen from './SupervisorPastMeetingScreen';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Navbar from '../components/Navbar';
const SupervisorMeetingScreen = () => {
  const TopTab = createMaterialTopTabNavigator();

  return (
    <View className="flex-1 bg-white">
      <View
        style={{
          padding: responsiveWidth(5),
        }}
      >
        <Navbar title="Meetings" />
      </View>
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: responsiveFontSize(1.7),
            fontWeight: '700',
            textTransform: 'none',
          },
          tabBarIndicatorStyle: {
            height: 0,
          },
          tabBarStyle: {
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarActiveTintColor: '#FF69B4', // Pink for active tab
          tabBarInactiveTintColor: '#666', // Gray for inactive tabs
        }}
      >
        <TopTab.Screen
          name="Upcoming"
          component={SupervisorUpcomingMeetingScreen}
        />
        <TopTab.Screen name="Past" component={SupervisorPastMeetingScreen} />
      </TopTab.Navigator>
    </View>
  );
};

export default SupervisorMeetingScreen;
