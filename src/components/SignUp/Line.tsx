import React from 'react';
import {View, Text} from 'react-native';
import {Colors, SignUpStyles} from '@src/utils/styles';
const Line: React.FC<{}> = () => {
  return (
    <View
      style={{
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={SignUpStyles.line}></View>
      <Text
        style={{color: Colors.light, fontWeight: 'bold', marginHorizontal: 5}}>
        OR
      </Text>
      <View style={SignUpStyles.line}></View>
    </View>
  );
};

export default Line;
