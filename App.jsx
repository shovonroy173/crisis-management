import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/root/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
function App() {
  const methods = useForm({
    mode: 'onChange',
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <FormProvider {...methods}>
              <NavigationContainer>
                <AppNavigator />
              </NavigationContainer>
            </FormProvider>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
