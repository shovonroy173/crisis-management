/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {
  MapPin,
  Phone,
  CheckCircle2,
  Bookmark,
  AlertCircle,
  Info,
} from 'lucide-react-native';
import Navbar from '../components/Navbar';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { getCategoryIcon } from '../utils/getCategoryIcon';
import { useAllResources } from '../hooks/useAllResources';

const ResourceDetailScreen = ({ route, navigation }) => {
  const { singleResource: resource } = route.params || {};
  const [isSaved, setIsSaved] = useState(resource?.isBookmarked || false);
  const [saving, setSaving] = useState(false);
  const { toggleBookmark } = useAllResources();

  // Safe resource data with fallbacks
  const safeResource = {
    id: resource?.id || 'unknown',
    title: resource?.title || 'Untitled Resource',
    description: resource?.description || 'No description available.',
    category: resource?.category || { name: 'General' },
    contactInfo: resource?.contactInfo || {
      address: 'Address not available',
      phone: 'Phone not available',
    },
    servicesAvailable: Array.isArray(resource?.servicesAvailable)
      ? resource.servicesAvailable
      : ['No services listed'],
    iconColor: resource?.iconColor || 'black',
    iconBackground: resource?.iconBackground || 'pink',
  };

  const handleSave = async () => {
    if (saving) return;

    setSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsSaved(!isSaved);
      toggleBookmark(safeResource.id);

      // Here you would call your actual bookmark API
      console.log('Toggle bookmark for:', safeResource.id);
    } catch (error) {
      console.error('Failed to save resource:', error);
      Alert.alert('Error', 'Failed to save resource. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('ResourcesList');
    }
  };

  // Render fallback if no resource data
  if (!resource) {
    return (
      <View
        className="flex-1 bg-white"
        style={{
          paddingHorizontal: responsiveWidth(5),
          paddingTop: responsiveWidth(5),
        }}
      >
        <Navbar title="Resource Details" onBack={handleBack} />
        <View className="flex-1 items-center justify-center">
          <AlertCircle size={48} color="#6B7280" />
          <Text className="text-lg font-semibold text-gray-700 mt-4 text-center">
            Resource not found
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            The resource you're looking for is not available.
          </Text>
          <TouchableOpacity
            onPress={handleBack}
            className="bg-black rounded-xl py-3 px-6 mt-6"
          >
            <Text className="text-white font-medium text-base">Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveWidth(5),
        gap: responsiveHeight(3),
      }}
    >
      {/* Header */}
      <Navbar title="Resource Details" onBack={handleBack} />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          gap: responsiveHeight(4),
          paddingBottom: responsiveHeight(2),
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Resource Name Card */}
        <View
          className="bg-white rounded-2xl shadow-sm border border-gray-100"
          style={{
            padding: responsiveWidth(4),
          }}
        >
          <View className="flex-row items-center">
            <View
              className="rounded-xl items-center justify-center mr-3"
              style={{
                backgroundColor: safeResource.iconBackground,
                padding: responsiveWidth(3),
                minWidth: responsiveWidth(12),
                minHeight: responsiveWidth(12),
              }}
            >
              {getCategoryIcon(
                safeResource.category?.name,
                24,
                safeResource.iconColor,
              )}
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900">
                {safeResource.title}
              </Text>
              {safeResource.category?.name && (
                <Text className="text-sm text-gray-500 mt-1">
                  {safeResource.category.name}
                </Text>
              )}
            </View>
          </View>
        </View>

        {/* About This Resource */}
        <View
          className="bg-white rounded-2xl shadow-sm border border-gray-100"
          style={{
            padding: responsiveWidth(4),
            gap: responsiveHeight(2),
          }}
        >
          <Text className="text-lg font-semibold text-gray-900">
            About This Resource
          </Text>
          <Text className="text-sm text-gray-600 leading-6">
            {safeResource.description}
          </Text>
        </View>

        {/* Contact Information */}
        <View
          className="bg-white rounded-2xl shadow-sm border border-gray-100"
          style={{
            padding: responsiveWidth(4),
            gap: responsiveHeight(2),
          }}
        >
          <Text className="text-lg font-semibold text-gray-900">
            Contact Information
          </Text>

          {/* Address */}
          <View className="flex-row items-start">
            <View
              className="rounded-full items-center justify-center mr-3 mt-1"
              style={{
                backgroundColor: '#F3F4F6',
                padding: responsiveWidth(2.5),
              }}
            >
              <MapPin size={18} color="#374151" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-medium text-gray-900">
                Address
              </Text>
              <Text className="text-sm text-gray-600 mt-1">
                {safeResource.contactInfo.address}
              </Text>
            </View>
          </View>

          {/* Phone */}
          <View className="flex-row items-start">
            <View
              className="rounded-full items-center justify-center mr-3 mt-1"
              style={{
                backgroundColor: '#F3F4F6',
                padding: responsiveWidth(2.5),
              }}
            >
              <Phone size={18} color="#374151" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-medium text-gray-900">Phone</Text>
              <Text className="text-sm text-gray-600 mt-1">
                {safeResource.contactInfo.phone}
              </Text>
            </View>
          </View>
        </View>

        {/* Services Available */}
        <View
          className="bg-white rounded-2xl shadow-sm border border-gray-100"
          style={{
            padding: responsiveWidth(4),
            gap: responsiveHeight(2),
          }}
        >
          <View className="flex-row items-center">
            <Info size={20} color="#6B7280" />
            <Text className="text-lg font-semibold text-gray-900 ml-2">
              Services Available
            </Text>
          </View>

          {safeResource.servicesAvailable.map((service, index) => (
            <View key={`service-${index}`} className="flex-row items-start">
              <CheckCircle2 size={20} color="#10B981" className="mt-0.5" />
              <Text className="text-sm text-gray-700 flex-1 ml-2 leading-5">
                {service || 'Service information not available'}
              </Text>
            </View>
          ))}
        </View>

        {/* Additional Information Section (if available) */}
        {(resource.hours || resource.website || resource.email) && (
          <View
            className="bg-white rounded-2xl shadow-sm border border-gray-100"
            style={{
              padding: responsiveWidth(4),
              gap: responsiveHeight(2),
            }}
          >
            <Text className="text-lg font-semibold text-gray-900">
              Additional Information
            </Text>

            {resource.hours && (
              <View>
                <Text className="text-base font-medium text-gray-900">
                  Hours
                </Text>
                <Text className="text-sm text-gray-600">{resource.hours}</Text>
              </View>
            )}

            {resource.website && (
              <View>
                <Text className="text-base font-medium text-gray-900">
                  Website
                </Text>
                <Text className="text-sm text-blue-500">
                  {resource.website}
                </Text>
              </View>
            )}

            {resource.email && (
              <View>
                <Text className="text-base font-medium text-gray-900">
                  Email
                </Text>
                <Text className="text-sm text-gray-600">{resource.email}</Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>

      {/* Save Button */}
      <View style={{ paddingBottom: responsiveHeight(2) }}>
        <TouchableOpacity
          onPress={handleSave}
          disabled={saving}
          className={`rounded-xl py-4 px-4 flex-row items-center justify-center ${
            isSaved ? 'bg-gray-800' : 'bg-gray-200'
          }`}
        >
          {saving ? (
            <ActivityIndicator
              size="small"
              color={isSaved ? '#FFFFFF' : '#374151'}
            />
          ) : (
            <>
              <Bookmark
                size={20}
                color={isSaved ? '#FFFFFF' : '#374151'}
                fill={isSaved ? '#FFFFFF' : 'transparent'}
              />
              <Text
                className={`text-base font-medium ml-2 ${
                  isSaved ? 'text-white' : 'text-gray-800'
                }`}
              >
                {isSaved ? 'Saved' : 'Save Resource'}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResourceDetailScreen;
