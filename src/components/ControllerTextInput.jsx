/* eslint-disable react-native/no-inline-styles */
// import { Controller } from 'react-hook-form';
// import { TextInput, View, Text, Pressable } from 'react-native';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';

// const ControllerTextInput = ({
//   label,
//   placeholder,
//   secureTextEntry,
//   rightIcon,
//   leftIcon,
//   name,
//   control,
//   error,
//   rules,
//   type = 'text',
//   validationRules = {}, // Add validationRules prop
//   ...props
// }) => {
//   return (
//     <Controller
//       name={name}
//       control={control}
//       rules={{ ...rules, ...validationRules }} // Merge rules and validationRules
//       render={({ field: { onChange, value, onBlur } }) => {
//         return (
//           <View className="relative w-full ">
//             {label && <Text styles="font-Medium text-md">{label}</Text>}
//             {leftIcon && (
//               <View
//                 className="absolute top-1/2  -translate-y-1/2 z-10"
//                 style={{
//                   left: responsiveWidth(3),
//                   top: responsiveHeight(6.1),
//                 }}
//               >
//                 {leftIcon}
//               </View>
//             )}
//             <TextInput
//               value={value}
//               onChangeText={text => onChange(text)}
//               onBlur={onBlur}
//               placeholder={placeholder}
//               placeholderTextColor="#999"
//               secureTextEntry={secureTextEntry}
//               className={`bg-pink-50 rounded-xl font-SemiBold border border-neutral-200 ${
//                 error && 'border-red-500'
//               }`}
//               style={{
//                 paddingLeft: responsiveWidth(10),
//                 paddingVertical: responsiveHeight(1.4),
//               }}
//               {...props}
//             />
//             {rightIcon && (
//               <Pressable
//                 onPress={props.onPressToggle}
//                 className="absolute top-1/2 -translate-y-1/2 z-10"
//                 style={{
//                   right: responsiveWidth(3),
//                   top: responsiveHeight(6),
//                 }}
//                 hitSlop={10}
//               >
//                 {rightIcon}
//               </Pressable>
//             )}

//             <Text className="text-red-500 text-xs font-regular">
//               {error && error}
//             </Text>
//           </View>
//         );
//       }}
//     />
//   );
// };

// export default ControllerTextInput;

import { Controller } from 'react-hook-form';
import { TextInput, View, Text, Pressable } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const INPUT_HEIGHT = responsiveHeight(6); // consistent input height

const ControllerTextInput = ({
  label,
  placeholder,
  secureTextEntry,
  rightIcon,
  leftIcon,
  name,
  control,
  error,
  rules,
  type = 'text',
  validationRules = {},
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, ...validationRules }}
      render={({ field: { onChange, value, onBlur } }) => {
        return (
          <View className="relative w-full">
            {label && <Text style={{ fontWeight: '500', fontSize: 16, marginBottom: 4 }}>{label}</Text>}
            <View style={{ position: 'relative', justifyContent: 'center' }}>
              {leftIcon && (
                <View
                  style={{
                    position: 'absolute',
                    left: responsiveWidth(3),
                    height: INPUT_HEIGHT,
                    width: INPUT_HEIGHT,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10,
                  }}
                >
                  {leftIcon}
                </View>
              )}
              <TextInput
                value={value}
                onChangeText={text => onChange(text)}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor="#999"
                secureTextEntry={secureTextEntry}
                className={`bg-pink-50 rounded-xl font-SemiBold border border-neutral-200 ${
                  error && 'border-red-500'
                }`}
                style={{
                  paddingLeft: leftIcon ? responsiveWidth(14) : responsiveWidth(4),
                  paddingRight: rightIcon ? responsiveWidth(14) : responsiveWidth(4),
                  height: INPUT_HEIGHT,
                  paddingVertical: 0,
                }}
                {...props}
              />
              {rightIcon && (
                <Pressable
                  onPress={props.onPressToggle}
                  style={{
                    position: 'absolute',
                    right: responsiveWidth(3),
                    height: INPUT_HEIGHT,
                    width: INPUT_HEIGHT,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10,
                  }}
                  hitSlop={10}
                >
                  {rightIcon}
                </Pressable>
              )}
            </View>
            <Text className="text-red-500 text-xs font-regular">
              {error && error}
            </Text>
          </View>
        );
      }}
    />
  );
};

export default ControllerTextInput;
