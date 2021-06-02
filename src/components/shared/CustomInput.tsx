import React from 'react';
import {View, TextInput} from 'react-native';
import {useGetIcon} from '@src/hooks';
interface iconInterface {
  library: string;
  name: string;
  size: number;
  color: string;
  styling?: any;
}
const noIconProps = {
  library: '',
  name: '',
  size: 0,
  color: '',
};
const CustomInput: React.FC<{
  value: string;
  onChangeText: (text: string) => void;
  isIcon: boolean;
  iconProps?: iconInterface;
  styling?: any;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
}> = ({
  onChangeText,
  value,
  isIcon,
  iconProps = noIconProps,
  styling,
  placeholder,
  placeholderTextColor = '#fff',
  ...rest
}) => {
  return (
    <View style={styling.Container}>
      {isIcon && useGetIcon(iconProps)}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styling.Input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        {...rest}
      />
    </View>
  );
};

export default CustomInput;
