/* eslint-disable react-native/no-inline-styles */
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { Video, Edit3, Check, Copy } from 'lucide-react-native';
// import Clipboard from '@react-native-clipboard/clipboard';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';

// const ZoomLinkInput = ({ initialLink, onSave }) => {
//   const [zoomLink, setZoomLink] = useState(initialLink || '');
//   const [isEditing, setIsEditing] = useState(false);

//   const handleCopy = () => {
//     Clipboard.setString(zoomLink);
//     Alert.alert('Copied', 'Zoom link copied to clipboard');
//   };

//   const handleSave = () => {
//     if (!zoomLink.trim()) {
//       Alert.alert('Error', 'Please enter a valid Zoom link');
//       return;
//     }
//     onSave(zoomLink);
//     setIsEditing(false);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   return (
//     <View
//       className="w-full bg-white rounded-2xl  shadow-sm border border-gray-100"
//       style={{
//         padding: responsiveWidth(4),
//         gap: responsiveHeight(2),
//       }}
//     >
//       {/* Header */}
//       <View className="flex-row items-center gap-2">
//         <View
//           className=" rounded-lg bg-pink-100 items-center justify-center "
//           style={{
//             padding: responsiveWidth(2),
//           }}
//         >
//           <Video size={18} color="#EC4899" />
//         </View>
//         <Text className="text-base font-semibold text-gray-900">
//           Zoom Meeting Link
//         </Text>
//       </View>

//       {/* Link Input */}
//       <View
//         className="bg-gray-100 rounded-xl  flex-row items-center"
//         style={{
//           padding: responsiveWidth(2),
//         }}
//       >
//         <TextInput
//           value={zoomLink}
//           onChangeText={setZoomLink}
//           placeholder="Enter Zoom meeting link"
//           placeholderTextColor="#9CA3AF"
//           className="flex-1 text-sm text-gray-900"
//           editable={isEditing}
//           multiline
//         />
//         {!isEditing && zoomLink && (
//           <TouchableOpacity
//             onPress={handleCopy}
//             className="ml-2"
//             activeOpacity={0.7}
//           >
//             <Copy size={20} color="#6B7280" />
//           </TouchableOpacity>
//         )}
//       </View>

//       {/* Action Buttons */}
//       {/* <View className="flex-row ">
//         {isEditing ? (
//           <TouchableOpacity
//             onPress={handleSave}
//             className="flex-1 bg-black rounded-xl  flex-row items-center justify-center"
//             style={{
//               padding: responsiveWidth(2),
//             }}
//             activeOpacity={0.8}
//           >
//             <Check size={18} color="#FFFFFF" />
//             <Text className="text-white font-medium text-base ">Save</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             onPress={handleEdit}
//             className="flex-1 bg-white border border-gray-300 rounded-xl flex-row items-center justify-center"
//             style={{
//               padding: responsiveWidth(2),
//             }}
//             activeOpacity={0.8}
//           >
//             <Edit3 size={18} color="#374151" />
//             <Text className="text-gray-900 font-medium text-base ">
//               Edit Link
//             </Text>
//           </TouchableOpacity>
//         )}
//       </View> */}

//       <View className="flex-row" style={{ gap: responsiveWidth(3) }}>
//         <TouchableOpacity
//           onPress={handleEdit}
//           className="flex-1 bg-pink-50 rounded-xl flex-row items-center justify-center"
//           style={{
//             paddingVertical: responsiveHeight(1.5),
//           }}
//           activeOpacity={0.8}
//         >
//           <Edit3 size={18} color="#EC4899" />
//           <Text className="text-pink-500 font-medium text-base ml-2">
//             Edit Link
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={isEditing ? handleSave : null}
//           className="flex-1 bg-black rounded-xl flex-row items-center justify-center"
//           style={{
//             paddingVertical: responsiveHeight(1.5),
//           }}
//           activeOpacity={0.8}
//           disabled={!isEditing}
//         >
//           <Check size={18} color="#FFFFFF" />
//           <Text className="text-white font-medium text-base ml-2">Save</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ZoomLinkInput;




// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
// import { Video, Edit3, Check, Copy, X } from 'lucide-react-native';
// import Clipboard from '@react-native-clipboard/clipboard';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';

// const ZoomLinkInput = ({ initialLink, onSave, isLoading = false }) => {
//   const [zoomLink, setZoomLink] = useState(initialLink || '');
//   const [isEditing, setIsEditing] = useState(false);
//   const [hasChanges, setHasChanges] = useState(false);

