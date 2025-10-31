import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import CalendarScreen from './CalendarScreen';
import AddCalendarScreen from './AddCalendarScreen';

const CalendarStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="CalendarMain"
    >
      <Stack.Screen name="CalendarMain" component={CalendarScreen} />
      <Stack.Screen name="AddCalendar" component={AddCalendarScreen} />
    </Stack.Navigator>
  );
};

export default CalendarStack;
