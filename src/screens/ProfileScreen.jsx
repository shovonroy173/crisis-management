// /* eslint-disable react-native/no-inline-styles */
// import {
//   View,
//   Text,
//   Pressable,
//   ScrollView,
//   ActivityIndicator,
//   Alert,
//   // KeyboardAvoidingView,
// } from 'react-native';
// import React, { useState } from 'react';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';

// import Navbar from '../components/Navbar';
// import UserProfileCard from '../components/UserProfileCard';
// import ZoomLinkInput from '../components/ZoomLinkInput';
// import { userProfileData } from '../../assets/data/data';
// import {
//   Bookmark,
//   ChevronRight,
//   LockKeyhole,
//   LogOut,
// } from 'lucide-react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useFormContext } from 'react-hook-form';
// import {
//   useAddZoomLinkMutation,
//   useLogoutMutation,
// } from '../redux/slices/authSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearAuth } from '../redux/reducers/authReducer';
// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const user = useSelector(state => state.auth.user);
//   const [savedLink, setSavedLink] = useState(
//     'https://support.zoom.com/hc/en/article?id=zm_kb8',
//   );
//   const { handleSubmit } = useFormContext();
//   // const { user } = getValues();
//   const token = useSelector(state => state.auth.token);
//   console.log('LINE AT 10', token);
//   const [
//     addZoomLink,
//     {
//       isLoading: addZoomLinkLoading,
//       // isSuccess: zoomLinkSuccess,
//       // error: zoomLinkError,
//     },
//   ] = useAddZoomLinkMutation();

//   // const handleSaveLink = async newLink => {
//   //   setSavedLink(newLink);
//   //   console.log('Zoom link saved:', newLink);
//   //   // Add your save logic here (API call, database update, etc.)
//   //   try {
//   //     const response = await addZoomLink({ zoomMeetingLink: newLink }).unwrap();
//   //     console.log('LINE AT 54', response);

//   //   } catch (error) {
//   //     console.log('LINE AT 51', error);
//   //   }
//   // };

//   const handleSaveLink = async newLink => {
//     if (!newLink || !newLink.trim()) {
//       Alert.alert('Error', 'Please enter a valid zoom link');
//       return;
//     }

//     // Basic URL validation
//     // try {
//     //   new URL(newLink);
//     // } catch (error) {
//     //   Alert.alert('Error', 'Please enter a valid URL');
//     //   return;
//     // }

//     try {
//       setSavedLink(newLink);
//       const response = await addZoomLink({ zoomMeetingLink: newLink }).unwrap();
//       console.log('====================================');
//       console.log('LIN EAT 86', response);
//       console.log('====================================');
//       // Success handled in useEffect
//     } catch (error) {
//       // Error handled in useEffect
//       console.log('Zoom link save error:', error);
//     }
//   };

//   const [logout, { isLoading, isError }] = useLogoutMutation();

//   const handleLogout = async () => {
//     try {
//      const response =  await logout().unwrap();
//       console.log('LINE AT 41', response);
//       // if (isSuccess) {
//       dispatch(clearAuth());
//       // }
//     } catch (error) {
//       console.log('LINE AT 42', error);
//     }
//   };

//   // console.log('LINE AT 47', isError, isLoading, user);

//   return (
//     // <KeyboardAvoidingView
//     //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     //   className="flex-1 bg-white"
//     // >
//     <View
//       className="flex-1  items-center bg-white"
//       style={{
//         paddingHorizontal: responsiveWidth(5),
//         paddingTop: responsiveWidth(5),
//         gap: responsiveHeight(3),
//       }}
//     >
//       <Navbar title="Profile" />
//       <ScrollView
//         contentContainerStyle={{
//           gap: responsiveHeight(3),
//           alignItems: 'center',
//           paddingBottom: responsiveHeight(20), // Extra padding at bottom
//         }}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//         keyboardDismissMode="interactive"
//       >
//         <UserProfileCard userData={userProfileData} />

//         <Pressable
//           onPress={() =>
//             navigation.navigate('Profile', {
//               screen: 'ChangePassword',
//             })
//           }
//           className="flex-row justify-between  items-center w-full"
//         >
//           <View className="flex-row gap-2 items-center">
//             <LockKeyhole color="#222" size={20} />
//             <Text className="text-md font-medium">Change Password</Text>
//           </View>
//           <ChevronRight color="#222" size={20} />
//         </Pressable>

