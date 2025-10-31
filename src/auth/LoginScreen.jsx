/* eslint-disable react-native/no-inline-styles */

import {
  Text,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { useFormContext } from 'react-hook-form';
import { EyeClosed, LockKeyhole, MailIcon } from 'lucide-react-native';

import ControllerTextInput from '../components/ControllerTextInput';
import ErrorText from '../components/ErrorText';
import { useLoginMutation } from '../redux/slices/authSlice';

const LoginScreen = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    // setValue,
    setError,
  } = useFormContext();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const [login, { isLoading: loginLoading }] = useLoginMutation();
  // console.log('LINE AT 40', loginLoading, errors);

const navigation = useNavigation();
  const handleLogin = async data => {
    // setValue('credentials', data);
    try {
      await login(data).unwrap();
      // console.log('LINE AT 179', response);
      // if (loginSuccess) {
      navigation.navigate('BottomNavigator');
      // }
    } catch (error) {
      // handle error
      console.log('LINE AT 54', error);

      setError('root', {
        type: 'login',
        message: error?.data?.message,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}
    >
      <View
        className="flex-1"
        style={{
          justifyContent: 'center',

          padding: responsiveWidth(5),
          gap: responsiveHeight(1),
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: responsiveHeight(1),
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require('../../assets/images/logo.webp')}
            style={{
              width: responsiveWidth(50),
              height: responsiveHeight(20),
              resizeMode: 'contain',
            }}
          />
          <ControllerTextInput
            name="email"
            control={control}
            error={errors?.email?.message}
            label="Email"
            placeholder="Enter email"
            type="email"
            keyboardType="email-address"
            leftIcon={<MailIcon color="#222" size={20} />}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            }}
          />
          <ControllerTextInput
            name="password"
            control={control}
            error={errors?.password?.message}
            label="Password"
            placeholder="Enter password"
            type="password"
            keyboardType="password"
            secureTextEntry={!isPasswordVisible}
            leftIcon={<LockKeyhole color="#222" size={20} />}
            rightIcon={
              <EyeClosed
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={20}
                color="#222"
              />
            }
            onPressToggle={togglePasswordVisibility}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
          />
          {errors?.root?.type === 'login' && <ErrorText error={errors} />}
        </ScrollView>
        <View
          className="flex-grow"
          style={{
            marginBottom: responsiveHeight(2),
          }}
        >
          <Pressable
            className="w-full bg-black disabled:bg-gray-400"
            style={{
              padding: responsiveWidth(3),
              borderRadius: 8,
              alignItems: 'center',
              marginBottom: responsiveHeight(2),
            }}
            disabled={loginLoading}
            onPress={handleSubmit(handleLogin)}
          >
            <Text
              className="text-white disabled:text-gray-600"
              style={{ fontSize: responsiveFontSize(2), fontWeight: '800' }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
