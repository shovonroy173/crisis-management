import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Check } from 'lucide-react-native';

const SuccessModal = ({ visible, title, message, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 items-center justify-center px-6">
        <View className="bg-white rounded-3xl p-6 w-full max-w-sm items-center">
          {/* Success Icon */}
          <View className="w-20 h-20 rounded-full bg-green-100 items-center justify-center mb-6">
            <Check size={32} color="#10B981" strokeWidth={3} />
          </View>

          {/* Title */}
          <Text className="text-xl font-semibold text-gray-900 mb-3">
            {title}
          </Text>

          {/* Message */}
          <Text className="text-sm text-gray-600 text-center mb-6">
            {message}
          </Text>

          {/* OK Button */}
          <TouchableOpacity
            onPress={onClose}
            className="bg-black rounded-2xl py-4 w-full items-center"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium text-base">Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
