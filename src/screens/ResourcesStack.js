import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import ResourcesScreen from '../screens/ResourcesScreen';
import AllResourcesScreen from './AllResourcesScreen';
import ResourcesDetailScreen from './ResourcesDetailScreen';
const ResourcesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ResourcesMain"
    >
      <Stack.Screen name="ResourcesMain" component={ResourcesScreen} />
      <Stack.Screen name="AllResources" component={AllResourcesScreen} />
      <Stack.Screen name="ResourcesDetail" component={ResourcesDetailScreen} />
    </Stack.Navigator>
  );
};

export default ResourcesStack;