//         <Pressable
//           onPress={() =>
//             navigation.navigate('Profile', {
//               screen: 'ProfileAllSavedResources',
//             })
//           }
//           className="flex-row justify-between  items-center w-full"
//         >
//           <View className="flex-row gap-2 items-center">
//             <Bookmark color="#222" size={20} />
//             <Text className="text-md font-medium">All Save Resources</Text>
//           </View>
//           <ChevronRight color="#222" size={20} />
//         </Pressable>
//         {user.role === 'Supervisor' && (
//           <ZoomLinkInput
//             initialLink={savedLink}
//             onSave={handleSaveLink}
//             isLoading={addZoomLinkLoading}
//           />
//         )}
//         <Pressable
//           onPress={handleSubmit(handleLogout)}
//           className="flex-row gap-2"
//           disabled={isLoading}
//         >
//           <LogOut color="#222" size={20} />
//           <Text className="text-red-500 disabled:text-zinc-300 text-base font-semibold">
//             Log out
//           </Text>
//           {isLoading && <ActivityIndicator size={20} color={'pink'} />}
//         </Pressable>
//       </ScrollView>
//     </View>
//     // </KeyboardAvoidingView>
//   );
// };

// export default ProfileScreen;



/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Navbar from '../components/Navbar';
import UserProfileCard from '../components/UserProfileCard';
import ZoomLinkInput from '../components/ZoomLinkInput';
import { userProfileData } from '../../assets/data/data';
import {
  Bookmark,
  ChevronRight,
  LockKeyhole,
  LogOut,
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormContext } from 'react-hook-form';
import {
  useAddZoomLinkMutation,
  useLogoutMutation,
} from '../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuth } from '../redux/reducers/authReducer';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  
  const [savedLink, setSavedLink] = useState(
    user?.zoomMeetingLink || 'https://support.zoom.com/hc/en/article?id=zm_kb8',
  );

  const { handleSubmit } = useFormContext();

  // Debug logging
  useEffect(() => {
    console.log('🔍 ProfileScreen - User:', user);
    console.log('🔍 ProfileScreen - Token:', token);
    console.log('🔍 ProfileScreen - Saved Link:', savedLink);
  }, [user, token, savedLink]);

  // Zoom Link Mutation
  const [
    addZoomLink,
    {
      isLoading: addZoomLinkLoading,
      isSuccess: zoomLinkSuccess,
      error: zoomLinkError,
      data: zoomLinkData,
    },
  ] = useAddZoomLinkMutation();

  // Monitor zoom link mutation state
  useEffect(() => {
    console.log('🔄 Zoom Link Mutation State:', {
      loading: addZoomLinkLoading,
      success: zoomLinkSuccess,
      error: zoomLinkError,
      data: zoomLinkData,
    });
  }, [addZoomLinkLoading, zoomLinkSuccess, zoomLinkError, zoomLinkData]);

  // Handle success response
  useEffect(() => {
    if (zoomLinkSuccess && zoomLinkData) {
      console.log('✅ Zoom link saved successfully:', zoomLinkData);
      Alert.alert('Success', 'Zoom link saved successfully!');
      
      // Update local state with the response data if available
      if (zoomLinkData.zoomMeetingLink) {
        setSavedLink(zoomLinkData.zoomMeetingLink);
      }
    }
  }, [zoomLinkSuccess, zoomLinkData]);

  // Handle error response
  useEffect(() => {
    if (zoomLinkError) {
      console.log('❌ Zoom link save error:', zoomLinkError);
      
      let errorMessage = 'Failed to save zoom link';
      
      if (zoomLinkError.data?.message) {
        errorMessage = zoomLinkError.data.message;
      } else if (zoomLinkError.error) {
        errorMessage = zoomLinkError.error;
      } else if (zoomLinkError.status) {
        errorMessage = `Error ${zoomLinkError.status}: ${zoomLinkError.data || 'Unknown error'}`;
      }
      
      Alert.alert('Error', errorMessage);
      
      // Revert to original link on error
      if (user?.zoomMeetingLink) {
        setSavedLink(user.zoomMeetingLink);
      }
    }
  }, [zoomLinkError, user?.zoomMeetingLink]);

  const handleSaveLink = async (newLink) => {
    console.log('🔍 handleSaveLink called with:', newLink);
    
    if (!newLink || !newLink.trim()) {
      console.log('❌ Empty link provided');
      Alert.alert('Error', 'Please enter a valid zoom link');
      return;
    }

    console.log('📝 Setting savedLink state to:', newLink);
    setSavedLink(newLink);
    
    try {
      console.log('🚀 Calling addZoomLink mutation...');
      const payload = { zoomMeetingLink: newLink };
      console.log('📦 Payload:', payload);
      console.log('🔑 Token being sent:', token);
      
      const response = await addZoomLink(payload).unwrap();
      console.log('✅ addZoomLink success - Raw response:', response);
      
    } catch (error) {
      console.log('❌ addZoomLink error in catch block:', error);
      console.log('💥 Error details:', JSON.stringify(error, null, 2));
      
      // Note: The error is also handled in the useEffect above
    }
  };

  // Logout Mutation
  const [logout, { isLoading: logoutLoading, error: logoutError }] = useLogoutMutation();

  // Monitor logout state
  useEffect(() => {
    if (logoutError) {
      console.log('❌ Logout error:', logoutError);
      Alert.alert('Error', 'Failed to logout. Please try again.');
    }
  }, [logoutError]);

  const handleLogout = async () => {
    console.log('🚪 Logout initiated...');
    
    try {
      const response = await logout().unwrap();
      console.log('✅ Logout success:', response);
      
      dispatch(clearAuth());
      console.log('🔓 Auth cleared from Redux');
      
    } catch (error) {
      console.log('❌ Logout error:', error);
      // Error is handled in useEffect above
    }
  };

  return (
    <View
      className="flex-1 items-center bg-white"
      style={{
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveWidth(5),
        gap: responsiveHeight(3),
      }}
    >
      <Navbar title="Profile" />
      
      <ScrollView
        contentContainerStyle={{
          gap: responsiveHeight(3),
          alignItems: 'center',
          paddingBottom: responsiveHeight(20),
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
      >
        <UserProfileCard userData={userProfileData} />

        {/* Change Password */}
        <Pressable
          onPress={() =>
            navigation.navigate('Profile', {
              screen: 'ChangePassword',
            })
          }
          className="flex-row justify-between items-center w-full"
        >
          <View className="flex-row gap-2 items-center">
            <LockKeyhole color="#222" size={20} />
            <Text className="text-md font-medium">Change Password</Text>
          </View>
          <ChevronRight color="#222" size={20} />
        </Pressable>

        {/* Saved Resources */}
        <Pressable
          onPress={() =>
            navigation.navigate('Profile', {
              screen: 'ProfileAllSavedResources',
            })
          }
          className="flex-row justify-between items-center w-full"
        >
          <View className="flex-row gap-2 items-center">
            <Bookmark color="#222" size={20} />
            <Text className="text-md font-medium">All Saved Resources</Text>
          </View>
          <ChevronRight color="#222" size={20} />
        </Pressable>

        {/* Zoom Link Input - Only for Supervisor */}
        {user?.role === 'Supervisor' && (
          <ZoomLinkInput
            initialLink={savedLink}
            onSave={handleSaveLink}
            isLoading={addZoomLinkLoading}
          />
        )}

        {/* Logout Button */}
        <Pressable
          onPress={handleSubmit(handleLogout)}
          className="flex-row gap-2 items-center"
          disabled={logoutLoading}
        >
          <LogOut color="#222" size={20} />
          <Text className={`text-base font-semibold ${
            logoutLoading ? 'text-zinc-400' : 'text-red-500'
          }`}>
            Log out
          </Text>
          {logoutLoading && <ActivityIndicator size={20} color="#EF4444" />}
        </Pressable>

        {/* Debug Info - Remove in production */}
        {/* {__DEV__ && (
          <View className="mt-4 p-3 bg-gray-100 rounded-lg">
            <Text className="text-xs font-mono text-gray-700">
              Debug: {user?.role} | Loading: {addZoomLinkLoading.toString()}
            </Text>
          </View>
        )} */}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;