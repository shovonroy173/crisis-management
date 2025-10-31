import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../auth/LoginScreen';
const Stack = createNativeStackNavigator();
import BottomNavigatorScreen from '../screens/BottomNavigatorScreen';
import NotificationScreen from '../screens/NotificationScreen';
import { useSelector } from 'react-redux';
const AppNavigator = () => {
  const token = useSelector(state => state.auth.accessToken);
  // const token = useSelector(state => state.auth.token);
  // console.log('LINE AT 10', token);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <>
          <Stack.Screen
            name="BottomNavigator"
            component={BottomNavigatorScreen}
          />
          <Stack.Screen name="Notification" component={NotificationScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigatorScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
