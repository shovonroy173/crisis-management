import React from 'react';
import { View, Text, Image } from 'react-native';
import { User, Mail, Briefcase } from 'lucide-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

const UserProfileCard = ({ userData }) => {
  // const { getValues } = useFormContext();
  // const { credentials } = getValues();
  const user = useSelector(state => state.auth.user);

  return (
    <View
      className="w-full bg-white rounded-2xl  shadow-sm border border-gray-100"
      style={{
        padding: responsiveWidth(4),
        gap: responsiveHeight(2),
      }}
    >
      {/* Profile Header */}
      <View
        className="flex-row items-center"
        style={{
          gap: responsiveWidth(5),
        }}
      >
        <Image
          source={{ uri: user?.profileImage || userData.profileImage }}
          className=" rounded-full "
          resizeMode="cover"
          style={{
            width: responsiveWidth(14),
            height: responsiveWidth(14),
          }}
        />

        <User size={20} color="#FF69B4" />
        <View
          className=" rounded-full bg-pink-100 items-center justify-center"
          style={{
            paddingHorizontal: responsiveWidth(2.5),
          }}
        >
          <Text className="text-base font-medium text-gray-900">
            {user.role}
          </Text>
        </View>
      </View>

      {/* User Details */}
      <View
        style={{
          gap: responsiveWidth(2),
        }}
      >
        {/* Name */}
        <View
          className="flex-row items-center"
          style={{
            gap: responsiveWidth(2),
          }}
        >
          <User size={20} color="#374151" />
          <Text className="text-sm text-gray-600 ">
            Name:{' '}
            <Text className="font-medium text-gray-900">
              {user?.name || user?.email.split('@')[0]}
            </Text>
          </Text>
        </View>

        {/* role */}
        <View
          className="flex-row items-center"
          style={{
            gap: responsiveWidth(2),
          }}
        >
          <Mail size={20} color="#374151" />
          <Text className="text-sm text-gray-600 ">
            Mail:{' '}
            <Text className="font-medium text-gray-900">{user?.email}</Text>
          </Text>
        </View>

        {/* Role */}
        <View
          className="flex-row items-center"
          style={{
            gap: responsiveWidth(2),
          }}
        >
          <Briefcase size={20} color="#374151" />
          <Text className="text-sm text-gray-600 ">
            Role:{' '}
            <Text className="font-medium text-gray-900">{user?.role}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfileCard;
