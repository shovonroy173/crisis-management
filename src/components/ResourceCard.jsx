import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { getCategoryIcon } from '../utils/getCategoryIcon';

const ResourceCard = ({ resource, onPress }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center bg-white rounded-2xl  shadow-sm border border-gray-100"
      style={{
        padding: responsiveWidth(2),
      }}
      onPress={() => onPress(resource)}
      activeOpacity={0.7}
    >
      {/* Icon Container */}
      <View
        className=" rounded-full items-center justify-center"
        style={{
          backgroundColor: resource.backgroundColor,
          marginRight: responsiveWidth(3),
          padding: responsiveWidth(2.5),
        }}
      >
        {getCategoryIcon(resource.title, 22, '#222')}
      </View>

      {/* Text Content */}
      <View className="flex-1">
        <Text className="text-base font-semibold text-gray-900 mb-0.5">
          {resource.title}
        </Text>
        <Text className="text-sm text-gray-500">{resource.subtitle}</Text>
      </View>

      {/* Chevron Arrow */}
      <ChevronRight size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
};

export default ResourceCard;