//   // Update local state when initialLink changes
//   useEffect(() => {
//     setZoomLink(initialLink || '');
//   }, [initialLink]);

//   console.log('LINE AT  170', zoomLink);
  

//   // Track changes
//   useEffect(() => {
//     setHasChanges(zoomLink !== initialLink);
//   }, [zoomLink, initialLink]);

//   const handleCopy = () => {
//     if (!zoomLink.trim()) {
//       Alert.alert('Error', 'No link to copy');
//       return;
//     }
//     Clipboard.setString(zoomLink);
//     Alert.alert('Copied', 'Zoom link copied to clipboard');
//   };

//   const handleSave = () => {
//     if (!zoomLink.trim()) {
//       Alert.alert('Error', 'Please enter a valid Zoom link');
//       return;
//     }

//     // Basic URL validation
//     // try {
//     //   new URL(zoomLink);
//     // } catch (error) {
//     //   Alert.alert('Error', 'Please enter a valid URL (include http:// or https://)');
//     //   return;
//     // }

//     // Check if it's actually a zoom or meeting link
//     if (!zoomLink.includes('zoom') && !zoomLink.includes('meet')) {
//       Alert.alert(
//         'Warning',
//         'This doesn\'t look like a Zoom/Meet link. Are you sure you want to save it?',
//         [
//           { text: 'Cancel', style: 'cancel' },
//           { text: 'Save', onPress: () => onSave(zoomLink) }
//         ]
//       );
//     } else {
//       console.log('====================================');
//       console.log('LIN EAT 213', );
//       console.log('====================================');
//       onSave(zoomLink);
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleCancel = () => {
//     setZoomLink(initialLink || '');
//     setIsEditing(false);
//     setHasChanges(false);
//   };

//   const handleInputChange = (text) => {
//     setZoomLink(text);
//   };

//   return (
//     <View
//       className="w-full bg-white rounded-2xl shadow-sm border border-gray-100"
//       style={{
//         padding: responsiveWidth(4),
//         gap: responsiveHeight(2),
//       }}
//     >
//       {/* Header */}
//       <View className="flex-row items-center justify-between">
//         <View className="flex-row items-center gap-2">
//           <View
//             className="rounded-lg bg-pink-100 items-center justify-center"
//             style={{
//               padding: responsiveWidth(2),
//             }}
//           >
//             <Video size={18} color="#EC4899" />
//           </View>
//           <Text className="text-base font-semibold text-gray-900">
//             Zoom Meeting Link
//           </Text>
//         </View>
        
//         {/* Edit/Cancel button when editing */}
//         {isEditing && (
//           <TouchableOpacity onPress={handleCancel} disabled={isLoading}>
//             <X size={20} color="#6B7280" />
//           </TouchableOpacity>
//         )}
//       </View>

//       {/* Link Input */}
//       <View
//         className="bg-gray-100 rounded-xl flex-row items-center"
//         style={{
//           padding: responsiveWidth(3),
//           minHeight: responsiveHeight(6),
//         }}
//       >
//         <TextInput
//           value={zoomLink}
//           onChangeText={handleInputChange}
//           placeholder="Enter Zoom/Meet meeting link"
//           placeholderTextColor="#9CA3AF"
//           className="flex-1 text-sm text-gray-900"
//           editable={isEditing && !isLoading}
//           multiline
//           numberOfLines={2}
//           textAlignVertical="top"
//         />
//         {!isEditing && zoomLink && (
//           <TouchableOpacity
//             onPress={handleCopy}
//             className="ml-2"
//             activeOpacity={0.7}
//             disabled={isLoading}
//           >
//             <Copy size={20} color={isLoading ? "#CCCCCC" : "#6B7280"} />
//           </TouchableOpacity>
//         )}
//       </View>

//       {/* Loading State */}
//       {isLoading && (
//         <View className="flex-row items-center justify-center">
//           <ActivityIndicator size="small" color="#EC4899" />
//           <Text className="text-pink-500 text-sm ml-2">Saving...</Text>
//         </View>
//       )}

//       {/* Action Buttons */}
//       <View className="flex-row" style={{ gap: responsiveWidth(3) }}>
//         <TouchableOpacity
//           onPress={isEditing ? handleCancel : handleEdit}
//           className="flex-1 bg-gray-100 rounded-xl flex-row items-center justify-center"
//           style={{
//             paddingVertical: responsiveHeight(1.5),
//           }}
//           activeOpacity={0.8}
//           disabled={isLoading}
//         >
//           {isEditing ? (
//             <X size={18} color="#6B7280" />
//           ) : (
//             <Edit3 size={18} color="#6B7280" />
//           )}
//           <Text className={`font-medium text-base ml-2 ${isLoading ? 'text-gray-400' : 'text-gray-700'}`}>
//             {isEditing ? 'Cancel' : 'Edit Link'}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={isEditing ? handleSave : handleCopy}
//           className="flex-1 bg-black rounded-xl flex-row items-center justify-center"
//           style={{
//             paddingVertical: responsiveHeight(1.5),
//             opacity: (!isEditing || hasChanges) && !isLoading ? 1 : 0.5,
//           }}
//           activeOpacity={0.8}
//           disabled={(!isEditing || !hasChanges) || isLoading}
//         >
//           {isEditing ? (
//             <>
//               {isLoading ? (
//                 <ActivityIndicator size="small" color="#FFFFFF" />
//               ) : (
//                 <Check size={18} color="#FFFFFF" />
//               )}
//               <Text className="text-white font-medium text-base ml-2">
//                 {isLoading ? 'Saving...' : 'Save'}
//               </Text>
//             </>
//           ) : (
//             <>
//               <Copy size={18} color="#FFFFFF" />
//               <Text className="text-white font-medium text-base ml-2">
//                 Copy
//               </Text>
//             </>
//           )}
//         </TouchableOpacity>
//       </View>

//       {/* Helper Text */}
//       {isEditing && (
//         <Text className="text-xs text-gray-500 text-center">
//           Make sure to include http:// or https:// in the URL
//         </Text>
//       )}
//     </View>
//   );
// };

// export default ZoomLinkInput;



import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator 
} from 'react-native';
import { Video, Edit3, Check, Copy, X } from 'lucide-react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ZoomLinkInput = ({ initialLink, onSave, isLoading = false }) => {
  const [zoomLink, setZoomLink] = useState(initialLink || '');
  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Debug initial props
  useEffect(() => {
    console.log('🎯 ZoomLinkInput - Initial props:', {
      initialLink,
      isLoading,
      isEditing,
      hasChanges
    });
  }, []);

  // Update local state when initialLink changes
  useEffect(() => {
    console.log('🔄 ZoomLinkInput - initialLink changed:', initialLink);
    setZoomLink(initialLink || '');
  }, [initialLink]);

  // Track changes
  useEffect(() => {
    const changes = zoomLink !== initialLink;
    console.log('📝 ZoomLinkInput - Change detection:', {
      zoomLink,
      initialLink,
      hasChanges: changes
    });
    setHasChanges(changes);
  }, [zoomLink, initialLink]);

  const handleCopy = () => {
    console.log('📋 Copy button pressed');
    
    if (!zoomLink.trim()) {
      console.log('❌ No link to copy');
      Alert.alert('Error', 'No link to copy');
      return;
    }
    
    Clipboard.setString(zoomLink);
    console.log('✅ Link copied to clipboard:', zoomLink);
    Alert.alert('Copied', 'Zoom link copied to clipboard');
  };

  const handleSave = () => {
    console.log('💾 Save button pressed');
    console.log('📋 Current state:', {
      zoomLink,
      hasChanges,
      isLoading,
      isEditing
    });
    
    if (!zoomLink.trim()) {
      console.log('❌ Empty link in handleSave');
      Alert.alert('Error', 'Please enter a valid Zoom link');
      return;
    }

    // Basic URL validation (optional - can be adjusted based on requirements)
    if (!zoomLink.includes('://')) {
      console.log('⚠️ Link missing protocol, but proceeding...');
      // You can choose to add https:// automatically or show warning
      // const formattedLink = zoomLink.includes('://') ? zoomLink : `https://${zoomLink}`;
      // setZoomLink(formattedLink);
      // onSave(formattedLink);
    }

    console.log('🚀 Calling onSave prop with:', zoomLink);
    onSave(zoomLink);
    
    // Don't close editing immediately if loading - wait for success
    if (!isLoading) {
      console.log('✅ Closing edit mode');
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    console.log('✏️ Edit button pressed');
    setIsEditing(true);
  };

  const handleCancel = () => {
    console.log('❌ Cancel button pressed, reverting to:', initialLink);
    setZoomLink(initialLink || '');
    setIsEditing(false);
    setHasChanges(false);
  };

  const handleInputChange = (text) => {
    console.log('⌨️ Input changed:', text);
    setZoomLink(text);
  };

  return (
    <View
      className="w-full bg-white rounded-2xl shadow-sm border border-gray-100"
      style={{
        padding: responsiveWidth(4),
        gap: responsiveHeight(2),
      }}
    >
      {/* Header */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <View
            className="rounded-lg bg-pink-100 items-center justify-center"
            style={{
              padding: responsiveWidth(2),
            }}
          >
            <Video size={18} color="#EC4899" />
          </View>
          <Text className="text-base font-semibold text-gray-900">
            Zoom Meeting Link
          </Text>
        </View>
        
        {/* Edit/Cancel button when editing */}
        {isEditing && (
          <TouchableOpacity 
            onPress={handleCancel} 
            disabled={isLoading}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <X size={20} color={isLoading ? "#CCCCCC" : "#6B7280"} />
          </TouchableOpacity>
        )}
      </View>

      {/* Link Input */}
      <View
        className="bg-gray-100 rounded-xl flex-row items-center"
        style={{
          padding: responsiveWidth(3),
          minHeight: responsiveHeight(6),
        }}
      >
        <TextInput
          value={zoomLink}
          onChangeText={handleInputChange}
          placeholder="Enter Zoom/Meet meeting link"
          placeholderTextColor="#9CA3AF"
          className="flex-1 text-sm text-gray-900"
          editable={isEditing && !isLoading}
          multiline
          numberOfLines={2}
          textAlignVertical="top"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="url"
        />
        {!isEditing && zoomLink && (
          <TouchableOpacity
            onPress={handleCopy}
            className="ml-2"
            activeOpacity={0.7}
            disabled={isLoading}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Copy size={20} color={isLoading ? "#CCCCCC" : "#6B7280"} />
          </TouchableOpacity>
        )}
      </View>

      {/* Loading State */}
      {isLoading && (
        <View className="flex-row items-center justify-center">
          <ActivityIndicator size="small" color="#EC4899" />
          <Text className="text-pink-500 text-sm ml-2">Saving...</Text>
        </View>
      )}

      {/* Action Buttons */}
      <View className="flex-row" style={{ gap: responsiveWidth(3) }}>
        {/* Edit/Cancel Button */}
        <TouchableOpacity
          onPress={isEditing ? handleCancel : handleEdit}
          className="flex-1 bg-gray-100 rounded-xl flex-row items-center justify-center"
          style={{
            paddingVertical: responsiveHeight(1.5),
            opacity: isLoading ? 0.5 : 1,
          }}
          activeOpacity={0.8}
          disabled={isLoading}
        >
          {isEditing ? (
            <X size={18} color="#6B7280" />
          ) : (
            <Edit3 size={18} color="#6B7280" />
          )}
          <Text className={`font-medium text-base ml-2 ${
            isLoading ? 'text-gray-400' : 'text-gray-700'
          }`}>
            {isEditing ? 'Cancel' : 'Edit Link'}
          </Text>
        </TouchableOpacity>

        {/* Save/Copy Button */}
        <TouchableOpacity
          onPress={isEditing ? handleSave : handleCopy}
          className="flex-1 bg-black rounded-xl flex-row items-center justify-center"
          style={{
            paddingVertical: responsiveHeight(1.5),
            opacity: (isEditing ? hasChanges : true) && !isLoading ? 1 : 0.5,
          }}
          activeOpacity={0.8}
          disabled={(isEditing && !hasChanges) || isLoading}
        >
          {isEditing ? (
            <>
              {isLoading ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Check size={18} color="#FFFFFF" />
              )}
              <Text className="text-white font-medium text-base ml-2">
                {isLoading ? 'Saving...' : 'Save'}
              </Text>
            </>
          ) : (
            <>
              <Copy size={18} color="#FFFFFF" />
              <Text className="text-white font-medium text-base ml-2">
                Copy
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      {/* Helper Text */}
      {isEditing && (
        <View>
          <Text className="text-xs text-gray-500 text-center mb-1">
            Make sure to include http:// or https:// in the URL
          </Text>
          <Text className="text-xs text-gray-400 text-center">
            {hasChanges ? 'You have unsaved changes' : 'No changes made'}
          </Text>
        </View>
      )}

      {/* Debug Info - Remove in production */}
      {/* {__DEV__ && (
        <View className="mt-2 p-2 bg-yellow-50 rounded border border-yellow-200">
          <Text className="text-xs font-mono text-yellow-800">
            Debug: Editing:{isEditing.toString()} | Changes:{hasChanges.toString()} | Loading:{isLoading.toString()}
          </Text>
        </View>
      )} */}
    </View>
  );
};

export default ZoomLinkInput;