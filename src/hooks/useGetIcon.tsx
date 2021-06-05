import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
interface iconInterface {
  library: string;
  name: string;
  size: number;
  color?: string;
  styling?: any;
}
export const useGetIcon = (
  iconProps: iconInterface,
  rest: any = {},
): JSX.Element | null => {
  switch (iconProps.library) {
    case 'Ionicons':
      return (
        <Ionicons
          name={iconProps.name}
          size={iconProps.size}
          color={iconProps.color}
          style={iconProps?.styling}
          {...rest}
        />
      );
    case 'AntDesign':
      return (
        <AntDesign
          name={iconProps.name}
          size={iconProps.size}
          color={iconProps.color}
          style={iconProps?.styling}
          {...rest}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          name={iconProps.name}
          size={iconProps.size}
          color={iconProps.color}
          style={iconProps?.styling}
          {...rest}
        />
      );
    default:
      return null;
  }
};
