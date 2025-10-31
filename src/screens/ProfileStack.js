import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import ProfileScreen from '../screens/ProfileScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import ProfileAllSavedResourcesScreen from './ProfileAllSavedResourcesScreen';
import ProfileResourceDetailScreen from './ProfileResourceDetailScreen';

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ProfileMain"
    >
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen
        name="ProfileAllSavedResources"
        component={ProfileAllSavedResourcesScreen}
      />
      <Stack.Screen
        name="ProfileResourceDetail"
        component={ProfileResourceDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
