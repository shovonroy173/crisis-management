import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import CasesScreen from './CasesScreen';
import CasesDetailScreen from './CaseDetailsScreen';

const CasesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='CasesMain'>
      <Stack.Screen name="CasesMain" component={CasesScreen} />
      <Stack.Screen name="Case_Details" component={CasesDetailScreen} />
    </Stack.Navigator>
  );
};

export default CasesStack;
