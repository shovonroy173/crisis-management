/* eslint-disable react-native/no-inline-styles */
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ControllerTextInput from '../components/ControllerTextInput';
import { useFormContext } from 'react-hook-form';
import { EyeClosed, LockKeyhole } from 'lucide-react-native';

import usePasswordVisibility from '../utils/usePasswordVisibility';
import Navbar from '../components/Navbar';
import SuccessModal from '../components/SuccessModal';
import { useNavigation } from '@react-navigation/native';
import { useResetPasswordMutation } from '../redux/slices/authSlice';
import ErrorText from '../components/ErrorText';
const ChangePasswordScreen = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useFormContext();
  const [isPasswordVisible, togglePasswordVisibility] = usePasswordVisibility();
  const [isNewVisible, toggleNewVisibility] = usePasswordVisibility();
  const [isConfirmVisible, toggleConfirmVisibility] = usePasswordVisibility();
  const [showSuccess, setShowSuccess] = useState(false);

  const navigation = useNavigation();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const handlePasswordUpdate = async data => {
    // Your password update logic here
    console.log('LIK', isLoading);

    // console.log('LINE AT 42', data);

    // try {
      const response = await resetPassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
        confirmPassword: data.confirmPassword,
      });
      console.log('LINE AT 54 inside try', response);
      if (response.error) {
        console.log('Error updating password:', response.error);
        setError('root', {
          type: 'changePassword',
          message: response.error?.data?.message,
        });
      } else {
        setShowSuccess(true);
        // navigation.goBack();
      }
      setShowSuccess(true);
    // } catch (error) {
    //   console.log('LINE AT 48', error);
    // }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#fff' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? responsiveHeight(2) : 0}
      >
        <View
          className="flex-1 bg-white"
          style={{
            paddingHorizontal: responsiveWidth(5),
            paddingTop: responsiveWidth(5),
          }}
        >
          <Navbar title={'Change Password'} />

          <ScrollView
            contentContainerStyle={{
              // flexGrow: 1,
              // flex:1,
              // backgroundColor: '#222',
              gap: responsiveHeight(2),
              paddingTop: responsiveWidth(5),
            }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <ControllerTextInput
              name="currentPassword"
              control={control}
              error={errors?.currentPassword?.message}
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
            <ControllerTextInput
              name="newPassword"
              control={control}
              error={errors?.newPassword?.message}
              label="New Password"
              placeholder="Enter new password"
              type="password"
              keyboardType="password"
              secureTextEntry={!isNewVisible}
              leftIcon={<LockKeyhole color="#222" size={20} />}
              rightIcon={
                <EyeClosed
                  name={isNewVisible ? 'eye-off' : 'eye'}
                  size={20}
                  color="#222"
                />
              }
              onPressToggle={toggleNewVisibility}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              }}
            />

            <ControllerTextInput
              name="confirmPassword"
              control={control}
              error={errors?.confirmPassword?.message}
              label="Confirm New Password"
              placeholder="Re-enter your new password"
              type="password"
              keyboardType="password"
              secureTextEntry={!isConfirmVisible}
              leftIcon={<LockKeyhole color="#222" size={20} />}
              rightIcon={
                <EyeClosed
                  name={isConfirmVisible ? 'eye-off' : 'eye'}
                  size={20}
                  color="#222"
                />
              }
              onPressToggle={toggleConfirmVisibility}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              }}
            />

            {errors?.root?.type === 'changePassword' && (
              <ErrorText error={errors} />
            )}

            <View className="flex-row items-center justify-center ">
              <View className="flex-row items-center justify-between w-full">
                <Pressable
                  className="w-[48%] bg-neutral-200"
                  style={{
                    padding: responsiveWidth(3),
                    borderRadius: 8,
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.goBack()}
                >
                  <Text
                    className="text-black"
                    style={{
                      fontSize: responsiveFontSize(2),
                      fontWeight: '800',
                    }}
                  >
                    ✖ Cancel
                  </Text>
                </Pressable>
                <Pressable
                  className="w-[48%] bg-black disabled:bg-gray-400"
                  style={{
                    padding: responsiveWidth(3),
                    borderRadius: 8,
                    alignItems: 'center',
                  }}
                  onPress={handleSubmit(handlePasswordUpdate)}
                  disabled={isLoading}
                >
                  <Text
                    className="text-white"
                    style={{
                      fontSize: responsiveFontSize(2),
                      fontWeight: '800',
                    }}
                  >
                    Update
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>

          <SuccessModal
            visible={showSuccess}
            title="Success!"
            message="Your password has been updated successfully."
            onClose={() => navigation.goBack()}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ChangePasswordScreen;
