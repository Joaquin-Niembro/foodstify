import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const CustomButton: React.FC<{
  title: string;
  onPress: () => void | null;
  styling: any;
}> = ({title, onPress, styling}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styling.Container}>
      <Text style={styling.Title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
