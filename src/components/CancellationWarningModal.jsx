import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { AlertTriangle } from 'lucide-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CancellationWarningModal = ({ visible, onKeep, onDelete }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onKeep}
    >
      <View
        className="flex-1 bg-black/50 items-center justify-center "
        style={{
          padding: responsiveWidth(5),
        }}
      >
        <View
          className="bg-white rounded-3xl w-full max-w-sm items-center"
          style={{
            padding: responsiveWidth(5),
            gap: responsiveHeight(2),
          }}
        >
          {/* Warning Icon */}
          <View
            className=" rounded-full bg-red-100 items-center justify-center "
            style={{
              padding: responsiveWidth(2),
            }}
          >
            <AlertTriangle size={26} color="#EF4444" />
          </View>

          {/* Title */}
          <Text className="text-xl font-semibold text-gray-900 ">Warning</Text>

          {/* Heading */}
          <Text className="text-base font-semibold text-gray-900 ">
            Cancellation Notice
          </Text>

          {/* Message */}
          <Text className="text-sm text-gray-500 text-center ">
            This slot will become available for others to book.
          </Text>

          {/* Keep Meeting Button */}
          <TouchableOpacity
            onPress={onKeep}
            className="bg-white border border-gray-300 rounded-2xl  w-full items-center "
            style={{
              padding: responsiveWidth(3),
            }}
            activeOpacity={0.8}
          >
            <Text className="text-gray-900 font-medium text-base">
              Keep Meeting
            </Text>
          </TouchableOpacity>

          {/* Delete Button */}
          <TouchableOpacity
            onPress={onDelete}
            className="bg-red-50 rounded-2xl  w-full items-center"
            style={{
              padding: responsiveWidth(3),
            }}
            activeOpacity={0.8}
          >
            <Text className="text-red-500 font-medium text-base">
              Yes, Delete Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CancellationWarningModal;
