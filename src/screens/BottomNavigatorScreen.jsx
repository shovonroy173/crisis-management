/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import React from 'react';
import {
  BriefcaseBusiness,
  CalendarDays,
  Home,
  LibraryBig,
  User,
} from 'lucide-react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import SupervisorHomeScreen from './SupervisorHomeScreen';
import SupervisorMeetingScreen from './SupervisorMeetingScreen';
import CasesStack from './CasesStack';
import CalendarStack from './CalendarStack';
import MeetingScreen from './MeetingScreen';
import ResourcesStack from './ResourcesStack';
import ProfileStack from './ProfileStack';
import { useSelector } from 'react-redux';
// import { useFormContext } from 'react-hook-form';

const BottomNavigatorScreen = () => {
  const Tab = createBottomTabNavigator();
  // const { getValues } = useFormContext();
  // const { user } = getValues();
  const user = useSelector(state => state.auth.user);
  // console.log('LINE AT 25', user);

  return (
    <View className="flex-1 bg-white">
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: responsiveHeight(10),
            paddingTop: responsiveHeight(1),
            backgroundColor: '#FFF0F8',
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          },
          tabBarHideOnKeyboard: false,
          tabBarLabelPosition: 'below-icon',
          tabBarActiveTintColor: '#FF69B4', // <-- Active color
          tabBarInactiveTintColor: '#222', // <-- Inactive color
          animation: 'shift',
        }}
      >
        <Tab.Screen
          name="Home"
          component={
            user.role === 'Supervisor' ? SupervisorHomeScreen : HomeScreen
          }
          options={{
            tabBarIcon: ({ focused }) => (
              <Home color={focused ? '#FF69B4' : '#222'} size={22} />
            ),
          }}
        />
        {user.role === 'Supervisor' ? (
          <Tab.Screen
            name="Calendar"
            component={CalendarStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <CalendarDays color={focused ? '#FF69B4' : '#222'} size={22} />
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name="Cases"
            component={CasesStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <BriefcaseBusiness
                  color={focused ? '#FF69B4' : '#222'}
                  size={22}
                />
              ),
            }}
          />
        )}

        <Tab.Screen
          name="Meeting"
          component={
            user.role === 'Supervisor' ? SupervisorMeetingScreen : MeetingScreen
          }
          options={{
            tabBarIcon: ({ focused }) => (
              <CalendarDays color={focused ? '#FF69B4' : '#222'} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Resources"
          component={ResourcesStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <LibraryBig color={focused ? '#FF69B4' : '#222'} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <User color={focused ? '#FF69B4' : '#222'} size={22} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomNavigatorScreen;
