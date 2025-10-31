import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  //   Store,
  MapPin,
  // Clock,
  ChevronRight,
  Bookmark,
} from 'lucide-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { getCategoryIcon } from '../utils/getCategoryIcon';

const SingleResourceCard = ({
  resource,
  onViewDetails,
  onToggleBookmark,
  loading,
}) => {
  console.log('LINE AT 17', resource);
  return (
    <View
      className="bg-white rounded-2xl  shadow-sm border border-gray-100"
      style={{
        padding: responsiveWidth(4),
        gap: responsiveHeight(1.5),
      }}
    >
      {/* Header with Icon and Bookmark */}
      <View className="flex-row items-center justify-between ">
        
        <View className="flex-row items-center flex-1">
          <View
            className="w-12 h-12 rounded-xl items-center justify-center mr-3 bg-pink-200"
            // style={{ backgroundColor: resource.iconBackground }}
          >
            {getCategoryIcon(resource?.category?.name)}
            {/* {resource?.category?.name &&
              React.createElement(resource?.category?.name)} */}
          </View>
          <Text className="text-base font-semibold text-gray-900 flex-1">
            {resource.title}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => onToggleBookmark(resource.id)}
          className="ml-2"
        >
          {/* {loading ? (
            <ActivityIndicator size={22} color={'pink'} />
          ) : ( */}
            <Bookmark
              size={24}
              color="#EC4899"
              fill={resource.isBookmarked ? '#EC4899' : 'transparent'}
            />
          {/* )} */}
        </TouchableOpacity>
      </View>

      {/* Location */}
      <View className="flex-row items-center ">
        <MapPin size={16} color="#6B7280" />
        <Text className="text-sm text-gray-600 ml-2">{resource.location}</Text>
      </View>

      {/* Hours */}
      {/* <View className="flex-row items-center ">
        <Clock size={16} color="#6B7280" />
        <Text className="text-sm text-gray-600 ml-2">{resource.hours}</Text>
      </View> */}

      {/* View Details Button */}
      <TouchableOpacity
        className="bg-black rounded-xl py-3 px-4 flex-row items-center justify-center"
        onPress={() => onViewDetails(resource)}
      >
        <Text className="text-white font-medium text-base mr-2">
          View Details
        </Text>
        <ChevronRight size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default SingleResourceCard;
