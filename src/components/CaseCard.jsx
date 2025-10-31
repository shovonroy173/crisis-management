/* eslint-disable react-native/no-inline-styles */
// components/CaseCard.js
import React from 'react';
import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { BriefcaseBusiness } from 'lucide-react-native';

const CaseCard = ({
  title = 'My Cases',
  subtitle = 'Active assigned cases',
  count = 0,
  statusLabel = 'Active',
  buttonLabel = 'View my cases',
  onPress = () => {},
  icon = <BriefcaseBusiness color={'#222'} size={24} />,
  loading,
  error,
  refetch,
}) => {
  return (
    <View
      className="w-full border border-neutral-200 rounded-2xl bg-white"
      style={{ gap: responsiveHeight(4), padding: responsiveWidth(5) }}
    >
      {/* Header Section */}
      <View className="w-full flex-row justify-between items-center">
        <View
          className="flex-row items-center"
          style={{ gap: responsiveWidth(3) }}
        >
          <View
            className="bg-pink-200 rounded-md"
            style={{ padding: responsiveWidth(1.5) }}
          >
            {icon}
          </View>
          <View>
            <Text className="text-lg font-bold text-black">{title}</Text>
            <Text className="text-sm text-zinc-400">{subtitle}</Text>
          </View>
        </View>

        <View
          className="flex-row items-center"
          style={{ gap: responsiveWidth(2) }}
        >
          {loading ? (
            <ActivityIndicator size={22} color={'pink'} />
          ) : error ? (
            <Pressable>
              <Text className="text-red-500 text-sm" onPress={refetch}>
                Retry
              </Text>
            </Pressable>
          ) : (
            <Text className="text-pink-400 text-3xl font-bold">{count}</Text>
          )}

          <Text>{statusLabel}</Text>
        </View>
      </View>

      {/* Button */}
      <Pressable
        className="w-full bg-black"
        style={{
          padding: responsiveWidth(3),
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={onPress}
      >
        <Text
          className="text-white"
          style={{ fontSize: responsiveFontSize(2), fontWeight: '800' }}
        >
          {buttonLabel}
        </Text>
      </Pressable>
    </View>
  );
};

export default CaseCard;
