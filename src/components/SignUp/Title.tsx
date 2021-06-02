import React from 'react';
import {View, Text} from 'react-native';
const noneStyle = {Container: {}, Title: {}, Subtitle: {}};
const Title: React.FC<{
  title: string;
  subtitle: string;
  styling?: any;
}> = ({title, subtitle, styling = noneStyle}) => {
  return (
    <View style={styling.Container}>
      <Text style={styling.Title}>{title}</Text>
      <Text style={styling.Subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Title;
